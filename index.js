const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
const showBuyTickets = () => {
    modal.classList.add('open')
    
}

const hideBuyTickets = () => {
    modal.classList.remove('open')
}
modal.classList.remove('close')

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click' ,showBuyTickets)
}

modalClose.addEventListener("click" ,hideBuyTickets )

modal.addEventListener("click" , hideBuyTickets)

modalContainer.addEventListener("click" , (event) => {
    event.stopPropagation();
})