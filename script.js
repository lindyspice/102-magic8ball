$(document).ready(function() {
  
var eightBall = {};

eightBall.listOfAnswers = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes - definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy, try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];

/* hide the default answer when the page loads */
$("#answer").hide();
  
/* method for using magic 8-ball */
eightBall.askQuestion = function() {
  $("#answer").hide();
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    setTimeout(
    function() {
      var question = prompt("Ask a yes/no question.");
          }, 500); 
  var randomIndex = Math.floor(Math.random() * eightBall.listOfAnswers.length);
  var randomAnswer = eightBall.listOfAnswers[randomIndex];
  $("#answer").text( randomAnswer );
  setTimeout(
    function() {
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      $("#8ball").effect( "shake" );
      $("#answer").fadeIn(7000);
    }, 1000); 
};

/* listen for user click to use the magic 8-ball! */
$("#questionButton").click(eightBall.askQuestion);
  
});