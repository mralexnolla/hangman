
let timerId;


// Start the game
document.getElementById("startButton").addEventListener("click", function() {
  // Define variables

  //const wordList = ["javascript", "html", "css"]; 

  const wordList = ["javascript", "html", "css",'photosynthesis','classification'];
  //Random word index

  let word = wordList[Math.floor(Math.random() * wordList.length)];
  //Array of letters 
  let letters = word.split("");
  let blanks = [];
  for (let i = 0; i < letters.length; i++) {
    blanks[i] = "_";
  }
  let remainingTries = 6;
  let remainingTime = 30;

  // Update the display
  document.getElementById("word").innerHTML = blanks.join(" ");
  document.getElementById("tries").innerHTML = `LIVE LEFT: ${remainingTries}`;
  document.getElementById("timer").innerHTML = `TIME LEFT: ${remainingTime} seconds`;
  document.getElementById("message").innerHTML = "";
   
  
   

  // Timer
  timerId = setInterval(function() {
    remainingTime--;
    document.getElementById("timer").innerHTML = `TIME LEFT: ${remainingTime} seconds`;
    //faisal changes
    if (remainingTime == 0) {
      clearInterval(timerId);
      document.getElementById("message").innerHTML = "Time's up! Game over.";
      return;
    }
  }, 1000);

  // Guess a letter
  document.addEventListener("keypress", function(event) {
    let letter = event.key;
    let correct = false;

    for (let i = 0; i < letters.length; i++) {
      if (word[i] === letter) {
        blanks[i] = letter;
        correct = true;
      }
    }
    if (!correct) {
      remainingTries--
    }

    document.getElementById("word").innerHTML = blanks.join(" ");
    document.getElementById("tries").innerHTML = `LIVES LEFT: ${remainingTries}`;
    document.getElementById("message").innerHTML = "";
    if (blanks.join("") === word) {
      document.getElementById("message").innerHTML = "You win!";
      clearInterval(timerId);
    }

    //faisal changes
    if (remainingTries <= 0){
      clearInterval(timerId);
      document.getElementById("message").innerHTML = "You lose! The word was: " + word;
      remainingTries = 7;
    }

    
    
  });
});

