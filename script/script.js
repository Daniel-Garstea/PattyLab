function hamburger_active(){
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.navbarlinks');
    hamburger.classList.toggle('active-hamburger');
    links.classList.toggle('active-hamburger');
}