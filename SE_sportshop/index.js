let menu =document.querySelector("#menu-bars");
console.log(menu)
let navbar =document.querySelector("header .flex .navbar");

menu.onclick = () => {
    console.log("click")
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}
let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle("active");
}

let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.remove("active");
}
// // menu
// let menu = document.querySelector("#menu-bars");
// search.onclick = () =>{
//     let menu_form = document.querySelector("#menu-form");
//     menu_form.classList.toggle("active");
// }

// let close_icon = document.querySelector("#close");
// close_icon.onclick = () =>{
//     let menu_form = document.querySelector("#menu-form");
//     menu_form.classList.remove("active");
// }

var swiper = new Swiper(".home-slider", {
    spaceBetween:30,
    centerSlides:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,

    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:30,
    centerSlides:true,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,

    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
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
        },
    }
});

/*Loader Section*/
function loader(){
    document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(){
    setInterval(loader, 3000)
}
window.onload = fadeOut;