import './scss/style.scss';

let menu = document.getElementById('mobile-nav');
let icon = document.getElementById('icon');
let header = document.getElementById('header');

icon.addEventListener('click', mobileClicked);

function mobileClicked () {
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
        header.style.marginBottom = '80px';
    } else {
        menu.style.display = 'block';
        header.style.marginBottom = '0';
    }
}