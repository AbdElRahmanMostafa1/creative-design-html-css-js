/* About btn made to appear about me in Team Cards */
  const aboutBtn = document.querySelectorAll(".about-btn");
  
  aboutBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
      btn.classList.toggle("appear");
      btn.nextElementSibling.classList.toggle("appear");
    })
  })
/* About btn made to appear about me in Team Cards */

/* Scroll Up */
  const up = document.querySelector(".up-btn")
  window.onscroll = function() {
    scrollY >= 600 ? up.classList.add("to-top") : up.classList.remove("to-top")
  }
  up.onclick = function() {
    window.scrollTo({
      top: 0
    })
  }
/* End of Scroll Up */

const burger = document.querySelector(".burger-icon-mobile");
const xSign = document.querySelector(".x-sign");
const menu = document.querySelector(".mob-navbar");

burger.addEventListener("click", ()=>{
  menu.classList.add("appear");
});
xSign.addEventListener("click", ()=> {
  menu.classList.remove("appear");
})