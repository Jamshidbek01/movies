import uptadeUI from "./uptadeUI"
let sorting = document.querySelector('.sorting')
sorting.addEventListener('change', () => {
    let val = Number(sorting.value)
    uptadeUI(val)
})