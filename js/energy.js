var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    990: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiper8", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

let navBtn = document.getElementById('open-nav');
let navBar = document.querySelector('.fa-bars');
let mblNav = document.querySelector('.menu-list');

navBtn.onclick = () => {
  mblNav.classList.toggle('active-nav')
  navBar.classList.toggle('active-bar')
}

let bestBtn = document.getElementById('best-btn');
let newBtn = document.getElementById('new-btn');
let bundleBtn = document.getElementById('bundle-btn');

let bestSeller = document.getElementById('best-seller');
let newIn = document.getElementById('new-in');
let bundles = document.getElementById('bundles');


bestBtn.onclick = () => {
  bestSeller.style.display = "block"
  newIn.style.display = "none";
  bundles.style.display = "none";
  bestBtn.classList.add('active-btn')
  newBtn.classList.remove('active-btn')
  bundleBtn.classList.remove('active-btn')
}

newBtn.onclick = () => {
  bestSeller.style.display = "none"
  newIn.style.display = "block";
  bundles.style.display = "none";
  newBtn.classList.add('active-btn')
  bestBtn.classList.remove('active-btn')
  bundleBtn.classList.remove('active-btn')
}

bundleBtn.onclick = () => {
  bestSeller.style.display = "none"
  newIn.style.display = "none";
  bundles.style.display = "block";
  bundleBtn.classList.add('active-btn')
  newBtn.classList.remove('active-btn')
  bestBtn.classList.remove('active-btn')
}


