const sildeshowElements = document.querySelectorAll(".slideshow-element");

// console.log(sildeshowElements.length);

let countElements = 1;
const len = sildeshowElements.length;

setInterval(() => {
  countElements++;
  const currentElement = document.querySelector(".current");

  currentElement.classList.remove("current");

  if (countElements > len) {
    sildeshowElements[0].classList.add("current");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 3000);
