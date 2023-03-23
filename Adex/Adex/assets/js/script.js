const addEventOnElements = (elements,evenType,callback)=>{
    for (let i = 0, len = elements.length; i<len; i++) {
        elements[i].addEventListener(evenType, callback);
    }
}





/**
 * NavBar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar =()=>{

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers,"click",toggleNavbar);

/**
 * Slider
 */
const sliders = document.querySelectorAll("[data-slider]");

const initSlider = (currentSlider) =>{
    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");
    let currentSliderPo = 0;

    const moveSliderItem =()=>{
        slider
    }
}

//Accordian

const accordians = document.querySelectorAll("[data-accordian]");
let lastActiveAccordian = accordians[0];
const initAccordian = (currentAccordian) => {
  const accordianBtn = currentAccordian.querySelector("[data-accordian-btn]");
  const expandAccordian = () => {
    if (lastActiveAccordian && lastActiveAccordian != currentAccordian) {
      lastActiveAccordian.classList.remove("expanded");
    }
    currentAccordian.classList.toggle("expanded");
    lastActiveAccordian = currentAccordian;
  };
  accordianBtn.addEventListener("click", expandAccordian);
};
for (let i = 0, len = accordians.length; i < len; i++) {
  initAccordian(accordians[i]);
}