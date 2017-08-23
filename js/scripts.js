//player 1
$(document).ready(function() {
  $('#diceNumber').submit(function(event){
    event.preventDefault();
    function GameDice(number){
      this.number = number;
    }

    $('#changeDice').click(function(event) {
      event.preventDefault();
      $('.displayform').show();
      $('.showDiceNumber').hide();
    });

    var diceNumber = $('input#playerNumber').val();
    $('#showDiceNumber').text(diceNumber);

    function diceRoll (min, max) {
      return Math.floor(Math.random() * (max-min+1) + min);
    }

    var GameDice = new GameDice(diceNumber);
    var min = Math.ceil(diceNumber);
    var max = Math.floor(diceNumber * 6);
    diceRoll(min, max);

    var turnScore = 0;
    var total = 0;
    var test = 0;
    var current = "";

    var turn = function(score) {
      if (score === parseInt(diceNumber)) {
        alert("Your turn is over, other player's turn.")
        turnScore = 0;
      } else {
        return turnScore += score
      }
  };

  var addToTotal = function(turnScore) {
    test = turnScore + test
    return test;
  }

  $('.roll').click(function(event) {
    event.preventDefault();
    current = diceRoll(min,max);
    turn(current);
    $('#currScore').text(current);
    $('#turnScore').text(turnScore);
  });

  $(".hold").click(function() {
    addToTotal(turnScore);
    $('#total').text(test);

    $("#currScore").empty();
    $("#turnScore").empty();
    turnScore = 0;
    if (test >= 100) {
      alert("Player 1 wins!");
    }
    alert("End Player 1's turn")
      });
  });
});

//player 2

$(document).ready(function() {
  $('#diceNumber').submit(function(event){
    event.preventDefault();
    function GameDice(number){
      this.number = number;
    }

    var diceNumber = $('input#playerNumber').val();
    $('#showDiceNumber').text(diceNumber);
    $('.showDiceNumber').show();
    $('.displayform').hide();

    function diceRoll (min, max) {
      return Math.floor(Math.random() * (max-min+1) + min);
    }

    var GameDice = new GameDice(diceNumber);
    var min = Math.ceil(diceNumber);
    var max = Math.floor(diceNumber * 6);
    diceRoll(min, max);

    var turnScore = 0;
    var total = 0;
    var test = 0;
    var current = "";

    var turn = function(score) {
      if (score === parseInt(diceNumber)) {
        alert("Your turn is over, other player's turn.")
        turnScore = 0;
      } else {
        return turnScore += score
      }
  };

  var addToTotal = function(turnScore) {
    test = turnScore + test
    return test;
  }

  $('.roll2').click(function(event) {
    event.preventDefault();
    current = diceRoll(min,max);
    turn(current);
    $('#currScore2').text(current);
    $('#turnScore2').text(turnScore);
  });

  $(".hold2").click(function() {
    addToTotal(turnScore);
    $('#total2').text(test);

    $("#currScore2").empty();
    $("#turnScore2").empty();
    turnScore = 0;
    if (test >= 100) {
      alert("Player 2 wins!");
    }
    alert("End Player 2's turn")
      });
  });
});

//player 2 old
// $(document).ready(function(){
//   $('#diceNumber').submit(function(event){
//   event.preventDefault();
//   function GameDice(number){
//     this.number = number;
//   }
//
//   var diceNumber = $('input#playerNumber').val();
//
//   function diceRoll (min, max) {
//     return Math.floor(Math.random() * (max-min+1) + min);
//   }
//
//   var GameDice = new GameDice(diceNumber);
//   var min = diceNumber;
//   var max = diceNumber * 6;
//   diceRoll(min, max);
//
//   var turnScore = 0;
//   var total = 0;
//   var test = 0;
//   var current = "";
//
//   var turn = function(score) {
//     if (score === 1) {
//       alert("Your turn is over, other player's turn.")
//       turnScore = 0;
//     } else {
//       return turnScore += score
//     }
//   };
//
//   var addToTotal = function(turnScore) {
//     test = turnScore + test
//     return test;
//   }
//
//   //Front End Logic
//
//   $('.roll2').click(function(event) {
//     event.preventDefault();
//     current = diceRoll(min, max);
//     turn(current);
//     $('#currScore2').text(current);
//     $('#turnScore2').text(turnScore);
//
//   });
//
//   $(".hold2").click(function() {
//     addToTotal(turnScore);
//     $('#total2').text(test);
//
//     $("#currScore2").empty();
//     $("#turnScore2").empty();
//     turnScore = 0;
//     if (test >= 100) {
//       alert("Player 2 wins!");
//     }
//     alert("End Player 2's turn")
//     });
//   });
// });
