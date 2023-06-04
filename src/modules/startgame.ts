import { createcardsArray } from "./cardmix";
// import { cardsApp } from "./index.js"

export const startGame = (difficult: string) => {
    const suitsBackground: Record<string, string> = {
      "♠": "spades.svg",
      "♣": "clubs.svg",
      "♥": "hearts.svg",
      "♦": "diamonds.svg",
    };

    const gameSection = document.querySelector(
        ".game-section-start__container"
    )as HTMLElement
    const gameTable = document.querySelector
    (".game-section-cards__container")as HTMLElement
    gameTable.style.opacity = "1";
    gameSection.style.display = "none";
    let cardsIcons = createcardsArray(difficult);

    const cardsHtml = cardsIcons
        .map((card) => {
            return `
      
      <div data-value=${card.value} data-suit=${
                card.suit
            } class="game-table__card" >
     
          <div class="card__face" style="background: url(./static/images/${
              suitsBackground[card.suit]
          }) center center no-repeat, rgb(255, 255, 255);">
         
              <div class="card__top">    
                  <div class="card__value">${card.value}
                  </div>
                  <img class="card__suit" src="./static/images/${
                      suitsBackground[card.suit]
                  }" alt="suit">
              </div>
              <div class="card__bottom">    
                  <div class="card__value">${card.value}
                  </div>
                  <img class="card__suit" src="./static/images/${
                      suitsBackground[card.suit]
                  }" alt="suit">
              </div>   
          </div>
          <div class="card__back"></div>    
    </div>     
      `;
        })
        .join("");

    gameTable.innerHTML = `
    <div class="main__game_content">
        <div id="timer">
            <div class="timer__text">
                <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>
            </div>
            <p class='timer'>00.00</p>
        </div>
        <button class="main__game_content_button">Начать заново</button>
    </div>
        <div class="main__game_cardsBox">
        ${cardsHtml}
        </div> `;

    const restartBTn = document.querySelector(".main__game_content_button");
    restartBTn!.addEventListener("click", () => {
        startGame(difficult);
    });

    function closecards() {
        const cards = document.querySelectorAll(".card__back");
        for (const card of cards as any) {
            card.style.display = "flex";
        }
    }

    const coutDownEl = document.querySelector(".timer") as HTMLElement
    let timer = 5;
    coutDownEl.textContent = "00.05";
    let id = setInterval(function () {
        timer--;
        if (timer === 0) {
            clearInterval(id);
            closecards();
            // game();
        } else {
            coutDownEl.innerHTML = `00.0${timer}`;
        }
    }, 1000);


    // function opencards() {
    //     const cardsO = document.querySelectorAll(".card__back");

    //     for (const card of cardsO) {
    //         card.addEventListener("click", () => {
    //             card.style.display = "none";
    //         });
    //     }
    // }
    // opencards();
};