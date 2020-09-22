window.addEventListener("scroll", event => {
  let navbar = document.getElementById("navbar");
  let navTop = navbar.offsetTop; 

  if (window.scrollY >= navTop) {
      document.body.style.paddingTop = navbar.offsetHeight + 'px';
      navbar.classList.add("sticky");
  } else {
      document.body.style.paddingTop = 0;
      navbar.classList.remove("sticky");
    }

});