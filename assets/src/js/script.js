// REVAN | Script

// Untuk Menutup Notifikasi Awal
document.getElementById("close-notifikasi-awal").addEventListener("click", function() {
    let notifikasiAwal = document.querySelector(".notifikasi-awal");
    notifikasiAwal.classList.add("delete-notifikasi-awal");
});
// End Untuk Menutup Notifikasi Awal



// Untuk Menyelesaikan Loading
document.getElementById("lanjutkan").addEventListener("click", function() {
    let loading = document.querySelector(".loading");
    loading.classList.add("hidden-loading");
    let profilHidden = document.querySelector(".profil-hidden");
    profilHidden.classList.remove("profil-hidden");

    setTimeout(() => {
        loading.classList.add("delete-loading");
    }, 750);

    setTimeout(() => {
        let beranda = document.querySelector(".main-menu-beranda");
        beranda.classList.add("main-menu-scroll");
    }, 1000);
});
// End Untuk Menyelesaikan Loading



// Untuk Menampilkan Konten Menu Utama
// -----------------------------------
// Untuk Menampilkan Konten Menu Utama | Home
document.getElementById("nav-beranda").addEventListener("click", function() {
    let navBeranda = document.querySelector(".nav-beranda");
    let navKonten = document.querySelector(".nav-konten");
    let navNotifikasi = document.querySelector(".nav-notifikasi");
    let navProfil = document.querySelector(".nav-profil");

    navBeranda.classList.add("nav-link-active");
    navKonten.classList.remove("nav-link-active");
    navNotifikasi.classList.remove("nav-link-active");
    navProfil.classList.remove("nav-link-active");

    let beranda = document.querySelector(".main-menu-beranda");
    let konten = document.querySelector(".main-menu-konten");
    let notifikasi = document.querySelector(".main-menu-notifikasi");
    let profil = document.querySelector(".main-menu-profil");

    beranda.classList.add("main-menu-active", "main-menu-scroll");
    konten.classList.remove("main-menu-active", "main-menu-scroll");
    notifikasi.classList.remove("main-menu-active", "main-menu-scroll");
    profil.classList.remove("main-menu-active", "main-menu-scroll");
});
// End Untuk Menampilkan Konten Menu Utama | Home

// Untuk Menampilkan Konten Menu Utama | Content
document.getElementById("nav-konten").addEventListener("click", function() {
    let navBeranda = document.querySelector(".nav-beranda");
    let navKonten = document.querySelector(".nav-konten");
    let navNotifikasi = document.querySelector(".nav-notifikasi");
    let navProfil = document.querySelector(".nav-profil");

    navBeranda.classList.remove("nav-link-active");
    navKonten.classList.add("nav-link-active");
    navNotifikasi.classList.remove("nav-link-active");
    navProfil.classList.remove("nav-link-active");

    let beranda = document.querySelector(".main-menu-beranda");
    let konten = document.querySelector(".main-menu-konten");
    let notifikasi = document.querySelector(".main-menu-notifikasi");
    let profil = document.querySelector(".main-menu-profil");

    beranda.classList.remove("main-menu-active", "main-menu-scroll");
    konten.classList.add("main-menu-active", "main-menu-scroll");
    notifikasi.classList.remove("main-menu-active", "main-menu-scroll");
    profil.classList.remove("main-menu-active", "main-menu-scroll");
});
// End Untuk Menampilkan Konten Menu Utama | Content

// Untuk Menampilkan Konten Menu Utama | Notification
document.getElementById("nav-notifikasi").addEventListener("click", function() {
    let navBeranda = document.querySelector(".nav-beranda");
    let navKonten = document.querySelector(".nav-konten");
    let navNotifikasi = document.querySelector(".nav-notifikasi");
    let navProfil = document.querySelector(".nav-profil");

    navBeranda.classList.remove("nav-link-active");
    navKonten.classList.remove("nav-link-active");
    navNotifikasi.classList.add("nav-link-active");
    navProfil.classList.remove("nav-link-active");

    let beranda = document.querySelector(".main-menu-beranda");
    let konten = document.querySelector(".main-menu-konten");
    let notifikasi = document.querySelector(".main-menu-notifikasi");
    let profil = document.querySelector(".main-menu-profil");

    beranda.classList.remove("main-menu-active", "main-menu-scroll");
    konten.classList.remove("main-menu-active", "main-menu-scroll");
    notifikasi.classList.add("main-menu-active", "main-menu-scroll");
    profil.classList.remove("main-menu-active", "main-menu-scroll");
});
// End Untuk Menampilkan Konten Menu Utama | Notification

