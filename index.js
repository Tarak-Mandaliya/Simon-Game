var buttonArray = ["red","yellow","green","blue"];
var gamePattern = [];
var i;
var count=1;
function nextSequence(){
  $("h1").text("Level "+ count);
  var userClickedPattern=[];
  var randomVariable = Math.floor(Math.random()*4);
  var randomChosenColour = buttonArray[randomVariable];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play();
  i=0;
  count++;
}



$(".btn").on("click",function(){
  var userChosenColour = $(this).attr("id");
  if(gamePattern[i]==userChosenColour){
    $("#"+userChosenColour).fadeOut(100).fadeIn(100);
    var audio1 = new Audio("sounds/"+userChosenColour+".mp3");
    audio1.play();
    i++;
  }
  else{
    $("h1").text("😈 Game Over 😈")
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    setTimeout(startover,1000);
  }

  if(i==gamePattern.length){
    setTimeout(nextSequence,1000);
  }
  // userClickedPattern.push(userChosenColour);

   // nextSequence();
  // }

  // $("#"+userChosenColour).addClass("pressed");
  // setTimeout(function(){
  // $("#"+userChosenColour).removeClass("pressed");},100);
  //  $("#"+userChosenColour).fadeOut(100).fadeIn(100);
  // var audio1 = new Audio("sounds/"+userChosenColour+".mp3");
  // audio1.play();
});

var keyPress=0;
$("body").on("keydown",function(){
  if(keyPress==0){
  nextSequence();
  keyPress=1;
  }
});

function startover(){
  gamePattern=[];
  count=1;
  keyPress=0;
  i=0;
  $("h1").text("Press A key to start");
}
