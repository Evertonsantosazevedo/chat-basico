const io = require('socket.io')(3000, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    }
})

const usuarios = {}

io.on('connection', socket => {
    socket.on('novo-usuario', nome => {
        usuarios[socket.id] = nome
        io.emit('chat-mensagem', {
            nome: 'Sistema',
            mensagem: `${nome} entrou no chat`
        })
    })

    socket.on('enviar-mensagem', mensagem => {
        const nome = usuarios[socket.id] || 'Anônimo'
        io.emit('chat-mensagem', { nome, mensagem })
    })

    socket.on('disconnect', () => {
        const nome = usuarios[socket.id]

        if (nome) {
            io.emit('chat-mensagem', {
                nome: 'Sistema',
                mensagem: `${nome} saiu do chat`
            })
            delete usuarios[socket.id]
        }
    })
})