// Untuk Menampilkan Konten Menu Utama | Profile
document.getElementById("nav-profil").addEventListener("click", function() {
    let navBeranda = document.querySelector(".nav-beranda");
    let navKonten = document.querySelector(".nav-konten");
    let navNotifikasi = document.querySelector(".nav-notifikasi");
    let navProfil = document.querySelector(".nav-profil");

    navBeranda.classList.remove("nav-link-active");
    navKonten.classList.remove("nav-link-active");
    navNotifikasi.classList.remove("nav-link-active");
    navProfil.classList.add("nav-link-active");

    let beranda = document.querySelector(".main-menu-beranda");
    let konten = document.querySelector(".main-menu-konten");
    let notifikasi = document.querySelector(".main-menu-notifikasi");
    let profil = document.querySelector(".main-menu-profil");

    beranda.classList.remove("main-menu-active", "main-menu-scroll");
    konten.classList.remove("main-menu-active", "main-menu-scroll");
    notifikasi.classList.remove("main-menu-active", "main-menu-scroll");
    profil.classList.add("main-menu-active", "main-menu-scroll");
});
// End Untuk Menampilkan Konten Menu Utama | Profile
// ---------------------------------------
// End Untuk Menampilkan Konten Menu Utama



// Untuk Menampilkan Daftar Menu
document.getElementById("button-menu").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    menu.classList.add("active-menu");
    menu.scrollTop = 0;
    let buttonMenu = document.querySelector(".button-menu");
    buttonMenu.classList.add("active-button-menu");
    let buttonClose = document.querySelector(".button-close-container");
    buttonClose.classList.add("active-button-close");
    let darkBackground = document.querySelector(".dark-background");
    darkBackground.classList.add("dark-background-active");
});
// End Untuk Menampilkan Daftar Menu

// Untuk Menyembunyikan Daftar Menu
// --------------------------------
// Dengan Kondisi 1
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
// End Dengan Kondisi 1

// Dengan Kondisi 2
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
// End Dengan Kondisi 2

// Dengan Kondisi 3
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
// End Dengan Kondisi 3
// ------------------------------------
// End Untuk Menyembunyikan Daftar Menu



// Untuk Menampilkan Sapa User
document.getElementById("revan").addEventListener("click", function() {
    let say = document.querySelector(".say");
    say.classList.add("say-active");
    let sayContent = document.querySelector(".say-content");
    sayContent.classList.add("say-content-active");
    let welcome = document.querySelector(".welcome");
    welcome.classList.add("welcome-active");
});
// End Untuk Menampilkan Sapa User

// Untuk Menyembunyikan Sapa User
document.getElementById("close-say").addEventListener("click", function() {
    let say = document.querySelector(".say");
    say.classList.remove("say-active");
    let sayContent = document.querySelector(".say-content");
    sayContent.classList.remove("say-content-active");
    let welcome = document.querySelector(".welcome");
    welcome.classList.remove("welcome-active");
});
// End Untuk Menyembunyikan Sapa User



// Untuk Menjalankan Animasi 01
document.getElementById("play-animasi-01").addEventListener("click", function() {
    let animasi01 = document.querySelector(".animasi-01");
    animasi01.classList.add("animasi-01-active");
    let playAnimasi01 = document.querySelector(".play-animasi-01");
    playAnimasi01.classList.add("hidden-action");
    let StopAnimasi01 = document.querySelector(".stop-animasi-01");
    StopAnimasi01.classList.add("active-action");
});
// End Untuk Menjalankan Animasi 01

// Untuk Menghentikan Animasi 01
document.getElementById("stop-animasi-01").addEventListener("click", function() {
    let animasi01 = document.querySelector(".animasi-01");
    animasi01.classList.remove("animasi-01-active");
    let playAnimasi01 = document.querySelector(".play-animasi-01");
    playAnimasi01.classList.remove("hidden-action");
    let StopAnimasi01 = document.querySelector(".stop-animasi-01");
    StopAnimasi01.classList.remove("active-action");
});
// End Untuk Menghentikan Animasi 01



