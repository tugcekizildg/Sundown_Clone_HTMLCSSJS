const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elemContainer = document.querySelector("#elem-container");

elemContainer.addEventListener("mouseenter", function () {
  document.querySelector("#fixed-image").style.display = "block";
});

elemContainer.addEventListener("mouseleave", function () {
  document.querySelector("#fixed-image").style.display = "none";
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    document.querySelector(
      "#fixed-image"
    ).style.backgroundImage = `url(${image})`;
  });
});

//Black Box Section
const desc = document.querySelector("#desc");
const image = document.querySelector("#page4-img");

// Select all <a> elements inside <h2>
const buttons = document.querySelectorAll("#tabs a");

// Descriptions mapped to corresponding buttons
const descriptions = {
  Design:
    "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
  Project:
    "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
  Execution:
    "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
};

// Click event handler
function updateContent(event) {
  event.preventDefault();

  const target = event.currentTarget;
  const text = descriptions[target.id];

  if (text) {
    desc.textContent = text;
  } else {
    desc.textContent = "Description not found.";
  }

  image.setAttribute("src", target.getAttribute("data-img"));

  // Reset styles for all buttons
  buttons.forEach((btn) => {
    btn.style.color = "#504A45";
    btn.style.right = "0vw";
  });

  // Apply styles to the clicked button
  target.style.color = "#EFEAE3";
  target.style.right = "2vw";
}

buttons.forEach((btn) => btn.addEventListener("click", updateContent));

// Swiper JS

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
});

//Loader Animation

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

loaderAnimation();
