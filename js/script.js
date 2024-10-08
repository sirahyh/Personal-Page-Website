function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
$(function() {
    $('#menu > ul').dropotron({
        mode: 'fade',
        globalOffsetY: 11,
        offsetY: -15
    });
    $('#slider').slidertron({
        viewerSelector: '.viewer',
        indicatorSelector: '.indicator span',
        reelSelector: '.reel',
        slidesSelector: '.slide',
        speed: 'slow',
        advanceDelay: 4000
    });
});

// AJAX Implementation
// document.getElementById("ajaxButton").addEventListener("click", function() {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 var response = JSON.parse(xhr.responseText);
//                 // Tampilkan respons JSON di bawah tombol
//                 document.getElementById("resultText").innerText = JSON.stringify(response, null, 2);
//             } else {
//                 document.getElementById("resultText").innerText = "Gagal mengambil data dari API Reddit.";
//             }
//         }
//     };
//     xhr.open("GET", "https://www.gov.uk/bank-holidays.json", true);
//     xhr.send();
// });

// Education Slider
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    const slideWidth = slides[0].clientWidth;
    let currentSlide = 0;

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentSlide);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => goToSlide(index));
    });
});


// Btn BackToTop
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Tampilkan Back to Top button ketika pengguna menggulir halaman ke bawah
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}