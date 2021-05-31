var global = 0;
var popup = document.querySelector(".modal-write-us");
var score = document.querySelector(".score");

const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  hasFlippedCard = false;
  secondCard = this;
  lockBoard = true;

  checkForMatch();
}


function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  global += 10;
  score.innerHTML = global;
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


function timer() {

  var seconds = 55;

  var seconds_timer_id = setInterval(function() {
      if (seconds != (60)) {
          seconds ++;
          var a = document.querySelector('.seconds');
          var b = document.querySelector('.minute');
          a.innerHTML = seconds % 60;
          b.innerHTML = parseInt(seconds/60);
          
      } else {
          clearInterval(seconds_timer_id);    
          popup.classList.add("modal-is-showed");
          localStorage.setItem('val',global); 
      }
  }, 1000);

}