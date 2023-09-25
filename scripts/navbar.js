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



