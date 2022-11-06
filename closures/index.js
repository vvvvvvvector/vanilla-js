// Timers
const first_timer = document.getElementById("timer_1");
const second_timer = document.getElementById("timer_2");

const startTimer = (timer, time) => {
  let count = 0;

  setInterval(() => {
    timer.innerText = count;
    count++;
  }, time);
};

startTimer(first_timer, 500);
startTimer(second_timer, 1000);

// Paragraphs
const p_1 = document.getElementById("p_1");
const p_2 = document.getElementById("p_2");
const p_3 = document.getElementById("p_3");

const colors = ["red", "green", "blue"];

const handleClick = () => {
  for (let i = 0; i < colors.length; ) {
    return (event) => {
      event.target.style.color = colors[i];

      i = i === colors.length ? 0 : i + 1;
    };
  }
};

p_1.addEventListener("click", handleClick());
p_2.addEventListener("click", handleClick());
p_3.addEventListener("click", handleClick());
