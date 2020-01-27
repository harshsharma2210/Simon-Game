const buttonColor = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started=false;
let level=0;

$(".btn").click(handler);
$(document).keypress(start);
function start(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
}


function handler() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
  }

function nextSequence() {
    level++;
    $("#level-title").text("Level "+level);
  
  let randomNumber = parseInt(Math.random() * 4);
  let randomChosenColour = buttonColor[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100)
    .on("click", sound);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  started=false;

}

function playSound(name) {
  let music = new Audio("sounds/" + name + ".mp3");
  music.play();
}



function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
