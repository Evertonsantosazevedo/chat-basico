const socket = io('http://localhost:3000')
const mensagemContainer = document.getElementById('mensagem-container')
const mensagemForm = document.getElementById('envio-container')
const mensagemInput = document.getElementById('mensagem-input')

const nome = prompt('Qual o seu nome ? ')
appendMensagem('Você entrou no chat')
socket.emit('novo-usuario', nome)

socket.on('chat-mensagem', data => {
    const nomeRemetente = data && data.nome ? data.nome : 'Sistema'
    const textoMensagem = data && data.mensagem ? data.mensagem : data
    appendMensagem(`${nomeRemetente}: ${textoMensagem}`)
})

mensagemForm.addEventListener('submit', e => {
    e.preventDefault()

    const mensagem = mensagemInput.value.trim()

    if (!mensagem) {
        return
    }

    socket.emit('enviar-mensagem', mensagem)
    mensagemInput.value = ''
})

function appendMensagem(mensagem) {
    const mensagemElement = document.createElement('div')
    mensagemElement.innerText = mensagem
    mensagemContainer.append(mensagemElement)
}