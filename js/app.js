document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.navigation-list');

    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});