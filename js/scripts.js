function diceRoll() {
    return Math.floor(Math.random()*(6-1+1)+1);
}
var turnScore = 0;
var total = 0;
var test = 0;
var current = "";

var turn = function(score) {
  if (score === 1)  {
    alert("Your turn is over, try again.")
    turnScore = 0;
  } else if (score === 2) {
      return turnScore += 2
  } else if (score === 3) {
    return turnScore += 3
  } else if (score === 4) {
    return turnScore += 4
  } else if (score === 5) {
    return turnScore += 5
  } else if (score === 6) {
    return turnScore += 6
  }
};

var addToTotal = function (turnScore) {
  test = turnScore + test
  return test;
}

$(document).ready(function(){
  $('.roll').click(function(event) {
    event.preventDefault();
    current = diceRoll();
    turn(current);
    $('#currScore').text(current);
    $('#turnScore').text(turnScore);
  });

  $(".hold").click(function(){
    addToTotal(turnScore);
    $('#total').text(test);

    $("#currScore").empty();
    $("#turnScore").empty();
});
});
