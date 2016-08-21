var timerId = setInterval(function() {
  console.log("This code was run on " + new Date());
}, 1000
setTimeout(function() {
  clearInterval(timerId);
}, 30000);


// Pseudocode
// -a player gets welcomed to the game.
// -rules are shown.
// -select One Player or Two Player game.
// -the board populates.
// -a timer counts down to start.
// -the player has to hit as may avocados as possible to score points. Sombreros are double points and the spinning taco is a bonus prize that appears less frequently. The chilli is -2 pts.
// -a score boart displays the score in real time.
// -a clock counts down in real time.
// -the player has 30 seconds to make as much guacamole as they can. 
// -if Two Player game selected, player two does the same.
// -the score from player one stays on screen and player two can try to beat it.
// -the winner is awarded the spinning taco.

// Technical plan
// skills I will use are:
// Js / J Query  = loops, eventListener, logic for scores, arrays (eeek), logic (eeek), DOM manipulation, responsive design, returning scores, preventDefault to stop page deleting playerOne scores.
// CSS     = .show/.hide properties, fade, avatars, gifs, sounds, layout.

// Logic
// Avocado     = 1pt
// Sombrero  = 2pts
// Spinning taco = 4pts
// Chilli      = -2pts

// One Player Mode
// If one player, levels will increment after 30 seconds played. Incrementation will involve faster play and the introduction of foul players (e.g. the chilli) which will minus points.
// How many levels will I make??

// Two player Mode
// The same as the above but the players will take turns and the score will stay on the screen. The winner will be announced at the end of player two.

var tokens = {
  image: http...
}

var score = 0
var time = 30seconds
var level = {}
var boardWidth
var squres []


1 welcomePage(){
  onPageLoad(music plays);
  vamanosButton.addEventListener("click", takeTo rulesPage)
} //when the page loads, the background music will play. the 'vamanos' button will take player to the rules page
rulesPage (){
  showsRules, onePlayer/twoPlayer.addEventListener("click", populateBoard);
} //this page shows the rules and gives the option for 1 or 2 players. if onePlayer chosen then go to player one board } else { go to two player mode
assignLevel (){
  countNumberofPlays, selectCorrectCSSproperty(board for that level), populateBoard;
} //When selected, the programme looks to find the level - if its a new game, it starts on level one.
var numberOfPlays = [0]
if (numberOfPlays === 0){
  displayBoard 1 
} else {
  if (numberOfPlays === 1){
    displayBoard 2
} else {
  if (numberOfPlays === 2){
      displayBoard 3
  }
}

populateBoard (){
  displaysAllElements: board, divs, timer, homeButton, scoreBoard; assignLevel;
   //board shows all necessary elements
whackamole.makePlays = function(){
  this.computerMove = this.moves[Math.floor(Math.random()*this.moves.length)];
}

whackamole.hearPlays = function(){
  this.userMove = event.target.getAttribute('value')
  push to score array
}

countDown (){
  whenNewGameStarts, clockIsAt30seconds - countsDownTo0 = alert("Game Over!");
} //when the game starts, the clock counts down from 30s to 0
// function createCountDown(timeRemaining) {    
//     var startTime = Date.now();
//     return function() {
//        return timeRemaining - ( Date.now() - startTime );
//     }
// }

populateImage (){
  loopOverDivs(mole-holes), assignIconAtRandom (avocado should be most popular, then sombrero. Spinning Taco should appear once) (in higher levels, the chilli appears at the same rate as sombrero) .showImage
  addEventListener("click", newFunction)
}

newFunction (){
  .onclick(hideImage, storeScore);
}

hideImage (){
  if (imageIsShowing, imageSinksDown);
}

storeScore (){
  takeValueOfItemClickedOn, addToFinalScore[], displayScore();
}

displayScore (){
  collectResultfromFinalScore, displayInFormDiv
}

if spinningTaco was won, alert("You won the Spinning Taco! Andale!");
if onePlayer = continue to next level assignLevel();
if twoPlayer = switchPlayer but preventDefault so scores from P1 remain on screen

homeButton (){
  addEventListener("click", navigate back to welcomePage);
}

data, presentation, views, style, DOM manipulation:
DATA: data recieved from eventListeners
      data produced = scoreBoard

PRESENTATION: Mexican theme. Colours: red, orange, green, yellow, black, 













