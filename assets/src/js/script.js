// REVAN | Script

// Untuk menyembunyikan loading
document.getElementById("lanjutkan").addEventListener("click", function() {
    let loading = document.querySelector(".loading");
    loading.classList.add("hidden-loading");
    let profilHidden = document.querySelector(".profil-hidden");
    profilHidden.classList.remove("profil-hidden");

    setTimeout(() => {
        loading.classList.add("delete-loading");
    }, 750);

    setTimeout(() => {
        let static = document.querySelector(".static");
        static.classList.remove("fixed");
    }, 1000);
});



// Untuk menampilkan sapa user
document.getElementById("revan").addEventListener("click", function() {
    let say = document.querySelector(".say");
    say.classList.add("say-active");
    let sayContent = document.querySelector(".say-content");
    sayContent.classList.add("say-content-active");
    let welcome = document.querySelector(".welcome");
    welcome.classList.add("welcome-active");
});

// Untuk menyembunyikan sapa user
document.getElementById("close-say").addEventListener("click", function() {
    let say = document.querySelector(".say");
    say.classList.remove("say-active");
    let sayContent = document.querySelector(".say-content");
    sayContent.classList.remove("say-content-active");
    let welcome = document.querySelector(".welcome");
    welcome.classList.remove("welcome-active");
});



// Untuk menampilkan menu
document.getElementById("button-menu").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    menu.classList.add("active-menu");
    let buttonMenu = document.querySelector(".button-menu");
    buttonMenu.classList.add("active-button-menu");
    let buttonClose = document.querySelector(".button-close-container");
    buttonClose.classList.add("active-button-close");
    let darkBackground = document.querySelector(".dark-background");
    darkBackground.classList.add("dark-background-active");
});

// Untuk menyembunyikan menu
const links = document.querySelectorAll(".menu-list a");

links.forEach(link => {
    link.addEventListener("click", function() {
        let menu = document.querySelector(".menu");
        menu.classList.remove("active-menu");
        let buttonMenu = document.querySelector(".button-menu");
        buttonMenu.classList.remove("active-button-menu");
        let buttonClose = document.querySelector(".button-close-container");
        buttonClose.classList.remove("active-button-close");
        let darkBackground = document.querySelector(".dark-background");
        darkBackground.classList.remove("dark-background-active");
    });
});

document.getElementById("button-close").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    menu.classList.remove("active-menu");
    let buttonMenu = document.querySelector(".button-menu");
    buttonMenu.classList.remove("active-button-menu");
    let buttonClose = document.querySelector(".button-close-container");
    buttonClose.classList.remove("active-button-close");
    let darkBackground = document.querySelector(".dark-background");
    darkBackground.classList.remove("dark-background-active");
});

const menu = document.querySelector(".menu");
const buttonMenu = document.getElementById("button-menu");

document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !buttonMenu.contains(event.target)) {
        let menu = document.querySelector(".menu");
        menu.classList.remove("active-menu");
        let buttonMenu = document.querySelector(".button-menu");
        buttonMenu.classList.remove("active-button-menu");
        let buttonClose = document.querySelector(".button-close-container");
        buttonClose.classList.remove("active-button-close");
        let darkBackground = document.querySelector(".dark-background");
        darkBackground.classList.remove("dark-background-active");
    }
});



// Untuk Menjalankan Animasi 01
document.getElementById("play-animasi-01").addEventListener("click", function() {
    let animasi01 = document.querySelector(".animasi-01");
    animasi01.classList.add("animasi-01-active");
    let playAnimasi01 = document.querySelector(".play-animasi-01");
    playAnimasi01.classList.add("hidden-action");
    let StopAnimasi01 = document.querySelector(".stop-animasi-01");
    StopAnimasi01.classList.add("active-action");
});

// Untuk Menghentikan Animasi 01
document.getElementById("stop-animasi-01").addEventListener("click", function() {
    let animasi01 = document.querySelector(".animasi-01");
    animasi01.classList.remove("animasi-01-active");
    let playAnimasi01 = document.querySelector(".play-animasi-01");
    playAnimasi01.classList.remove("hidden-action");
    let StopAnimasi01 = document.querySelector(".stop-animasi-01");
    StopAnimasi01.classList.remove("active-action");
});



// Untuk Menjalankan Animasi 02
document.getElementById("play-animasi-02").addEventListener("click", function() {
    let animasi02 = document.querySelector(".animasi-02");
    animasi02.classList.add("animasi-02-active");
    let playAnimasi02 = document.querySelector(".play-animasi-02");
    playAnimasi02.classList.add("hidden-action");
    let StopAnimasi02 = document.querySelector(".stop-animasi-02");
    StopAnimasi02.classList.add("active-action");
});

// Untuk Menghentikan Animasi 02
document.getElementById("stop-animasi-02").addEventListener("click", function() {
    let animasi02 = document.querySelector(".animasi-02");
    animasi02.classList.remove("animasi-02-active");
    let playAnimasi02 = document.querySelector(".play-animasi-02");
    playAnimasi02.classList.remove("hidden-action");
    let StopAnimasi02 = document.querySelector(".stop-animasi-02");
    StopAnimasi02.classList.remove("active-action");
});



