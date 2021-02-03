// navigation menu 
(() => {
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  closeNavBtn = navMenu.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", closeNavMenu);

  function showNavMenu() {
    navMenu.classList.add("open");
  }
  function closeNavMenu() {
    navMenu.classList.remove("open");
    fadeOutEffect();
  }
  function fadeOutEffect() {
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() => {
      document.querySelector(".fade-out-effect").classList.remove("active");
    }, 300);
  }

  // attach and event handler to document 
  document.addEventListener("click", (event) => {
    
    if(event.target.classList.contains("link-item")) {
      //make sure event.target.hash has a value before overriding default behavior
      if(event.target.hash !== '') {
        //prevent default anchor click behavior
        event.preventDefault();
        const hash = event.target.hash;
        // deactivate existing active section 
        document.querySelector(".section.active").classList.add("hide");
        document.querySelector(".section.active").classList.remove("active");
        //activate new section
        document.querySelector(hash).classList.add("active");
        document.querySelector(hash).classList.remove("hide");
        //deactivate existing navigaton menu link
        navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
        navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
        //if clicked link is contained within the navigation menu
        if(navMenu.classList.contains("open")) {
          //activate new navigation menu link item
          event.target.classList.add("active", "inner-shadow");
          event.target.classList.remove("outer-shadow", "hover-in-shadow");
          //hide nav menu
          closeNavMenu();
        }
        else {
          let navItems = navMenu.querySelectorAll(".link-item");
          navItems.forEach((item) => {
            if(hash == item.hash) {
              //activate the navigation menu link item
              item.classList.add("active", "inner-shadow");
              item.classList.remove("outer-shadow", "hover-in-shadow");
            }
          })
          fadeOutEffect();
        }
        //add hash (#) to url
        window.location.hash = hash;
      }
    }
  })
})();

// about section tabs 
(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-item") &&
          !event.target.classList.contains("active")) {
              const target = event.target.getAttribute("data-target");

            //   deactive existing active tab element 
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new tab item 
            event.target.classList.add("active", "outer-shadow");
            // deactivate existing active tab content 
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new tab content 
            aboutSection.querySelector(target).classList.add("active");
          }
    })
})();

//hide all sections except active
(() => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if(!section.classList.contains("active")) {
      section.classList.add("hide");
    }
  })
})();

//preloader turn off
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 600)
})