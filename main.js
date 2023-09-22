const menuBtn = document.querySelector('.menuBtn')
const nav = document.querySelector('nav')

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open')

    if(nav.classList.contains('open')){
        menuBtn.innerHTML = '<iconify-icon icon="iconamoon:close-fill"></iconify-icon>'
    } else {
        menuBtn.innerHTML = '<iconify-icon icon="ic:round-menu"></iconify-icon>'
    }
})