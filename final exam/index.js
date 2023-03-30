let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

//swiper function
var swiper = new Swiper(".home-slider", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:1000,   //เวลาในการเลื่อนสไลด์
        disableOnInteraction:false,
    },
    pagination :{
        el:".swiper-pagination",
        cilckable:true,
    },
    loop:true

});

var swiper = new Swiper(".review-slider", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:1000,   //เวลาในการเลื่อนสไลด์
        disableOnInteraction:false,
    },
    pagination :{
        el:".swiper-pagination",
        cilckable:true,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
    }
});

// Loader section
function loader(){
    document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(){
    setInterval(loader, 3000)
}
window.onload = fadeOut;