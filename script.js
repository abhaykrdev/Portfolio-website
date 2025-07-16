var typed= new Typed(".typed-text", {
    strings:["Ethical Hacker" , "Game Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}