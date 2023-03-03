# HANGMAN
guess the word in my mind as it is popularly called, 
hangman is one of the world’s most popular word guessing games, implementing this game was simple since there was no need to create our own array of words, a JSON word file sufficed for this task.
This documentation provides an overview of how the game was developed and how its played, modes of play and rules concerning play.
All subsidiary teams contributed effectively to the development and deployment of the game, the front-end development team works on the design previews for the game, the back-end team worked on the logic of the game, coupled with the array of words, gives the user a wide selection of vocabulary to guess from.
The first days of back end work, a framework for the project was developed and pushed to GitHub for all members of the subsidiary teams to work on. The jobs of all teams occurred concurrently in order to avoid finished logic with no design, or finished design with no logic. All members pushed their versions of the updated framework to the backend teams GitHub repo, and the task of merging all pull requests was taken up by Mr. Alex. This went on concurrently with the front-end team as well as the testing team, which notified the back-end team of any errors or faults they found in the game, if any of the subsidiary teams had a design idea, the design was previewed in our communication medium and approved before usage. 

HOW TO PLAY:
The game is played by the computer randomly selecting a word out of the array of words provided and the user playing tries to guess the word by suggesting letters. The word to be guessed is represented by a series of dashes, with each dash representing a letter in the word. For example, if the word is "hangman," the dashes would appear as "_ _ _ _ _ _ _."
The user guessing the word suggests a letter, and if the letter is in the word, the letter is filled in where it appears in the word. If the letter is not in the word, a part of the hangman is drawn. The game continues until the word is guessed or the hangman is fully drawn. 
RULES OF PLAY:
•	The word to be guessed should be a valid word, and it should not be too long or too difficult.
•	The user guessing the word can suggest only one letter at a time.
•	If the user guesses the word correctly before the hangman is fully drawn, they win the game.
•	If the hangman is fully drawn before the word is guessed, the player guessing the word loses the game.
•	The user guessing the word should not be able to see the word or the dashes on the screen.
