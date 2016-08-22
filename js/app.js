// //at present this code is not for use. Initial workings out only!




// var tokens  = [];
// tokensArray = [].slice.call(tokens);
// var numberOfSquares = 9
// var score   = 0
// var level   = {}
// var boardWidth = "x"
// var squres  = []
// var time    = new Date();
//   d.setSeconds(30);
//   var n = d.getSeconds()

// // function letsGo() {
// //   var start = getElementById("vamanos");
// //   this.addEventListener("click", function() {
// //     display.rulesScreen;
// //   // showStart: function() {
// //   //   this.rulesScreen.style.display = "block";
// // })

// function Token (name, score) {
//   this.name   = name,
//   this.score  = score,
// };

// var avocado   = new Token("avocado", 1);
// var sombrero  = new Token("sombrero", 2);
// var chilli    = new Token("chilli", -1);
// var taco      = new Token("taco", 4);

// function Level (level, boardWidth, boardHeight, numberOfSquares) {
//   this.level            = level,
//   this.boardWidth       = boardWidth,
//   this.boardHeight      = boardHeight,
//   this.numberOfSquares  = numberOfSquares
// }

// // var easy    = new Level("easy",   600px, 400px, 9);
// // var medium  = new Level("medium", 600px, 400px, 12);
// // var hard    = new Level("hard",   600px, 400px, 15);



// //   var tokens  = [];
// //   tokensArray = [].slice.call(tokens);
// //   var numberOfSquares = dependent on level;
// //   

// //   

// // // var tokens = {
// // //   image: url("/Users/cazbrunnen/Desktop/coding/avoForWeb.png")
// // // }

// function init(){
//   squares      = document.getElementsByTagName("li");
//   squaresArray = [].slice.call(squares);
//   bindEvents(squaresArray, randomPopulate);
// }

// function bindEvents(array, callback){
//   for (var i = 0; i < array.length; i++) {
//     array[i].addEventListener("click", callback);
//   }
// }

// function randomPopulate(){
//   for (var i = 0; i < squaresArray.length; i++) {
//     return Math.floor((Math.random() * 1000) + 1) % max;
//   }
//   // now to link the above with this:
//   for (var i = 0; i < numberOfSquares; i++) {
//     tokens.push({
//       box: paper.rect(x, y, 50, 50).attr({ fill: "blue" }),
//       showBriefly: function(timeFromNow, duration) {
//         window.setTimeout(this.box.show, timeFromNow);
//         window.setTimeout(this.box.hide, timeFromNow + duration);
//       }
//     });
//   }
//   tokens.showBriefly(1000, 2000);
// }

// //   updateSquare(this, player);
// //   var score  = 
// //   score.push(tokensArray.valueOf(this));
// // }





// // var $   = function (id) { return document.getElementById(id); }
// // var add = function(fld,val) {
// //   return (parseFloat(fld.value)+val).toFixed(2);
// // }

// // to assign score value on to icon when appears
// // var logScores = function {
// //   $("avocado").onclick=function() { 
// //     $("scoreBoard").value = add($("scoreBoard"),1);
// //   }  
// //   $("sombrero").onclick=function() { 
// //     $("scoreBoard").value = add($("scoreBoard"),2);
// //   } 
// //   $("chilli").onclick=function() { 
// //     $("scoreBoard").value = add($("scoreBoard"),-2);
// //   } 
// //   $("tacoGif").onclick=function() { 
// //     $("scoreBoard").value = add($("scoreBoard"),4);
// //   }

// //   $("reset").onclick = function() {    
// //     $("scoreBoard").value = "000";
// //   }
// // }
//----------------------------------------------------------------------------------
// window.onload = function() {
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
var charater  = objects
var playerScore = 0;
var objects = [
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
}
]

function start() {
  var squares = $('.square')

  setInterval(function() {
    showSquare(squares)
  }, 2000);
}

function showSquare(array) {
  var square    = array[Math.floor(Math.random()*array.length)];
  var charater  = objects[Math.floor(Math.random()*objects.length)];

  $(square).css('background-image', 'url(' + charater.img + ')');
  // add event listener to selected box
  $(square).on("click", logScore)
}
function logScore(){
  var $playerScore 
  ++ playerScore;
  $(".scoreBoard").html(playerScore);
};


  // increment the score per hit

// function storeScore() {
//   squaresArray.push({
//     objects(score.val)
//   });
//   }

setTimeout(function() {
  $(square).css('background-image', 'none');
  counter +=1;

  console.log(counter);
}, charater.speed);


// set function for a timer
// when timer hits 0, clearInterval()



