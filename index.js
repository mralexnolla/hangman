

// Start the game
document.getElementById("startButton").addEventListener("click", function() {
  
  
 let timerId;
  // Define variables
  let remainingTries = 6;
  let remainingTime = 30;

  if(!timerId){
    // Timer
    timerId = setInterval(function() {
      remainingTime--;
      document.getElementById("timer").innerHTML = `TIME LEFT: ${remainingTime} seconds`;
      //disbale start button
      document.getElementById("startButton").addEventListener('click',function(){
        clearInterval(timerId);
      })
      
      //faisal changes
      if (remainingTime == 0 ) {
        clearInterval(timerId);
        document.getElementById("message").innerHTML = "Time's up! Game over.";
      }
    }, 1000);
  }

  const wordList = ["javascript", "html", "css",'photosynthesis','classification'];
  //Random word index

  let word = wordList[Math.floor(Math.random() * wordList.length)];
  //Array of letters 
  let letters = word.split("");
  let blanks = [];
  for (let i = 0; i < letters.length; i++) {
    blanks[i] = "_";

    
  }


  // Update the display
  document.getElementById("word").innerHTML = blanks.join(" ");
  document.getElementById("tries").innerHTML = `LIVE LEFT: ${remainingTries}`;
  document.getElementById("timer").innerHTML = `TIME LEFT: ${remainingTime} seconds`;
  document.getElementById("message").innerHTML = "";
   
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
      clearInterval(timerId);
      document.getElementById("message").innerHTML = "You win!";
      
    }

    //faisal changes
    if (remainingTries == 0){
      document.getElementById("message").innerHTML = "You lose! The word was: " + word;
      clearInterval(timerId);
      remainingTries = 7;
      document.addEventListener('keypress',function(){
        location.reload()
      })
      
      
    }
  });



});

