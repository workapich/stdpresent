const repeat = false;
const noArrows = false;
const noBullets = false;

const container = document.querySelector(".slider-container");
var slide = document.querySelectorAll(".slider-single");
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initArrows() {
  if (noArrows) {
    return;
  }
  const leftArrow = document.createElement("a");
  const iLeft = document.createElement("i");
  iLeft.classList.add("fa-solid");
  iLeft.classList.add("fa-circle-chevron-left");
  iLeft.classList.add("fa-2xl");
  leftArrow.classList.add("slider-left");
  leftArrow.appendChild(iLeft);
  leftArrow.addEventListener("click", () => {
    slideLeft();
  });
  const rightArrow = document.createElement("a");
  const iRight = document.createElement("i");
  iRight.classList.add("fa");
  iRight.classList.add("fa-circle-chevron-right");
  iRight.classList.add("fa-2xl");

  rightArrow.classList.add("slider-right");
  rightArrow.appendChild(iRight);
  rightArrow.addEventListener("click", () => {
    slideRight();
  });
  container.appendChild(leftArrow);
  container.appendChild(rightArrow);
}

function slideInitial() {
  initArrows();
  setTimeout(function () {
    slideRight();
  }, 500);
}

function slideRight() {
  if (slideCurrent < slideTotal) {
    slideCurrent++;
  } else {
    slideCurrent = 0;
  }

  if (slideCurrent > 0) {
    var preactiveSlide = slide[slideCurrent - 1];
  } else {
    var preactiveSlide = slide[slideTotal];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent < slideTotal) {
    var proactiveSlide = slide[slideCurrent + 1];
  } else {
    var proactiveSlide = slide[0];
  }

  slide.forEach((elem) => {
    var thisSlide = elem;
    if (thisSlide.classList.contains("preactivede")) {
      thisSlide.classList.remove("preactivede");
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.add("proactivede");
    }
    if (thisSlide.classList.contains("preactive")) {
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.remove("proactivede");
      thisSlide.classList.add("preactivede");
    }
  });
  preactiveSlide.classList.remove("preactivede");
  preactiveSlide.classList.remove("active");
  preactiveSlide.classList.remove("proactive");
  preactiveSlide.classList.remove("proactivede");
  preactiveSlide.classList.add("preactive");

  activeSlide.classList.remove("preactivede");
  activeSlide.classList.remove("preactive");
  activeSlide.classList.remove("proactive");
  activeSlide.classList.remove("proactivede");
  activeSlide.classList.add("active");

  proactiveSlide.classList.remove("preactivede");
  proactiveSlide.classList.remove("preactive");
  proactiveSlide.classList.remove("active");
  proactiveSlide.classList.remove("proactivede");
  proactiveSlide.classList.add("proactive");

  updateBullet();
}

function slideLeft() {
  if (slideCurrent > 0) {
    slideCurrent--;
  } else {
    slideCurrent = slideTotal;
  }

  if (slideCurrent < slideTotal) {
    var proactiveSlide = slide[slideCurrent + 1];
  } else {
    var proactiveSlide = slide[0];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent > 0) {
    var preactiveSlide = slide[slideCurrent - 1];
  } else {
    var preactiveSlide = slide[slideTotal];
  }
  slide.forEach((elem) => {
    var thisSlide = elem;
    if (thisSlide.classList.contains("proactive")) {
      thisSlide.classList.remove("preactivede");
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.add("proactivede");
    }
    if (thisSlide.classList.contains("proactivede")) {
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.remove("proactivede");
      thisSlide.classList.add("preactivede");
    }
  });

  preactiveSlide.classList.remove("preactivede");
  preactiveSlide.classList.remove("active");
  preactiveSlide.classList.remove("proactive");
  preactiveSlide.classList.remove("proactivede");
  preactiveSlide.classList.add("preactive");

  activeSlide.classList.remove("preactivede");
  activeSlide.classList.remove("preactive");
  activeSlide.classList.remove("proactive");
  activeSlide.classList.remove("proactivede");
  activeSlide.classList.add("active");

  proactiveSlide.classList.remove("preactivede");
  proactiveSlide.classList.remove("preactive");
  proactiveSlide.classList.remove("active");
  proactiveSlide.classList.remove("proactivede");
  proactiveSlide.classList.add("proactive");
}

function goToIndexSlide(index) {
  const sliding = slideCurrent > index ? () => slideRight() : () => slideLeft();
  while (slideCurrent !== index) {
    sliding();
  }
}

slideInitial();

function downloadPDF() {
  const { jsPDF } = window.jspdf;

  html2canvas(document.body).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    doc.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    doc.save("page.pdf");
  });
}

function myFunction() {
  let checkbox = document.getElementById("toggleSwitch");
  let element = document.body;

  if (checkbox.checked) {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
}
const images = document.querySelectorAll(".dynamic-image");

// Function to toggle images based on dark mode
function toggleImagesBasedOnMode() {
  const isDarkMode = document.body.classList.contains("dark");

  images.forEach((image) => {
    const src = image.src;

    const newSrc = !isDarkMode
      ? src.replace("-dark.png", ".png")
      : src.replace(".png", "-dark.png");

    image.src = newSrc;
  });
}

toggleImagesBasedOnMode();

const observer = new MutationObserver(() => {
  toggleImagesBasedOnMode();
});

observer.observe(document.body, {
  attributes: true,
  attributeFilter: ["class"],
});

document.addEventListener("DOMContentLoaded", (event) => {
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
  });
});

function loadPreference() {
  let mode = localStorage.getItem("mode");
  let checkbox = document.getElementById("toggleSwitch");
  let element = document.body;

  if (mode === "dark") {
    element.classList.add("dark");
    checkbox.checked = true;
  } else {
    element.classList.remove("dark");
    checkbox.checked = false;
  }
}
