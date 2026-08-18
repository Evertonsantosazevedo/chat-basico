const socket = io('http://localhost:3000')
const mensagemContainer = document.getElementById('mensagem-container')
const mensagemForm = document.getElementById('envio-container')
const mensagemInput = document.getElementById('mensagem-input')


socket.on('chat-mensagem', data => {
    appendMensagem(data)
})

socket.on('chat-mensagem', data => {
    console.log(data)
})

mensagemForm.addEventListener('submit', e => {
    e.preventDefault()
    const mensagem = mensagemInput.value
    socket.emit('enviar-mensagem', mensagem)
    mensagemInput.value = ''
})

function appendMensagem(mensagem) {
    const mensagemElement = document.createElement('div')
    mensagemElement.innerText = mensagem
    mensagemContainer.append(mensagemElement)
}