export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click", close)

    function open() {
        // função que pôe a classe active
        modalWrapper.classList.add('active')
    }
    function close() {
        // Função que tira a clase active
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close
    }
}