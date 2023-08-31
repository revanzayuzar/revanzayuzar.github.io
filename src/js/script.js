// REVAN | Script



// Untuk menyelesaikan loading
setTimeout(function() {
    let loading = document.querySelector(".loading");
    loading.classList.add("finish-loading");
}, 2700);



// Untuk mengubah body fixed menjadi static
setTimeout(function() {
    let fixed = document.querySelector(".fixed");
    fixed.classList.remove("fixed");
}, 3000);



// Untuk menampilkan sapa user
document.getElementById("revan").addEventListener("click", function() {
    let say = document.querySelector(".say");
    say.classList.add("say-active");
    let welcome = document.querySelector(".welcome");
    welcome.classList.add("welcome-active");
});



// Untuk menyembunyikan sapa user
document.getElementById("close-say").addEventListener("click", function() {
    let say = document.querySelector(".say");
    say.classList.remove("say-active");
    let welcome = document.querySelector(".welcome");
    welcome.classList.remove("welcome-active");
});



// Untuk menampilkan menu
document.getElementById("button-menu").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    menu.classList.add("active-menu");
    let buttonMenu = document.querySelector(".button-menu");
    buttonMenu.classList.add("hidden-button");
    let buttonClose = document.querySelector(".button-close");
    buttonClose.classList.add("active-button");
});



// Untuk menyembunyikan menu
document.getElementById("button-close").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    menu.classList.remove("active-menu");
    let buttonMenu = document.querySelector(".button-menu");
    buttonMenu.classList.remove("hidden-button");
    buttonMenu.classList.add("active-button");
    let buttonClose = document.querySelector(".button-close");
    buttonClose.classList.remove("active-button");
});