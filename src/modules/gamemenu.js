import { startGame } from "./startgame.js";

export const createGameMenu = () => {
  const title = document.createElement("h2");
  const gameSection = document.querySelector(".game-section-start__container");
  gameSection.innerHTML = "";
  title.textContent = "Выбери сложность";
  title.classList.add("game-menu__title");

  const easy = document.createElement("button");
  // Здесь присвоили класс кнопке
  easy.classList.add("game-menu__difficult-btn");
  // Здесь написали ее номер
  easy.textContent = 1;

  const medium = document.createElement("button");
  medium.classList.add("game-menu__difficult-btn");
  medium.textContent = 2;

  const hard = document.createElement("button");
  hard.classList.add("game-menu__difficult-btn");
  hard.textContent = 3;

  const buttonStart = document.createElement("button");
  buttonStart.classList.add("game-menu__start-btn");
  buttonStart.textContent = "Старт";
  // Аппендим
  gameSection.append(title, easy, medium, hard, buttonStart);

  const chooseDifficult = document.querySelectorAll(
    ".game-menu__difficult-btn"
  );
  for (const chooseButtonElement of chooseDifficult) {
    chooseButtonElement.addEventListener("click", () => {
      chooseDifficult.forEach((el) =>
        el.classList.remove("game-menu__difficult-btn_checked")
      );
      chooseButtonElement.classList.add("game-menu__difficult-btn_checked");

      const difficult = chooseButtonElement.textContent;
      buttonStart.addEventListener("click", () => startGame(difficult));
    });
  }
};
