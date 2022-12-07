import Popup from "./components/popup.js";

let isPopupOpened = false;

const component = document.getElementsByClassName("component")[0];

const togglePopupButton = document.getElementById("toggle");

togglePopupButton.addEventListener("click", () => {
  if (!isPopupOpened) {
    component.appendChild(Popup());
  } else {
    component.lastChild.remove();
  }
  isPopupOpened = !isPopupOpened;
});
