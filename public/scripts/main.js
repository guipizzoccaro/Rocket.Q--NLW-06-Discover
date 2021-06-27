import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDesc = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botês que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// Vai passar pro button o eventlistener
checkButtons.forEach(button => {
    // add o listener
    button.addEventListener("click", hadleClick)
})

const deleteButton = document.querySelectorAll(".actions .delete")
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => hadleClick(event, false))
})

function hadleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDesc.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    // Abrir o modal
    modal.open()

}



// Pegar quando o marcar como lido foi clicado


