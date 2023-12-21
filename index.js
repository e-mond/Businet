document.addEventListener("DOMContentLoaded", function () {
    var toTopBtn = document.getElementById("toTop");
  
    window.onscroll = function () {
      toTopBtn.style.display = window.scrollY > 20 ? "block" : "none";
    };
  
    toTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  