// Untuk Menjalankan Animasi 02
document.getElementById("play-animasi-02").addEventListener("click", function() {
    let animasi02 = document.querySelector(".animasi-02");
    animasi02.classList.add("animasi-02-active");
    let playAnimasi02 = document.querySelector(".play-animasi-02");
    playAnimasi02.classList.add("hidden-action");
    let StopAnimasi02 = document.querySelector(".stop-animasi-02");
    StopAnimasi02.classList.add("active-action");
});
// End Untuk Menjalankan Animasi 02

// Untuk Menghentikan Animasi 02
document.getElementById("stop-animasi-02").addEventListener("click", function() {
    let animasi02 = document.querySelector(".animasi-02");
    animasi02.classList.remove("animasi-02-active");
    let playAnimasi02 = document.querySelector(".play-animasi-02");
    playAnimasi02.classList.remove("hidden-action");
    let StopAnimasi02 = document.querySelector(".stop-animasi-02");
    StopAnimasi02.classList.remove("active-action");
});
// End Untuk Menghentikan Animasi 02



// Untuk Menjalankan Animasi 03
document.getElementById("play-animasi-03").addEventListener("click", function() {
    let animasi03 = document.querySelector(".animasi-03");
    animasi03.classList.add("animasi-03-active");
    let playAnimasi03 = document.querySelector(".play-animasi-03");
    playAnimasi03.classList.add("hidden-action");
    let StopAnimasi03 = document.querySelector(".stop-animasi-03");
    StopAnimasi03.classList.add("active-action");
});
// End Untuk Menjalankan Animasi 03

// Untuk Menghentikan Animasi 03
document.getElementById("stop-animasi-03").addEventListener("click", function() {
    let animasi03 = document.querySelector(".animasi-03");
    animasi03.classList.remove("animasi-03-active");
    let playAnimasi03 = document.querySelector(".play-animasi-03");
    playAnimasi03.classList.remove("hidden-action");
    let StopAnimasi03 = document.querySelector(".stop-animasi-03");
    StopAnimasi03.classList.remove("active-action");
});
// End Untuk Menghentikan Animasi 03



// Untuk Menjalankan Animasi Foto 01
document.getElementById("lihat-foto-01").addEventListener("click", function() {
    let foto01 = document.querySelector(".foto-01");
    foto01.classList.add("foto-active");

    setTimeout(() => {
        foto01.classList.remove("foto-active");
    }, 5000);
});
// End Untuk Menjalankan Animasi Foto 01

// Untuk Menjalankan Animasi Foto 02
document.getElementById("lihat-foto-02").addEventListener("click", function() {
    let foto02 = document.querySelector(".foto-02");
    foto02.classList.add("foto-active");

    setTimeout(() => {
        foto02.classList.remove("foto-active");
    }, 5000);
});
// End Untuk Menjalankan Animasi Foto 02

// Untuk Menjalankan Animasi Foto 03
document.getElementById("lihat-foto-03").addEventListener("click", function() {
    let foto03 = document.querySelector(".foto-03");
    foto03.classList.add("foto-active");

    setTimeout(() => {
        foto03.classList.remove("foto-active");
    }, 5000);
});
// End Untuk Menjalankan Animasi Foto 03

// Untuk Menjalankan Animasi Foto 04
document.getElementById("lihat-foto-04").addEventListener("click", function() {
    let foto04 = document.querySelector(".foto-04");
    foto04.classList.add("foto-active");

    setTimeout(() => {
        foto04.classList.remove("foto-active");
    }, 5000);
});
// End Untuk Menjalankan Animasi Foto 04



// Untuk Menampilkan Konten Dana
const tombolDonasi = document.querySelectorAll(".container-02 .donasi a");

tombolDonasi.forEach(tombolDonasi => {
    tombolDonasi.addEventListener("click", function() {
        let dana = document.querySelector(".dana");
        dana.classList.remove("dana-hidden");
    });
});
// End Untuk Menampilkan Konten Dana

// Untuk Menyalin Nomor Dana
document.getElementById("salin-nomor-dana").addEventListener("click", function() {
    let nomorDana = document.getElementById("nomor-dana").innerText;

    navigator.clipboard.writeText(nomorDana).then(() => {
        let berhasilSalin = document.querySelector(".berhasil-salin");
        berhasilSalin.classList.remove("berhasil-salin-hidden");

        setTimeout(() => {
            berhasilSalin.classList.add("berhasil-salin-hidden");
        }, 3000);
    }).catch(err => {
        console.error("Gagal menyalin nomor", err);
    });
});
// End Untuk Menyalin Nomor Dana

