import movies from './movies'
const cards = document.querySelector('.cards')
const movie = movies.slice(0, 30)
let categories = new Set()
let array
let genre
function uptadeUI(val = 1) {
    if (val === 1) {
        movie.sort((a, b) =>
            a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        )
    } else if (val === 2) {
        movie.sort((a, b) =>
            a.title < b.title ? 1 : b.title < a.title ? -1 : 0
        )
    } else if (val === 3) {
        movie.sort((a, b) =>
            a.year < b.year ? 1 : b.year < a.year ? -1 : 0
        )
    } else if (val === 4) {
        movie.sort((a, b) =>
            a.imdbRating < b.imdbRating ? 1 : b.imdbRating < a.imdbRating ? -1 : 0
        )
    }
    cards.innerHTML = ''
    movie.forEach((item) => {
        cards.innerHTML += ` 
        <div class="card">
        <div class="pooster">
        <img src="${item.smallPoster}">
        <a target="_blank" href="${item.trailer}">${item.title}</a>
        </div>
        <div class="min-title">${item.title}</div>
        <div class="summary">${item.summary}</div>
        <div class="language">${item.language}</div>
        <div class="runtime">${item.runtime}</div>
        <div class="genre">${item.categories}</div>
        <div class="year">${item.year}</div>
        <div class="rating"><ion-icon name="star"></ion-icon><span>${item.imdbRating}</span></div>
        <button class="see-btn">See More</button>
        <button class="bookmark-btn">Bookmark</button>
        </div>
        `
        genre = document.querySelector('.filter .genre')
        let janr
        item.categories.forEach((e) => {
            janr = e
        });
        categories.add(janr)
        array = Array.from(categories);

        const input = document.querySelector('.search')
        input.addEventListener('input', () => {
            const inputValue = input.value
            const name = document.querySelectorAll('.min-title')
            name.forEach((item) => {
                if (item.textContent.toLowerCase().includes(inputValue)) {
                    item.parentElement.classList.remove('hidden')
                } else {
                    item.parentElement.classList.add('hidden')
                }
            });
        })
    });
    array.forEach((b) => {
        genre.innerHTML += `
    <option value="${b}">${b}</option>
    `
    });
    let select = document.querySelector('.genre')
    let j = document.querySelectorAll('.card .genre')
    select.addEventListener('change', () => {
        j.forEach((e) => {
            if (e.textContent.includes(select.value)) {
                e.parentElement.classList.remove('hidden')
            } else if (select.value == 'All') {
                e.parentElement.classList.remove('hidden')
            } else {
                e.parentElement.classList.add('hidden')
            }
        });
    })
}
uptadeUI(1)
export default uptadeUI