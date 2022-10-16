const dropDown = document.querySelector('.dropDown');
const link2 = document.querySelector('.link2');
const subLink = document.querySelector('.subLink');

function expandMenu() {
    link2.addEventListener('click', () => {
        dropDown.classList.toggle('active');
    })
}
expandMenu();