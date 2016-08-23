$(start);

var score;
var counter;
var squaresArray;
var playerScore;
var count;
var squares      = $('.square');
var timerInterval, squaresInterval;
var objects      = [
  {
    name: "avocado",
    img: "./css/avoForWeb.png",
    speed: 1500,
    score: 1
  }, {
    name: "sombrero",
    img: "http://vignette2.wikia.nocookie.net/clubpenguin/images/2/2f/Mini_Sombrero.png/revision/latest?cb=20140408163249",
    speed: 1000,
    score: 2
  }, {
    name: "chilli",
    img: "http://sweetclipart.com/multisite/sweetclipart/files/red_chili_pepper.png",
    speed: 1500,
    score: -2
  }, {
    name: "tacoGif",
    img: "http://66.media.tumblr.com/a6fb0c2ac0c5b74ef910083bea480406/tumblr_nefxiuSGpt1tha1vgo1_250.gif",
    speed: 100,
    score: 5
  }
]

function themePlay() {
  $('#theme').play();
  $('#theme').muted = false;
}

function mute(){
  $('#mute').on('click', function (){
    if (theme.muted === false) {    
      theme.muted = true;
    } else {
      theme.muted  = false;
    }
  }); 
}

function start(){
  $('#go').on('click', go)
}

function go() {
  score         = 0;
  counter       = 0;
  squaresArray  = [];
  playerScore   = 0;
  count         = 30;
  timerInterval = setInterval(timer, 1000);
  $("#timer").html(count);
  $(".scoreBoard").empty();

  function timer() {
    count -= 1;  
    if (count === 0) endGame();
    $("#timer").html(count);
  }

  beginGame()
}

function beginGame() {
  var squares = $('.square')

  squaresInterval = setInterval(function() {
    showSquare(squares);
  }, 1500);
}

function showSquare(array) {
  var square    = array[Math.floor(Math.random()*array.length)];
  var character = objects[Math.floor(Math.random()*objects.length)];

  $(square).css('background-image', 'url('+ character.img + ')');
  $(square).off();
  $(square).on('click', function() {
    logScore(character);
  })

  setTimeout(function() {
    $(square).css('background-image', 'none');
    $(square).off();
    counter++;
  }, 1000)
}

function logScore(character) {
  score += character.score
  $(".scoreBoard").html(score);
}

function endGame(counterTwo) {
  $(".scoreBoard").html("GAME OVER!" + "\nYou made " + score + " pots of GUACAMOLE! ¡Andale!");
  $("#go").html("Play Again")
  timerInterval   = clearInterval(timerInterval);
  squaresInterval = clearInterval(squaresInterval);

  console.log(timerInterval, squaresInterval)
}