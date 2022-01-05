console.log('hello!');

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
    console.log(visibility);
});