const themeButton=document.getElementById("theme-button"),darkTheme="dark-theme",iconTheme="uil-sun",selectedTheme=localStorage.getItem("selected-theme"),selectedIcon=localStorage.getItem("selected-icon"),getCurrentTheme=()=>document.body.classList.contains(darkTheme)?"dark":"light",getCurrentIcon=()=>document.body.classList.contains(iconTheme)?"uil-moon":"uil-sun";selectedTheme&&(document.body.classList["dark"===selectedTheme?"add":"remove"](darkTheme),themeButton.classList["uil-moon"===selectedIcon?"add":"remove"](iconTheme)),themeButton.addEventListener("click",()=>{document.body.classList.toggle(darkTheme),themeButton.classList.toggle(iconTheme),localStorage.setItem("selected-theme",getCurrentTheme()),localStorage.setItem("selected-icon",getCurrentIcon())}),console.log("THEME SETTING WORKING");const navMenu=document.getElementById("nav-menu"),navToggle=document.getElementById("nav-toggle"),navClose=document.getElementById("nav-close");navToggle&&navToggle.addEventListener("click",()=>{navMenu.classList.add("show-menu")}),navClose&&navClose.addEventListener("click",()=>{navMenu.classList.remove("show-menu")}),console.log("MENU & SETTING WORKING");const navLink=document.querySelectorAll(".nav__link");function linkAction(){const e=document.getElementById("nav-menu");e.classList.remove("show-menu")}navLink.forEach(e=>e.addEventListener("click",linkAction)),console.log("Remove menu profile is working"),new Typewriter("#typewriter",{strings:["Jonathan Meza","Software Developer","Full-Stack"],autoStart:!0,loop:!0,cursor:"|"}),console.log("Typewriter effect is working");var swiper=new Swiper(".blog-slider",{spaceBetween:30,effect:"fade",loop:!0,mousewheel:{invert:!1},pagination:{el:".blog-slider__pagination",clickable:!0},keyboard:!0});function scrollUp(){const e=document.getElementById("scroll-up");560<=this.scrollY?e.classList.add("show-scroll"):e.classList.remove("show-scroll"),console.log("Scroll up being called and working")}console.log("Portfolio Swiper is working"),window.addEventListener("scroll",scrollUp);const sections=document.querySelectorAll("section[id]");function scrollActive(){var n=window.pageYOffset;sections.forEach(e=>{var t=e.offsetHeight,o=e.offsetTop-50,e=e.getAttribute("id");o<n&&n<=o+t?document.querySelector(".nav__menu a[href*="+e+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+e+"]").classList.remove("active-link")}),console.log("Section highlight working")}window.addEventListener("scroll",scrollActive);