// Untuk Menjalankan Animasi 03
document.getElementById("play-animasi-03").addEventListener("click", function() {
    let animasi03 = document.querySelector(".animasi-03");
    animasi03.classList.add("animasi-03-active");
    let playAnimasi03 = document.querySelector(".play-animasi-03");
    playAnimasi03.classList.add("hidden-action");
    let StopAnimasi03 = document.querySelector(".stop-animasi-03");
    StopAnimasi03.classList.add("active-action");
});

// Untuk Menghentikan Animasi 03
document.getElementById("stop-animasi-03").addEventListener("click", function() {
    let animasi03 = document.querySelector(".animasi-03");
    animasi03.classList.remove("animasi-03-active");
    let playAnimasi03 = document.querySelector(".play-animasi-03");
    playAnimasi03.classList.remove("hidden-action");
    let StopAnimasi03 = document.querySelector(".stop-animasi-03");
    StopAnimasi03.classList.remove("active-action");
});



// Untuk Menjalankan Animasi Foto 01
document.getElementById("lihat-foto-01").addEventListener("click", function() {
    let foto01 = document.querySelector(".foto-01");
    foto01.classList.add("foto-active");

    setTimeout(() => {
        foto01.classList.remove("foto-active");
    }, 5000);
});

// Untuk Menjalankan Animasi Foto 02
document.getElementById("lihat-foto-02").addEventListener("click", function() {
    let foto02 = document.querySelector(".foto-02");
    foto02.classList.add("foto-active");

    setTimeout(() => {
        foto02.classList.remove("foto-active");
    }, 5000);
});

// Untuk Menjalankan Animasi Foto 03
document.getElementById("lihat-foto-03").addEventListener("click", function() {
    let foto03 = document.querySelector(".foto-03");
    foto03.classList.add("foto-active");

    setTimeout(() => {
        foto03.classList.remove("foto-active");
    }, 5000);
});

// Untuk Menjalankan Animasi Foto 04
document.getElementById("lihat-foto-04").addEventListener("click", function() {
    let foto04 = document.querySelector(".foto-04");
    foto04.classList.add("foto-active");

    setTimeout(() => {
        foto04.classList.remove("foto-active");
    }, 5000);
});



// Untuk Menampilkan Konten Dana
const tombolDonasi = document.querySelectorAll(".container-02 .donasi a");

tombolDonasi.forEach(tombolDonasi => {
    tombolDonasi.addEventListener("click", function() {
        let dana = document.querySelector(".dana");
        dana.classList.remove("dana-hidden");
    });
});

// Untuk Menyalin Nomor Dana
document.getElementById("salin-nomor-dana").addEventListener("click", function() {
    let nomorDana = document.getElementById("nomor-dana").innerText;

    navigator.clipboard.writeText(nomorDana).then(() => {
        let berhasilSalin = document.querySelector(".berhasil-salin");
        // berhasilSalin.style.display = "block";
        berhasilSalin.classList.remove("berhasil-salin-hidden");

        setTimeout(() => {
            // berhasilSalin.style.display = "none";
            berhasilSalin.classList.add("berhasil-salin-hidden");
        }, 3000);
    }).catch(err => {
        console.error("Gagal menyalin nomor", err);
    });
});

// Untuk Menyembunyikan Konten Dana
document.getElementById("batalkan-donasi").addEventListener("click", function() {
    let dana = document.querySelector(".dana");
    dana.classList.add("dana-hidden");
});



// Untuk Menampilkan Konten Profile
document.getElementById("nav-profile").addEventListener("click", function() {
    let profile = document.getElementById("profile");
    profile.classList.add("sidebar-content-active");
    let static = document.querySelector(".static");
    static.classList.add("fixed");
});

document.getElementById("menu-profile").addEventListener("click", function() {
    let profile = document.getElementById("profile");
    profile.classList.add("sidebar-content-active");
    let static = document.querySelector(".static");
    static.classList.add("fixed");
});

// Untuk Menyembunyikan Konten Profile
document.getElementById("profile-back").addEventListener("click", function() {
    let profile = document.getElementById("profile");
    profile.classList.remove("sidebar-content-active");
    let static = document.querySelector(".static");
    static.classList.remove("fixed");
});



// Untuk Menampilkan Konten Comment
document.getElementById("menu-comment").addEventListener("click", function() {
    let comment = document.getElementById("comment");
    comment.classList.add("sidebar-content-active");
    let static = document.querySelector(".static");
    static.classList.add("fixed");
});

// Untuk Menyembunyikan Konten Comment
document.getElementById("comment-back").addEventListener("click", function() {
    let comment = document.getElementById("comment");
    comment.classList.remove("sidebar-content-active");
    let static = document.querySelector(".static");
    static.classList.remove("fixed");
});



// Untuk Menampilkan Konten About
document.getElementById("menu-about").addEventListener("click", function() {
    let about = document.getElementById("about");
    about.classList.add("sidebar-content-active");
    let static = document.querySelector(".static");
    static.classList.add("fixed");
});

// Untuk Menyembunyikan Konten About
document.getElementById("about-back").addEventListener("click", function() {
    let about = document.getElementById("about");
    about.classList.remove("sidebar-content-active");
    let static = document.querySelector(".static");
    static.classList.remove("fixed");
});



// Untuk Fitur Restart Website
document.getElementById("restart-website").addEventListener("click", function(event) {
    event.preventDefault();
    history.replaceState(null, null, window.location.pathname);
    location.reload();
});