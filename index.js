let timerId;

//Words from index.json linked in the html index file would be parsed to usable data here
const wordList = JSON.parse(data)


document.getElementById("startButton").addEventListener("click", function() {
  // Define variables
  let word = wordList[Math.floor(Math.random() * wordList.length)];
  let letters = word.split("");
  let blanks = [];
  for (let i = 0; i < word.length; i++) {
    blanks[i] = "_";
  }
  let remainingTries = 6;
  let remainingTime = 30;

  // Update the display
  document.getElementById("word").innerHTML = blanks.join(" ");
  document.getElementById("tries").innerHTML = `Tries remaining: ${remainingTries}`;
  document.getElementById("timer").innerHTML = `Time remaining: ${remainingTime} seconds`;
  document.getElementById("message").innerHTML = "";

  // Timer
  timerId = setInterval(function() {
    remainingTime--;
    document.getElementById("timer").innerHTML = `Time remaining: ${remainingTime} seconds`;
    if (remainingTime === 0) {
      clearInterval(timerId);
      document.getElementById("message").innerHTML = "Time's up! Game over.";
    }
  }, 1000);

  // Guess a letter
  document.addEventListener("keypress", function(event) {
    let letter = event.key;
    let correct = false;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        blanks[i] = letter;
        correct = true;
      }
    }
    if (!correct) {
      remainingTries--;
    }
    document.getElementById("word").innerHTML = blanks.join(" ");
    document.getElementById("tries").innerHTML = `Tries remaining: ${remainingTries}`;
    document.getElementById("message").innerHTML = "";
    if (blanks.join("") === word) {
      document.getElementById("message").innerHTML = "You win!";
      clearInterval(timerId);
    }
    if (remainingTries === 0) {
      document.getElementById("message").innerHTML = "You lose! The word was: " + word;
      clearInterval(timerId);
    }
  });
});
  