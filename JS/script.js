let mobileMenu = document.querySelector(".mobileMenu")
let nav__menu = document.querySelector(".nav__menu")
let MobileMenuClose = document.querySelector(".MobileMenuClose")

function OpenMobileMenu(){
    nav__menu.style.display = 'block'
    nav__menu.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}

function CloseMobileMenu(){
    nav__menu.style.display = 'none'
    document.body.style.overflow = 'auto'
}