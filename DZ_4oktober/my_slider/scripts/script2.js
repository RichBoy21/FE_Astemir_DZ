import { images } from "./utils.js";

const root2 = document.querySelector("#root2");
const btn2 = document.querySelectorAll(".btn2");

const div_container_two = document.createElement("div");
div_container_two.classList.add("container2");

root2.append(div_container_two);

const imgElement = document.createElement("img");
imgElement.src = images[0];
div_container_two.append(imgElement);

btn2.forEach((button, index) => {
  const btnImgElement = document.createElement("img");
  btnImgElement.src = images[index];

  button.append(btnImgElement);

  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  btnImgElement.style.width = buttonWidth + "px";
  btnImgElement.style.height = buttonHeight + "px";

  button.addEventListener("click", () => {
    imgElement.src = images[index];
  });
});
