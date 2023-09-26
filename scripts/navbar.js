let collapsibleButton;
let collapsibleContent;
document.addEventListener('DOMContentLoaded', function(){
  collapsibleButton = document.querySelector('.menu-button-js');
  collapsibleContent = document.querySelector('.collapsible-content-js');

  collapsibleButton.addEventListener('click', function(){
    collapsibleContent.classList.toggle('active');
    collapsibleButton.classList.add('active');
  })
})

document.addEventListener('click', function(event){
  if (event.target === collapsibleButton && collapsibleContent.style.display === "none") {
    collapsibleContent.style.display = "flex";
  } else if (event.target != collapsibleButton && event.target.parentNode != collapsibleButton) {
    collapsibleContent.classList.remove('active');
    collapsibleButton.classList.remove('active');
  }
})

document.addEventListener("DOMContentLoaded", function(){
  const spanElement = document.querySelector(".logo-js");

  spanElement.addEventListener("click", function(){
      const aboutSection = document.querySelector(".welcome-js");
      aboutSection.scrollIntoView({behavior: "smooth"});
  })
})

document.addEventListener("DOMContentLoaded", function(){
  const spanElement = document.querySelectorAll(".home-js");

spanElement.forEach(function(spanElement){
  spanElement.addEventListener('click', function(){
      const homeSection = document.querySelector(".welcome-js");
  homeSection.scrollIntoView({behavior: "smooth"});
  })  
})
})

document.addEventListener("DOMContentLoaded", function(){
  const spanElement = document.querySelectorAll(".about-js");

  spanElement.forEach(function(spanElement){
      spanElement.addEventListener('click', function(){
          const aboutSection = document.querySelector(".about-section-js");
      aboutSection.scrollIntoView({behavior: "smooth"});
      })  
  })
})

document.addEventListener("DOMContentLoaded", function(){
  const spanElement = document.querySelectorAll(".menu-js");

spanElement.forEach(function(spanElement){
  spanElement.addEventListener('click', function(){
      const menuSection = document.querySelector(".menu-section-js");
  menuSection.scrollIntoView({behavior: "smooth"});
  })  
})
})

document.addEventListener("DOMContentLoaded", function(){
  const spanElement = document.querySelectorAll(".contact-js");

spanElement.forEach(function(spanElement){
  spanElement.addEventListener('click', function(){
      const instagramSection = document.querySelector(".instagram-js");
  instagramSection.scrollIntoView({behavior: "smooth"});
  })  
})
})

document.addEventListener("DOMContentLoaded", function(){
  const spanElement = document.querySelectorAll(".make-reservation-js");

spanElement.forEach(function(spanElement){
  spanElement.addEventListener('click', function(){
      const reservationSection = document.querySelector(".reservation-js");
  reservationSection.scrollIntoView({behavior: "smooth"});
  })  
})
})



