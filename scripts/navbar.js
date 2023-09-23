document.addEventListener('DOMContentLoaded', function(){
  const collapsibleButton = document.querySelector('.menu-button-js');
  const collapsibleContent = document.querySelector('.collapsible-content-js');

  collapsibleButton.addEventListener('click', function(){
    collapsibleContent.classList.toggle('active');
    collapsibleButton.classList.toggle('active');
    
  })
})
