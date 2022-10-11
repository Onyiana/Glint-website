AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


/*--/ Star Counter /--*/
$('.counter').counterUp({
    delay: 5,
    time: 9000
});

var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
         type: 'bullets',
      clickable:'true'
    },
  });

const menuOpen = document.querySelector(".ri-menu-add-line")
const menuClose = document.querySelector(".ri-close-circle-fill")
const navMenu = document.querySelector(".navlinks")

menuOpen.addEventListener("click", function(){
    navMenu.style.right = '0px'
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
    // navBar.style.right = "0px"
})

menuClose.addEventListener("click", function(){
    navMenu.style.right = "-300px"
    menuOpen.style.display = 'block'
    menuClose.style.display = 'none'
})

const navLists = document.querySelectorAll('li')
navLists.forEach((element) => {
    element.addEventListener('click', function(){
        navMenu.style.right = '-300px'
        menuClose.style.display = 'none'
        menuOpen.style.display = 'block'
    })
})


//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
