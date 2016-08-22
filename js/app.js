//   var theme = document.getElementById("theme");
//   theme.play();
//   document.getElementById('theme').muted = false;
// }

// var button = document.getElementById("mute");
// this.addEventListener("click", function (){
//   if (theme.muted === false) {    
//    theme.muted = true;
//  } else {
//   theme.muted = false;
// }
// });

$(start);

var score   = 0;
var counter = 0;
var squaresArray = [];
var playerScore = 0;
var squares = $('.square');
var objects = [
  {
    name: "avocado",
    img: "./css/avoForWeb.png",
    speed: 1500,
    score: 2
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
  }
]

function start() {
  var squares = $('.square')


  setInterval(function() {
    showSquare(squares);
  }, 1500);
}

function showSquare(array) {
  var square    = array[Math.floor(Math.random()*array.length)];
  var character = objects[Math.floor(Math.random()*objects.length)];
  console.log(character);

  $(square).css('background-image', 'url('+ character.img + ')');
  $(square).on('click', function() {
    logScore(character);
  })

  setTimeout(function() {
    $(square).css('background-image', 'none');
    $(square).off();
    counter++;
    counterCount(counter)
  }, 1000)
}


function counterCount(counter) {
  if (counter > 3) {
    // call gameOver function which will clear intervals -- google 
  }
}

function logScore(character) {
  score += character.score
  // select html score and populate with new score
  console.log(score);
}
