const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const input = document.createElement("input");
  
  button.innerText = "Dodaj";
  
  document.body.appendChild(input);
  input.focus();

  let text = "";
  input.addEventListener("input", (event) => {
    text = event.target.value;
  });

  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const newLi = document.createElement("li");
      newLi.innerText = text;
      ul.appendChild(newLi);
      document.body.removeChild(input);
      button.innerText = "Dodaj nowe zainteresowanie";
    }
  });
});