// Untuk Menyembunyikan Konten Dana
document.getElementById("batalkan-donasi").addEventListener("click", function() {
    let dana = document.querySelector(".dana");
    dana.classList.add("dana-hidden");
});
// End Untuk Menyembunyikan Konten Dana



// Untuk Menampilkan Konten Comment
document.getElementById("menu-comment").addEventListener("click", function() {
    let comment = document.getElementById("comment");
    comment.classList.add("sidebar-content-active");
    comment.scrollTop = 0;
    let beranda = document.querySelector(".main-menu-beranda");
    beranda.classList.remove("main-menu-scroll");
});
// End Untuk Menampilkan Konten Comment

// Untuk Menyembunyikan Konten Comment
document.getElementById("comment-back").addEventListener("click", function() {
    let comment = document.getElementById("comment");
    comment.classList.remove("sidebar-content-active");
    let beranda = document.querySelector(".main-menu-beranda");
    beranda.classList.add("main-menu-scroll");
});
// End Untuk Menyembunyikan Konten Comment



// Untuk Menampilkan Konten About
document.getElementById("menu-about").addEventListener("click", function() {
    let about = document.getElementById("about");
    about.classList.add("sidebar-content-active");
    about.scrollTop = 0;
    let beranda = document.querySelector(".main-menu-beranda");
    beranda.classList.remove("main-menu-scroll");
});
// End Untuk Menampilkan Konten About

// Untuk Menyembunyikan Konten About
document.getElementById("about-back").addEventListener("click", function() {
    let about = document.getElementById("about");
    about.classList.remove("sidebar-content-active");
    let beranda = document.querySelector(".main-menu-beranda");
    beranda.classList.add("main-menu-scroll");
});
// End Untuk Menyembunyikan Konten About



// Untuk Fitur Restart Website
document.getElementById("restart-website").addEventListener("click", function(event) {
    event.preventDefault();
    history.replaceState(null, null, window.location.pathname);
    location.reload();
});
// End Untuk Fitur Restart Website



// Untuk Fitur Pencarian Konten
const searchInput = document.getElementById("search-input");
const items = document.querySelectorAll(".konten .content .item");
const noResult = document.querySelector(".no-result");

