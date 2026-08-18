const io = require('socket.io')(3000, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    }
})

io.on('connection', socket => {
    console.log('Cliente conectado:', socket.id)
    socket.emit('chat-mensagem', 'Ola mundo')
})