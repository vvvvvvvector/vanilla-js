const input = document.getElementsByTagName("input")[0];
const addTaskButton = document.getElementsByTagName("button")[0];
const ul = document.querySelector("ul");

let taskText = "";

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
  ul.innerHTML = "";
});

input.addEventListener("input", (event) => {
  taskText = event.target.value;
});

input.addEventListener("keyup", (event) => {
  event.preventDefault();

  if (event.key === "Enter") {
    addTaskButton.click();
  }
});

addTaskButton.addEventListener("click", () => {
  if (taskText !== "") {
    createListItem(taskText);
    input.value = taskText = "";
  }
});

const createListItem = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");

  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = text;

  button.innerText = "X";
  button.style = "display: none";

  div.addEventListener("mouseover", () => {
    button.style = "display: visible";
  });

  div.addEventListener("mouseleave", () => {
    button.style = "display: none";
  });

  button.addEventListener("click", (event) => {
    event.target.closest("li").remove();
  });

  div.appendChild(span);
  div.appendChild(button);

  li.appendChild(div);
  ul.appendChild(li);
};
