const hamb = document.querySelector(".burg");
hamb.addEventListener("click", toggle);

const hamb2 = document.querySelector(".header-nav-list2");
hamb2.addEventListener("click", toggle);

function toggle(e) {
    hamb.classList.toggle("open");
    hamb2.classList.toggle("open");
  }
