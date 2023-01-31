const card = document.querySelectorAll('.card')
const modalInfo = document.querySelector('.modal-info')
const modal = document.querySelector('.modal')
let cardItem = Array.from(card)
cardItem.forEach((el) => {
    let btn = el.children[8]
    btn.addEventListener('click', () => {
        modal.classList.toggle('active')
        modalInfo.innerHTML = `
        <a href="${el.children[0].children[1].getAttribute("href")}"><img src="${el.children[0].children[0].getAttribute("src")}" alt="image"></a>
        <div class="modal-name">${el.children[1].textContent}</div>
        <div class="modal-genre"><span>Genre: </span><p>${el.children[5].textContent}</p></div>
        <div class="modal-year"><span>Year: </span><p>${el.children[6].textContent}</p></div>
        <div class="modal-language"><span>Language: </span><p>${el.children[3].textContent}</p></div>
        <div class="modal-runtime"><span>Runtime: </span><p>${el.children[4].textContent}</p></div>
        <div class="modal-summary"><span>Summary: </span>${el.children[2].textContent}</div>
        `
    })
});
let closeBtn = document.querySelector('.closeBtn')
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
})