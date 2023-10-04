import { numbers } from "./utils.js";

const root1 = document.querySelector("#root");
const buttons = document.querySelectorAll(".btn");

const div_container = document.createElement("div");
div_container.classList.add("container");

let btnInt = 0;

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    btnInt = index;
    const randomColor = getRandomColor();
    div_container.style.color = randomColor;
    div_container.innerText = numbers[index];
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
root1.append(div_container);
