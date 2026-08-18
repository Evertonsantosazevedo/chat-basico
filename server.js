const io = require('socket.io')(3000, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    }
})

io.on('connection', socket => {
    socket.on('enviar-mensagem', mensagem => {
        socket.broadcast.emit('chat-mensagem', mensagem)
    })
})