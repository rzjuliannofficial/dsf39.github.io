
// JavaScript untuk mengelola interaksi navbar burger
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('header nav');

    // Toggle class 'active' untuk menampilkan/menyembunyikan navbar
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

   

    // JavaScript untuk mengelola efek auto-typing
    const typed = new Typed(".auto-typing", {
        strings: ["FrontEnd Developer", "BackEnd Developer", "FullStack Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
});

