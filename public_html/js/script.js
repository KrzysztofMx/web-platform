console.log('Pozdrawiam Laure');

const primary = document.querySelector('.primary-navigation');
const btn_menu = document.querySelector('.btn-menu');



btn_menu.addEventListener('click', () => {
    const visibility = primary.getAttribute('data-visible');

    if (visibility === "false") {
        primary.setAttribute('data-visible', true);
        btn_menu.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
        primary.setAttribute('data-visible', false)
        btn_menu.setAttribute('aria-expanded', false)
    }
});


const top_btn = document.querySelector('.to-top-btn');

window.onscroll = function name() {
    top_btn.classList.toggle('show', window.scrollY >= 700);
}
top_btn.onclick = function() {
    window.scrollTo({ behavior: 'smooth', top: 0 });
}