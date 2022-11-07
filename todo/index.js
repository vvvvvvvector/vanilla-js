const input = document.getElementsByTagName("input")[0];
const addTaskButton = document.getElementsByTagName("button")[0];
const ul = document.querySelector("ul");

let taskText = "";
const data = [];

document.addEventListener("DOMContentLoaded", () => {
  const items = localStorage.getItem("data");

  if (items) {
    const tasks = JSON.parse(items);

    tasks.forEach((task) => {
      data.push(task);
      createListItem(task);
    });
  }
});

document.getElementById("clear").addEventListener("click", () => {
  ul.innerHTML = "";
  localStorage.clear();
});

input.addEventListener("input", (event) => {
  taskText = event.target.value;
});

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});

addTaskButton.addEventListener("click", () => {
  if (taskText !== "") {
    if (data.length === 0) {
      data.push({ id: 0, text: taskText });
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      data.push({ id: data[data.length - 1].id + 1, text: taskText });
      localStorage.setItem("data", JSON.stringify(data));
    }

    createListItem(data[data.length - 1]);
    input.value = taskText = "";
  }
});

const createListItem = (task) => {
  const li = document.createElement("li");
  const div = document.createElement("div");

  const span = document.createElement("span");
  const button = document.createElement("button");
  const spanChangeInput = document.createElement("input");

  spanChangeInput.style = "display: none";
  span.innerText = task.text;

  button.innerText = "x";
  button.style = "display: none";

  span.addEventListener("click", (event) => {
    event.target.style = "display: none";
    spanChangeInput.style = "display: visible; height: 20px";

    spanChangeInput.value = event.target.innerText;
    spanChangeInput.focus();

    spanChangeInput.addEventListener("input", (event) => {
      span.innerText = event.target.value;
    });

    spanChangeInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        data.map((item) => {
          if (item.id === task.id) {
            item.text = span.innerText;
          }
        });

        localStorage.setItem("data", JSON.stringify(data));

        span.style = "display: visible";
        event.target.style = "display: none";
      }
    });
  });

  div.addEventListener("mouseover", () => {
    button.style = "display: visible";
  });

  div.addEventListener("mouseleave", () => {
    button.style = "display: none";
  });

  button.addEventListener("click", (event) => {
    const filtered = data.filter((item) => item.id !== task.id);

    data.length = 0; // empty an array

    filtered.forEach((i) => {
      data.push(i);
    });

    data.map((i, index) => {
      i.id = index;
    });

    localStorage.setItem("data", JSON.stringify(data));

    event.target.closest("li").remove();
  });

  div.appendChild(span);
  div.appendChild(spanChangeInput);
  div.appendChild(button);

  li.appendChild(div);
  ul.appendChild(li);
};
