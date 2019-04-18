var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
console.log("test");
navToggle.addEventListener('click', function() {
  var button  = this;
  if (button.classList.contains('main-nav--opened')) {
    button.classList.remove('main-nav--opened');
    button.classList.add('main-nav--closed');
  }else {
    button.classList.add('main-nav--opened');
    button.classList.remove('main-nav--closed');
  }

  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }else {
    navMain.classList.add('main-nav--opened');
    navMain.classList.remove('main-nav--closed');
  }
});
