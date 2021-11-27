/* Adding click affect on block so that it actually animates*/
const menu = document.querySelector('#mobile-menu'); /*Hashtag because we are using an id*/
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

} );
