const io = require('socket.io')(3000) // Importa o socket e escuta na porta 3000

io.on('connection', socket => {
    socket.emit('chat-mensagem', 'Ola mundo')
})