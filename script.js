const socket = io('http://localhost:3000')

socket.on('chat-mensagem', data => {
    console.log(data)
})