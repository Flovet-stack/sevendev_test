var curent = 0;
function getFigures() {
  return document.getElementById("carousel").getElementsByTagName("figure");
}
function moveForward() {
  var pointer = 0;
  var figures = getFigures();
  for (var i = 0; i < figures.length; i++) {
    if (figures[i].className == "visible") {
      figures[i].className = "hidden";
      pointer = i;
      curent = pointer + 1;
    }
  }
  if (++pointer == figures.length) {
    pointer = 0;
  }
  figures[pointer].className = "visible";
}

function movePrev() {
  var figures = getFigures();
  for (var i = 0; i < figures.length; i++) {
    if (figures[i].className == "visible") {
      figures[i].className = "hidden";
    }
  }
  if (curent === 0) {
    curent = figures.length - 1;
    figures[curent].className = "visible";
  } else {
    curent = curent - 1;
    figures[curent].className = "visible";
  }
}

//faqs js function
const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

//Javascript to toggle the menu
document.getElementById("nav-toggle").onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
};
// ===== Scroll to Top ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500
  );
});
