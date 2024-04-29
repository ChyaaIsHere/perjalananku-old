// tombol dark mode (toggle)
var isInitialImage = true;

function Darkmode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    gambar.style.fill = "#ffffff";
  } else {
    gambar.style.fill = "#333333";
  }
}

// javasc scrollnavbar
let lastKnownScrollPosition = 150;
let ticking = false;
document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const elements = document.querySelectorAll("#navLink");
      if (lastKnownScrollPosition > 20) {
        // kita buat navbar jadi gelap

        document.getElementById("myNav").classList.remove("navbar-dark");
        document.getElementById("brand").classList.remove("text-white");
        document.getElementById("brand").classList.add("text-black");
        elements.forEach(function (el, index) {
          el.classList.remove("text-white");
          el.classList.add("text-black");
        });

        document.getElementById("myNav").classList.add("bg-body-secondary");
      } else {
        document.getElementById("myNav").classList.remove("bg-body-secondary");
        document.getElementById("brand").classList.add("text-white");
        document.getElementById("brand").classList.remove("text-black");

        elements.forEach(function (el, index) {
          el.classList.add("text-black");
          el.classList.remove("text-black");
        });

        document.getElementById("myNav").classList.add("navbar-dark");
      }

      ticking = false;
    });

    ticking = true;
  }
});

// slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slides");
  let progressBar = document.querySelector(".progress-bar");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");

  // Update progress bar
  let progressWidth = (slideIndex / slides.length) * 100 + "%";
  progressBar.style.width = progressWidth;

  setTimeout(showSlides, 4000); // Ubah angka 6000 menjadi interval waktu yang diinginkan (dalam milidetik)
}

// about me
function scrollToAbout() {
  event.preventDefault(); // Mencegah default link behavior

  // Ambil posisi (offset) vertikal dari elemen dengan ID "about"
  var aboutSection = document.getElementById("about");
  var aboutSectionOffset = aboutSection.offsetTop;

  // Geser halaman ke bawah hingga bagian "About" terlihat
  window.scrollTo({
    top: aboutSectionOffset,
    behavior: "smooth", // Efek animasi scroll
  });
}

AOS.init({
  easing: "ease-in-out",
  once: true,
});
