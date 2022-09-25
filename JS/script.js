AOS.init();

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

/*--/ Star Counter /--*/
$('.counter').counterUp({
    delay: 5,
    time: 9000
});