const Popup = () => {
  const popup = document.createElement("div");
  popup.className = "popup";

  const ul = document.createElement("ul");

  const buttons = document.createElement("div");
  buttons.className = "buttons";

  const buttonPlus = document.createElement("button");
  buttonPlus.innerText = "+";

  const buttonMinus = document.createElement("button");
  buttonMinus.innerText = "-";

  buttons.appendChild(buttonMinus);
  buttons.appendChild(buttonPlus);

  const counter = document.createElement("b");
  counter.innerHTML = 0;

  const liAdults = document.createElement("li");
  liAdults.className = "adults";
  const spanAdults = document.createElement("span");
  spanAdults.innerText = "adults";

  const liChildren = document.createElement("li");
  liChildren.className = "children";
  const spanChildren = document.createElement("span");
  spanChildren.innerText = "children";

  const liRooms = document.createElement("li");
  liRooms.className = "rooms";
  const spanRooms = document.createElement("span");
  spanRooms.innerText = "rooms";

  liAdults.appendChild(counter.cloneNode(true));
  liAdults.appendChild(spanAdults);
  liAdults.appendChild(buttons.cloneNode(true));

  const plusMinusAdults = liAdults
    .getElementsByClassName("buttons")[0]
    .querySelectorAll("button");

  plusMinusAdults[0].addEventListener("click", () => {
    if (liAdults.querySelector("b").innerHTML > 0)
      liAdults.querySelector("b").innerHTML--;
  });

  plusMinusAdults[1].addEventListener("click", () => {
    liAdults.querySelector("b").innerHTML++;
  });

  liChildren.appendChild(counter.cloneNode(true));
  liChildren.appendChild(spanChildren);
  liChildren.appendChild(buttons.cloneNode(true));

  const plusMinusChildren = liChildren
    .getElementsByClassName("buttons")[0]
    .querySelectorAll("button");

  plusMinusChildren[0].addEventListener("click", () => {
    if (liChildren.querySelector("b").innerHTML > 0)
      liChildren.querySelector("b").innerHTML--;
  });

  plusMinusChildren[1].addEventListener("click", () => {
    liChildren.querySelector("b").innerHTML++;
  });

  liRooms.appendChild(counter.cloneNode(true));
  liRooms.appendChild(spanRooms);
  liRooms.appendChild(buttons.cloneNode(true));

  const plusMinusRooms = liRooms
    .getElementsByClassName("buttons")[0]
    .querySelectorAll("button");

  plusMinusRooms[0].addEventListener("click", () => {
    if (liRooms.querySelector("b").innerHTML > 0)
      liRooms.querySelector("b").innerHTML--;
  });

  plusMinusRooms[1].addEventListener("click", () => {
    liRooms.querySelector("b").innerHTML++;
  });

  ul.appendChild(liAdults);
  ul.appendChild(liChildren);
  ul.appendChild(liRooms);

  popup.appendChild(ul);

  return popup;
};

export default Popup;
