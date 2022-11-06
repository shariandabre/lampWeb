const myNav = document.getElementById('header')
window.onscroll = function() {
    if(window.scrollY > window.innerHeight){
    //   myNav.classList.add('scrolled')
    console.log("scrolled")
    }else{
    //   myNav.classList.remove('scrolled')
    console.log("notscrolled")
    }
  }