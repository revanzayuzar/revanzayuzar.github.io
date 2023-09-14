// REVAN | Script



// Untuk menyelesaikan loading
document.getElementById("loading").addEventListener("click", function() {
    let loading = document.querySelector(".loading");
    loading.classList.remove("loading");
    loading.classList.add("finish-loading");
    let fixed = document.querySelector(".fixed");
    fixed.classList.remove("fixed");
});



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

const menu = document.querySelector(".menu");
const buttonMenu = document.getElementById("button-menu");
const buttonClose = document.getElementById("button-close");
const revan = document.getElementById("revan");
const closeSay = document.getElementById("close-say");
const say = document.querySelector(".say");

document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !buttonMenu.contains(event.target) && !buttonClose.contains(event.target) && !revan.contains(event.target) && !closeSay.contains(event.target) && !say.contains(event.target)) {
        let menu = document.querySelector(".menu");
        menu.classList.remove("active-menu");
        let buttonMenu = document.querySelector(".button-menu");
        buttonMenu.classList.remove("hidden-button");
        buttonMenu.classList.add("active-button");
        let buttonClose = document.querySelector(".button-close");
        buttonClose.classList.remove("active-button");
    }
});