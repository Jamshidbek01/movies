const card = document.querySelectorAll('.card')
const place = document.querySelector('.bookmark-place')
let cardItem = Array.from(card)
cardItem.forEach((e) => {
    let btn = e.children[9]

    btn.addEventListener('click', () => {
        place.innerHTML += `
        <a target="_blank" class="bookmark-item" href="${e.children[0].children[1].getAttribute("href")}">${e.children[1].textContent}</a>
        `
        document.querySelector('.bookmarks').classList.add('active')
        console.log(e.children[1].textContent);
        console.log(e.children[0].children[1].getAttribute("href"));
        btn.disabled = true
    })
});
document.querySelector('.bookmark').addEventListener('click', () => {
    document.querySelector('.bookmarks').classList.toggle('active')
})
let remove = document.querySelector('.remove')
remove.addEventListener('click', () => {
    let btn = document.querySelectorAll('.bookmark-btn')
    for (let i = 0; i < btn.length; i++) {
        const element = btn[i];
        element.disabled = false
    }
    document.querySelector('.bookmarks').classList.remove('active')
    place.innerHTML = ''
})