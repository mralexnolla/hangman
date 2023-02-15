const button = document.getElementById("startButton")
const tries = document.getElementById("tries")
const words = document.getElementById("word")
const timer = document.getElementById("timer")
const message = document.getElementById("message")
// All ID's and Classes are assigned const names for easy reference 




//Words from index.json linked in the html index file would be parsed to usable data here
const wordList = JSON.parse(data)


button.addEventListener("click", function() {
  // Button function still needs work.
  button.textContent = ''
  let word = wordList[Math.floor(Math.random() * wordList.length)]; 
  let letters = word.split("");
  let blanks = [];
  for (let i = 0; i < letters.length; i++) {
    blanks[i] = "_";
  }
  let remainingTries = 6;
  let remainingTime = 30;

  words.innerHTML = blanks.join(" ");
  tries.innerHTML = `Tries remaining: ${remainingTries}`;
  message.innerHTML = "";

  // Timer function 
  let timerId = setInterval(function() {
    remainingTime--;
    timer.innerHTML = `Time remaining: <span>${remainingTime}</span> seconds`;
    const span = document.querySelector('span')
    if (span.textContent >= 20){
      span.style.color = 'green'
    } else if (span.textContent > 10 && span.textContent <= 19){
      span.style.color = 'yellow'
    } else {
      span.style.color = 'red'
    }
    
    // If statement to ensure game ends when timer ends, still incomplete 
    if (remainingTime == 0) {
      clearInterval(timerId);
      message.innerHTML = "Time's up! Game over.";
      return;
    }
  }, 1000);

  
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

    words.innerHTML = blanks.join(" ");
    tries.innerHTML = `Tries remaining: ${remainingTries}`;
    message.innerHTML = "";
    if (blanks.join("") === word) {
      message.innerHTML = "You win!";
      message.style.fontSize = '30px'
      message.style.color = 'green'
      clearInterval(timerId);
      return
    }


    if (remainingTries <= 0){
      clearInterval(timerId);
      message.innerHTML = "You lose!";
      message.style.fontSize = '30px'
      message.style.color = 'red'
    }

    
    
  });
});
  