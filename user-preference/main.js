// selecting necessary dom element
const selectFontSize = document.querySelector("#font-size");
const selectBgColor = document.querySelector("#bgColor");
const resetButton = document.querySelector(".reset");
const mainElement = document.querySelector(".change");

// initialSetup function
const initialSetup = () => {
  let selectedFontSize = localStorage.getItem("fontSize");
  let selectedBgColor = localStorage.getItem("bgColor");

  if (selectedFontSize && selectedBgColor) {
    setValues(selectedFontSize, selectedBgColor);
  } else if (selectedFontSize && !selectedBgColor) {
    setValues(selectedFontSize, "aqua");
  } else if (!selectedFontSize && selectedBgColor) {
    setValues("16px", selectedBgColor);
  } else {
    setValues("16px", "aqua");
  }
};

// setValues function here
const setValues = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;
  mainElement.style.fontSize = fontSize;
  mainElement.style.backgroundColor = bgColor;
};

// changeFontSize function
const changeFontSize = (event) => {
  let selectedFontSize = event.target.value;
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};

// changeBgColor function
const changeBgColor = (event) => {
  let selectedBgColor = event.target.value;
  mainElement.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};

// clearLocalStorage function
const clearLocalStorage = () => {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
  setValues("16px", "aqua");
};

// event listener
document.addEventListener("DOMContentLoaded", initialSetup);
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

// happy coding !!!!
