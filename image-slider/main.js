// selecting all necessary dom elements
const slideContainer = document.querySelector(".slide-container");
const arrows = slideContainer.querySelectorAll(".arrow");

// lets create an array of image sources
const images = [
  "fuji",
  "desert",
  "lake",
  "redhill",
  "alps",
  "tree",
  "flower",
  "skyland",
];

// some necessary variable
const imagesLength = images.length;
let init = 0;

// initialSetup function here
const initialSetup = () => {
  // check local storage for get index
  let value = localStorage.getItem("imageIndex");
  // default index set 0 when storage have no value
  value ? setImage(value) : setImage(0);
};

// setImage function
const setImage = (init) => {
  // style for background of the element slide-container
  const style = {
    background: `url(./image/${images[init]}.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  // adding style and image with slide-container
  Object.assign(slideContainer.style, style);
  // put current image index value in localStorage
  localStorage.setItem("imageIndex", init);
};

// slidingImage function
const slidingImage = (event) => {
  // finding which arrow user clicked
  const directionId = event.target.id;

  //checking and set image with user direction
  if (directionId === "left") {
    init--;
    if (init < 0) {
      init = imagesLength - 1;
    }
  } else {
    init++;
    if (init >= imagesLength) {
      init = 0;
    }
  }
  setImage(init);
};

// event listener here
arrows.forEach((arrow) => {
  arrow.addEventListener("click", slidingImage);
});

document.addEventListener("DOMContentLoaded", initialSetup);

// happy coding !
