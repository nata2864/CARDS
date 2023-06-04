(()=>{"use strict";var t=["♠","♣","♥","♦"],n=["A","6","7","8","9","10","J","Q","K"];const e=function(){function e(e){void 0===e&&(e=t.flatMap((function(t){return n.map((function(n){return new a(t,n)}))}))),this.cards=a,this.cards=e}return Object.defineProperty(e.prototype,"numberOfCards",{get:function(){return this.cards.length},enumerable:!1,configurable:!0}),e.prototype.shuffle=function(){for(var t=this.numberOfCards-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),e=this.cards[n];this.cards[n]=this.cards[t],this.cards[t]=e}},e}();var a=function(t,n){this.suit=t,this.value=n},c=function(t){for(var n=t.flatMap((function(t){return[t,t]})),e=0;e<n.length-1;e++){var a=e+Math.floor(Math.random()*(n.length-e)),c=n[a];n[a]=n[e],n[e]=c}return n},s=function(t){var n={"♠":"spades.svg","♣":"clubs.svg","♥":"hearts.svg","♦":"diamonds.svg"},a=document.querySelector(".game-section-start__container"),i=document.querySelector(".game-section-cards__container");i.style.opacity="1",a.style.display="none";var r=function(t){var n=new e;switch(n.shuffle(),t){case"1":return c(n.cards.slice(0,3));case"2":return c(n.cards.slice(0,6));case"3":return c(n.cards.slice(0,9))}}(t).map((function(t){return"\n      \n      <div data-value=".concat(t.value," data-suit=").concat(t.suit,' class="game-table__card" >\n     \n          <div class="card__face" style="background: url(./static/images/').concat(n[t.suit],') center center no-repeat, rgb(255, 255, 255);">\n         \n              <div class="card__top">    \n                  <div class="card__value">').concat(t.value,'\n                  </div>\n                  <img class="card__suit" src="./static/images/').concat(n[t.suit],'" alt="suit">\n              </div>\n              <div class="card__bottom">    \n                  <div class="card__value">').concat(t.value,'\n                  </div>\n                  <img class="card__suit" src="./static/images/').concat(n[t.suit],'" alt="suit">\n              </div>   \n          </div>\n          <div class="card__back"></div>    \n    </div>     \n      ')})).join("");i.innerHTML='\n    <div class="main__game_content">\n        <div id="timer">\n            <div class="timer__text">\n                <span class=\'timer__text_item\'>min</span> <span class=\'timer__text_item\'>sek</span>\n            </div>\n            <p class=\'timer\'>00.00</p>\n        </div>\n        <button class="main__game_content_button">Начать заново</button>\n    </div>\n        <div class="main__game_cardsBox">\n        '.concat(r,"\n        </div> "),document.querySelector(".main__game_content_button").addEventListener("click",(function(){s(t)}));var u=document.querySelector(".timer"),o=5;u.textContent="00.05";var d=setInterval((function(){0==--o?(clearInterval(d),function(){for(var t=0,n=document.querySelectorAll(".card__back");t<n.length;t++)n[t].style.display="flex"}()):u.innerHTML="00.0".concat(o)}),1e3)};!function(){document.querySelector(".game-section-start__container").innerHTML='<div class="game-section-start__container">\n        <h2 class="game-menu__title">Выбери <br>сложность</h2>\n        <button class="game-menu__difficult-btn">1</button>\n        <button class="game-menu__difficult-btn">2</button>\n        <button class="game-menu__difficult-btn">3</button>\n        <button class="game-menu__start-btn">Старт</button>\n    </div>';var t=document.querySelectorAll(".game-menu__difficult-btn");t.forEach((function(n){return n.addEventListener("click",(function(){t.forEach((function(t){return t.classList.remove("game-menu__difficult-btn_checked")})),n.classList.add("game-menu__difficult-btn_checked"),document.querySelector(".game-menu__start-btn").addEventListener("click",(function(){s(n.textContent)}))}))}))}()})();