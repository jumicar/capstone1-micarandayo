const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerLines = document.querySelector('.hamburger-btn__lines');
const navMenu = document.querySelector('.nav-menu');
const mobileList = document.querySelector('.mobile-lists');

const toggle = () => {
    hamburgerLines.classList.toggle('hamburger-btn__open');
    navMenu.classList.toggle('active');
}



hamburgerBtn.addEventListener('click', () => {
    toggle();
});

mobileList.addEventListener('click', () => {
        toggle();
    }
)