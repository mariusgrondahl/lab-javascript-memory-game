class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


}

MemoryGame.prototype.shuffleCards = function() {
  let currentIndex = arr.length;
  let randomIndex = 0;
  let currentValue = 0;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    currentValue = arr[currentIndex];
    
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = currentValue;
  }
  return arr;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {

};


MemoryGame.prototype.isFinished = function(firstCard, secondCard) {

};


// let newGame = new MemoryGame {};