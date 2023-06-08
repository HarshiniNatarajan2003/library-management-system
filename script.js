const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
    
const wrapper = document.querySelector(".wrapper"),
carousel = document.querySelector(".carousel"),
images = document.querySelectorAll("img"),
buttons = document.querySelectorAll(".button");

let imageIndex = 1,
intervalId;


const autoSlide = () => {
intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
autoSlide();

const slideImage = () => {
imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};


const updateClick = (e) => {
clearInterval(intervalId);
imageIndex += e.target.id === "next" ? 1 : -1;
slideImage(imageIndex);
autoSlide();
};

buttons.forEach((button) => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);