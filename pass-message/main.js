// selecting all necessary dom element

const textMessage = document.querySelector("#message");
const form = textMessage.parentElement;
const submitButton = textMessage.nextElementSibling;
const result = document.querySelector(".show-message");
const validityMessage = result.querySelector("h2");
const showMessage = result.querySelector("h4");

// passMessage function

const passMessage = () => {
  let textMessageValue = textMessage.value;

  if (textMessageValue !== "") {
    validMessage(textMessageValue);
  } else {
    timeOut();
  }
};

// valid message only pass function

const validMessage = (textMessageValue) => {
  showMessage.innerHTML = textMessageValue;
  textMessage.value = "";
};

// validityMessage timeout function

const timeOut = () => {
  let txt = "Please Enter A Value To Pass ";
  validityMessage.innerHTML = txt;
  validityMessage.classList.add("bg-color");
  setTimeout(() => {
    validityMessage.innerHTML = "";
    validityMessage.classList.remove("bg-color");
  }, 3000);
};

// from handeler

form.addEventListener("submit", (eve) => {
  eve.preventDefault();
  passMessage();
});

// submit button scaling and styling when clicked

submitButton.addEventListener("mousedown", () => {
  submitButton.classList.add("button");
});

submitButton.addEventListener("mouseup", () => {
  submitButton.classList.remove("button");
});