searchInput.addEventListener("input", function() {
    // Ambil kata kunci pencarian dan ubah ke huruf kecil
    const query = this.value.toLowerCase().trim();
    let found = 0;

    items.forEach(function(item) {
        // Ubah teks konten ke huruf kecil untuk pencarian yang tidak case-sensitive
        const text = item.textContent.toLowerCase();

        if (text.includes(query)) {
            item.style.display = "block";
            found++;
        } else {
            item.style.display = "none";
        }
    });

    if (found === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
});
// End Untuk Fitur Pencarian Konten



// Untuk Menampilkan Notifikasi 01 Lengkap
document.getElementById("buka-notifikasi-01").addEventListener("click", function() {
    let listNotifikasi01 = document.querySelector(".list-notifikasi-01");
    listNotifikasi01.classList.add("active-list-notifikasi");
    let bukaNotifikasi01 = document.querySelector(".buka-notifikasi-01");
    bukaNotifikasi01.classList.add("hidden-button-aksi-notifikasi");
    let tutupNotifikasi01 = document.querySelector(".tutup-notifikasi-01");
    tutupNotifikasi01.classList.add("active-button-aksi-notifikasi");
});
// End Untuk Menampilkan Notifikasi 01 Lengkap

// Untuk Menyembunyikan Notifikasi 01 Lengkap
document.getElementById("tutup-notifikasi-01").addEventListener("click", function() {
    let listNotifikasi01 = document.querySelector(".list-notifikasi-01");
    listNotifikasi01.classList.remove("active-list-notifikasi");
    let bukaNotifikasi01 = document.querySelector(".buka-notifikasi-01");
    bukaNotifikasi01.classList.remove("hidden-button-aksi-notifikasi");
    let tutupNotifikasi01 = document.querySelector(".tutup-notifikasi-01");
    tutupNotifikasi01.classList.remove("active-button-aksi-notifikasi");
});
// End Untuk Menyembunyikan Notifikasi 01 Lengkap



// Untuk Menampilkan Notifikasi 02 Lengkap
document.getElementById("buka-notifikasi-02").addEventListener("click", function() {
    let listNotifikasi01 = document.querySelector(".list-notifikasi-02");
    listNotifikasi01.classList.add("active-list-notifikasi");
    let bukaNotifikasi01 = document.querySelector(".buka-notifikasi-02");
    bukaNotifikasi01.classList.add("hidden-button-aksi-notifikasi");
    let tutupNotifikasi01 = document.querySelector(".tutup-notifikasi-02");
    tutupNotifikasi01.classList.add("active-button-aksi-notifikasi");
});
// End Untuk Menampilkan Notifikasi 02 Lengkap

// Untuk Menyembunyikan Notifikasi 02 Lengkap
document.getElementById("tutup-notifikasi-02").addEventListener("click", function() {
    let listNotifikasi01 = document.querySelector(".list-notifikasi-02");
    listNotifikasi01.classList.remove("active-list-notifikasi");
    let bukaNotifikasi01 = document.querySelector(".buka-notifikasi-02");
    bukaNotifikasi01.classList.remove("hidden-button-aksi-notifikasi");
    let tutupNotifikasi01 = document.querySelector(".tutup-notifikasi-02");
    tutupNotifikasi01.classList.remove("active-button-aksi-notifikasi");
});
// End Untuk Menyembunyikan Notifikasi 02 Lengkap



// Untuk Menampilkan Notifikasi 03 Lengkap
document.getElementById("buka-notifikasi-03").addEventListener("click", function() {
    let listNotifikasi01 = document.querySelector(".list-notifikasi-03");
    listNotifikasi01.classList.add("active-list-notifikasi");
    let bukaNotifikasi01 = document.querySelector(".buka-notifikasi-03");
    bukaNotifikasi01.classList.add("hidden-button-aksi-notifikasi");
    let tutupNotifikasi01 = document.querySelector(".tutup-notifikasi-03");
    tutupNotifikasi01.classList.add("active-button-aksi-notifikasi");
});
// End Untuk Menampilkan Notifikasi 03 Lengkap

// Untuk Menyembunyikan Notifikasi 03 Lengkap
document.getElementById("tutup-notifikasi-03").addEventListener("click", function() {
    let listNotifikasi01 = document.querySelector(".list-notifikasi-03");
    listNotifikasi01.classList.remove("active-list-notifikasi");
    let bukaNotifikasi01 = document.querySelector(".buka-notifikasi-03");
    bukaNotifikasi01.classList.remove("hidden-button-aksi-notifikasi");
    let tutupNotifikasi01 = document.querySelector(".tutup-notifikasi-03");
    tutupNotifikasi01.classList.remove("active-button-aksi-notifikasi");
});
// End Untuk Menyembunyikan Notifikasi 03 Lengkap



// Untuk Menampilkan Notifikasi 04 Lengkap
document.getElementById("buka-notifikasi-04").addEventListener("click", function() {
    let listNotifikasi01 = document.querySelector(".list-notifikasi-04");
    listNotifikasi01.classList.add("active-list-notifikasi");
    let bukaNotifikasi01 = document.querySelector(".buka-notifikasi-04");
    bukaNotifikasi01.classList.add("hidden-button-aksi-notifikasi");
    let tutupNotifikasi01 = document.querySelector(".tutup-notifikasi-04");
    tutupNotifikasi01.classList.add("active-button-aksi-notifikasi");
});
// End Untuk Menampilkan Notifikasi 04 Lengkap

// Untuk Menyembunyikan Notifikasi 04 Lengkap
document.getElementById("tutup-notifikasi-04").addEventListener("click", function() {
    let listNotifikasi01 = document.querySelector(".list-notifikasi-04");
    listNotifikasi01.classList.remove("active-list-notifikasi");
    let bukaNotifikasi01 = document.querySelector(".buka-notifikasi-04");
    bukaNotifikasi01.classList.remove("hidden-button-aksi-notifikasi");
    let tutupNotifikasi01 = document.querySelector(".tutup-notifikasi-04");
    tutupNotifikasi01.classList.remove("active-button-aksi-notifikasi");
});
// End Untuk Menyembunyikan Notifikasi 04 Lengkap