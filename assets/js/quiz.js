

// ---------------QUESTIONS AND ANSWERS -----------------

// Basic format for question & answers structure adapted from tutorial 
// How to Make a Quiz App Using JavaScript on GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8) ------------- CREDIT

// Array of of 10 questions with index of 0 (Q1) to 9 (Q10)
// each index in each answerScore array matches index of corresponding character in characterArray
const questions = [ 
    // Question 1 (index [0])
    { 
      question: "First things first - Would you like some tea?",
      answers: [
        { text: "Always!", answerScore: [2, 3, 0, 0, 1, 0]},
        { text: "Calming Chamomile", answerScore: [3, 0, 1, 2, 0, 0]},
        { text: "Proper Yorkshire", answerScore: [0, 2, 1, 0, 0, 3]},
        { text: "It depends on my mood!", answerScore: [0, 0, 0, 3, 1, 2]},
        { text: "Chai, darling", answerScore: [1, 0, 0, 2, 3, 0]},
        { text: "No thanks, I prefer a coffee!", answerScore: [0, 0, 3, 0, 1, 2]}
      ]
    },
    // Question 2 (index [1])
    { 
      question: "Best way to approach a seemingly impossible problem?",
      answers: [
        { text: "Consider it, but if it takes long I'm likely to get distracted", answerScore: [3, 1, 2, 0, 0, 0]},
        { text: "Find a quick workaround so I can get on with the next thing on my list", answerScore: [2, 0, 3, 0, 0, 1]},
        { text: "Consider it from another angle… maybe you just need to think outside the box", answerScore: [0, 3, 0, 1, 2, 0]},
        { text: "Don't even try. I have better things to do with my time than solve impossible problems.", answerScore: [0, 0, 1, 0, 3, 2]},
        { text: "Find someone else to solve it for me!", answerScore: [0, 2, 0, 1, 0, 3]},
        { text: "Consider whether it is worth solving or not", answerScore: [1, 0, 0, 3, 2, 0]},
      ]
    },
    // Question 3 (index [2])
    { 
      question: "Would you rather...",
      answers: [
        { text: "Meditate on a mountain top on a journey of self-discovery", answerScore: [2, 0, 0, 1, 3, 0]},
        { text: "Get everything done on your 'To Do' list", answerScore: [1, 0, 3, 0, 0, 2]},
        { text: "Hold the Royal Flush in the ultimate high-stakes game of poker", answerScore: [0, 2, 0, 1, 0, 3]},
        { text: "Live a day in the life of someone else of your choosing", answerScore: [0, 1, 2, 3, 0, 0]},
        { text: "Host the ultimate party with all your favourite people", answerScore: [0, 3, 0, 0, 1, 2]},
        { text: "Curl up with a good book in your favourite nook", answerScore: [3, 0, 1, 0, 2, 0]},
      ]
    },
    // Question 4 (index [3])
    { 
      question: "What would you do with a mysterious bottle marked 'Drink Me'?",
      answers: [
        { text: "Shake it to see if it's fizzy", answerScore: [0, 3, 1, 0, 0, 2]},
        { text: "Pour it away. I don't like following orders", answerScore: [0, 0, 0, 1, 2, 3]},
        { text: "Drink it one go and look around for more", answerScore: [0, 2, 0, 0, 3, 1]},
        { text: "That all depends on who has given me the bottle...", answerScore: [2, 0, 0, 3, 1, 0]},
        { text: "Try a tiny sip to see if you like it first", answerScore: [3, 0, 2, 1, 0, 0]},
        { text: "Give it to someone else and hope it's not poisonous", answerScore: [2, 1, 3, 0, 0, 0]},
      ]
    },
    // Question 5 (index [4])
    { 
      question: "What would you say is your best feature?",
      answers: [
        { text: "Legs", answerScore: [2, 1, 3, 0, 0, 0]},
        { text: "Teeth", answerScore: [1, 0, 2, 3, 0, 0]},
        { text: "Hair", answerScore: [3, 2, 0, 0, 0, 1]},
        { text: "Voice", answerScore: [0, 0, 0, 2, 1, 3]},
        { text: "Brain", answerScore: [0, 0, 0, 2, 3, 1]},
        { text: "Nose", answerScore: [0, 3, 2, 0, 1, 0]},
      ]
    },
    // Question 6 (index [5])
    { 
      question: "What's the best way to get from A to B?",
      answers: [
        { text: "Faster than everyone else", answerScore: [0, 1, 2, 0, 0, 3]},
        { text: "Why would I want to get to B?", answerScore: [0, 0, 0, 2, 3, 1]},
        { text: "Follow the path from nowhere to somewhere", answerScore: [0, 2, 0, 3, 0, 1]},
        { text: "On foot", answerScore: [2, 0, 3, 1, 0, 0]},
        { text: "It doesn't matter as long as there is a cafe stop on the way!", answerScore: [2, 3, 0, 0, 1, 0]},
        { text: "Will I want to come back, or am I only going one way?", answerScore: [3, 0, 1, 0, 2, 0]},
      ]
    },
    // Question 7 (index [6])
    { 
      question: "In an emergency, some might say you are...?",
      answers: [
        { text: "Cool, calm and collected", answerScore: [1, 0, 0, 3, 2, 0]},
        { text: "Methodical and scientific", answerScore: [3, 0, 0, 2, 1, 0]},
        { text: "About as helpful as a headless chicken", answerScore: [0, 3, 2, 0, 0, 1]},
        { text: "The one who takes control (after all, everyone loves a hero)!", answerScore: [0, 1, 0, 2, 0, 3]},
        { text: "Quick to respond and enthusiastic - A for effort!", answerScore: [1, 2, 3, 0, 0, 0]},
        { text: "Too busy doing something else to be much help", answerScore: [0, 0, 1, 0, 3, 2]},
      ]
    },
    // Question 8 (index [7])
    { 
      question: "Which is the best Season?",
      answers: [
        { text: "They all have something special to offer.", answerScore: [2, 0, 0, 3, 1, 0]},
        { text: "The lazy hazy crazy days of Summer", answerScore: [1, 0, 0, 0, 2, 3]},
        { text: "Winter Wonderland", answerScore: [0, 2, 3, 1, 0, 0]},
        { text: "Spring of course, how can I choose any other?", answerScore: [3, 0, 2, 0, 0, 1]},
        { text: "Autumn is the best for foraging", answerScore: [0, 1, 2, 0, 3, 0]},
        { text: "I'm a big fan of jerk seasoning myself", answerScore: [0, 3, 0, 1, 0, 2]},
      ]
    },
    // Question 9 (index [8])
    { 
      question: "Favourite Alice in Wonderland Quote?",
      answers: [
        { text: "I can't go back to yesterday because I was a different person then.", answerScore: [3, 1, 0, 0, 2, 0]},
        { text: "If everybody minded their own business, the world would go around a great deal faster than it does.", answerScore: [2, 0, 3, 0, 1, 0]},
        { text: "Cat: We're all mad here. I'm mad. You're mad.\nAlice: How do you know I'm mad?\nCat: You must be, or you wouldn't have come here.", answerScore: [0, 2, 0, 3, 0, 1]}, 
        { text: "If you drink much from a bottle marked 'poison' it is certain to disagree with you sooner or later.", answerScore: [0, 0, 0, 2, 3, 1]},
        { text: "I'm afraid so. You're mad, bonkers, completely off your head. But I'll tell you a secret. All the best people are.", answerScore: [0, 3, 1, 2, 0, 0]},
        { text: "It takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!", answerScore: [1, 0, 2, 0, 0, 3]},
      ]
    },
    // Question 10 (index [9])
    { 
      question: "At the Mad Hatter's Tea Party, you hope there will be…",
      answers: [
        { text: "Wild Mushroom Tarts", answerScore: [0, 1, 2, 0, 3, 0]},
        { text: "Tea!", answerScore: [2, 3, 0, 0, 1, 0]},
        { text: "Scones with Jam & Cream", answerScore: [3, 0, 0, 1, 0, 2]},
        { text: "Vegan Carrot Cake", answerScore: [1, 0, 3, 0, 2, 0]},
        { text: "Smoked Salmon and Cucumber Sandwiches", answerScore: [0, 2, 0, 3, 0, 1]},
        { text: "Jammy Dodgers", answerScore: [0, 0, 1, 2, 0, 3]},
      ]
    }
  ];

 // array of image, tag and description text dataset for each character
const descriptions = [
    { // creative commons image from https://anime.goodfon.com/art-anime/wallpaper-download-1920x1200-alice-in-wonderland-alice-4136.html
      image: "assets/images/alice-image.webp",
      descriptionTag: "Inquisitive & Curious",
      text: "You love to travel and are open to new experiences.\n\nYou are an excellent problem-solver, but sometimes easily distracted. You can get frustrated if things don't go your way.",
    },
    { // creative commons image from https://www.goodfon.com/films/wallpaper-download-1930x1080-alice-in-wonderland-mad-hatter-bezumnyi-shliapnik-alisa-v-st.html
      image: "assets/images/mad-hatter-image.webp",
      descriptionTag: "An Obsessive Creative",
      text: "Your approach might not be conventional and you can get fixated on things, but your creative flair & energy are your superpowers.\n\nYou are great to be around, if a little bit bonkers!",
    },
    { // creative commons image from https://www.goodfon.com/films/wallpaper-download-1930x1080-alice-in-wonderland-mad-hatter-bezumnyi-shliapnik-alisa-v-st.html
      image: "assets/images/white-rabbit-image.webp",
      descriptionTag: "The Busy Bee",
      text: "Always on the go, you are super productive and always available to help a friend.\n\nYou have a million things to do which can stress you out, but you love to unwind at the end of the day.",
    },
    { // creative commons image from https://picryl.com/media/alice-in-wonderland-1951-cheshire-cat-fb560c
      image: "assets/images/cheshire-cat-image.webp",
      descriptionTag: "A Font of Wisdom",
      text: "You love to learn and offer support and guidance, though this can change with your mood.\n\nPeople-watching is your favourite hobby, but sometimes you just need to get away from it all.",
    },
    { // creative commons image from https://picryl.com/media/alice-in-wonderland-1951-caterpillar-df0bf9
      image: "assets/images/blue-caterpillar-image.webp",
      descriptionTag: "The Cool Cat(erpillar)",
      text: "Your laid back confident attitude reflects your philosophical approach to life.\n\nYou can be a bit opinionated at times, but it's all about balance - you love to let your hair down and party hard too!",
    },
    { // creative commons image from https://www.goodfon.com/films/wallpaper-download-1920x1200-alice-through-the-looking-1639.html
      image: "assets/images/queen-of-hearts-image.webp",
      descriptionTag: "A Born Leader",
      text: "While your direct approach might sometimes be challenging to others, you know what you want and you get things done.\n\nYour motivation is infectious and everyone would like to have you on their team.",
    }
];

// declare global objects
// const used as these elements won't change and need to be declared in multiple functions
const quizBox = document.getElementById("questions-box");
const questionData = document.getElementById("question");  
const answerData = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button"); 
const changeAnswerButton = document.getElementById("change-answer-button");
const resultsSection = document.getElementById("results-box");
const characterArray = ["Alice", "Mad Hatter", "White Rabbit", "Cheshire Cat", "Blue Caterpillar", "Queen of Hearts"];
const finalCharacterScores = [];

// declare score area variables
let currentQuestionIndex = 0;
let aliceScore = 0;
let madHatterScore = 0;
let whiteRabbitScore = 0;
let cheshireCatScore = 0;
let blueCaterpillarScore = 0;
let queenOfHeartsScore = 0;


//-------------QUIZ FUNCTIONS--------------

/** Starts the quiz takes the index of 0 */
function startQuiz() {

  currentQuestionIndex = 0;

  // scores for each character are set at 0 for the start of the quiz
  aliceScore = 0;
  madHatterScore = 0;
  whiteRabbitScore = 0;
  cheshireCatScore = 0;
  blueCaterpillarScore = 0;
  queenOfHeartsScore = 0;

  // calling function to display the question and answer data
  displayQuestion(); 
}

  // code for building questions and creating answer buttons adapted from tutorial 
  // How to Make a Quiz App Using JavaScript on GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8) ---------------- CREDIT

/** Displays the questionData and answerData for the current question */
function displayQuestion() {

  resetState();

  // declares the current question as the question at most recent index used
  let currentQuestion = questions[currentQuestionIndex];
  
  // gets the question number for the current question and adds 1 because want 'Q1' to show not 'Q0' which is the index
  let questionNumber = currentQuestionIndex + 1;

  // tells html to display question number in front of question text then a "." and then the question text 
  questionData.innerText = questionNumber + ". " + currentQuestion.question;


  // gets 'answers' for the currentQuestion from the answerData*/ 
  // forEach runs the script for each answer in the answersData for that question
  currentQuestion.answers.forEach(answer => {

    // creates an answerButton for each answer in the answerData
    const button = document.createElement("button");

    // displays the 'text' from the answers for that question
    button.innerText = answer.text;
    
    // adds the class "button" to the button for CSS
    button.classList.add("button");

    // adds another button for each answer in sequence
    answerData.appendChild(button);

    // adds an event listener to each button which calls the selectAnswer function
    button.addEventListener("click", selectAnswer);
  });

}

/** Resets the quiz content for current question data */
function resetState() {

  // next button not visible before question answered
  nextButton.style.display = "none";

  // set button to not visible until an answer has been selected
  changeAnswerButton.style.display = "none"; 

    // code for while loop removing previous answer buttons adapted from tutorial 
    // How to Make a Quiz App Using JavaScript on GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8)  -----------------CREDIT

  // checks if there are firstChild nodes present in the answerData
  while(answerData.firstChild) {  

    // removes previous answer button firstChild nodes
    answerData.removeChild(answerData.firstChild); 
  }

  // gets the currentScore from the DOM and resets it to 0
  let currentScore = document.getElementById("chosen-answer-score"); //gets the currentScore from the DOM
    currentScore.innerHTML = [0, 0, 0, 0, 0, 0];
}

  // code to target chosen answer adapted from tutorial 
  // How to Make a Quiz App Using JavaScript on GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8) -----------------CREDIT 

/** Identifies answerScore array for the selected answer and disables other answers. */
function selectAnswer(e) {

  // targets the answer button (e) that has been chosen to pass the subsequent code
  const chosenAnswer = e.target;

  // adds class of 'chosen-answer' to the selected answer button
  chosenAnswer.classList.add("chosen-answer");
 
  // iterates through all answers in the questions dataset to find the matching answer and answerScore
  // checks each answer for the current question 
  questions[currentQuestionIndex].answers.forEach(answer => { 

    // checks if chosenAnswer text is same as answer text
    if (chosenAnswer.innerText === answer.text) {

    // declares the answerScore for the matching answer and writes into the html DOM
    let chosenAnswerScore = answer.answerScore;

    let currentScore = document.getElementById("chosen-answer-score");
    currentScore.innerHTML = chosenAnswerScore;
    }
  });

  // disables all answer buttons so can't select any others
  // gets all the answerData Child nodes
  Array.from(answerData.children).forEach(button => { 
      // sets the children to disabled
      button.disabled = true; 
  });

  // makes hover function invisible to user
  Array.from(answerData.children).forEach(button => {

      // nohvr class added to each button so that hover effect is invisible to user
      button.classList.add("nohvr");

      // removed from chosen answer to maintain original CSS
      chosenAnswer.classList.remove("nohvr"); 
  });

  // adds eventListener and styling
  // button displays only once an answer is selected 
  changeAnswerButton.style.display = "block";
  changeAnswerButton.classList.add("button");
  changeAnswerButton.addEventListener("click", changeAnswer);

  // adds eventListener and styling
  // button displays only once an answer is selected 
  nextButton.style.display = "block"; 
  nextButton.classList.add("button"); 
  nextButton.addEventListener("click", handleNextButton);
  
}


/** Enables the user to change their mind and select a different answer. */
function changeAnswer() {

  //iterates through each child of answerData and removes 'disable'
  Array.from(answerData.children).forEach(button => {
    button.disabled = false;
  });

  // runs the displayQuestion function with refreshed questionData and answerData 
  displayQuestion();
}


/** Gets currentScore data and adds the current answerScore to each character score*/
function addScore() {

  // Code for using .map(Number) adapted from StackOverflow discussion:
  //https://stackoverflow.com/questions/48343478/what-does-mapnumber-do-here#:~:text=map(Number)%20%2F%2F%20Calls%20Number,ever%20is%20passed%20to%20it -----CREDIT
  
  // creates an array from innerText of current score in scoreboard and maps to numbers or NaN items
  let currentScore = Array.from(document.getElementById("chosen-answer-score").innerHTML).map(Number);
  
    // code to filter currentScore array to remove all NaN adapted from StackOverflow discussion
    //https://stackoverflow.com/questions/31925323/how-to-filter-out-nan-null-0-false-in-an-array-js ----------CREDIT

  let chosenAnswerScore = currentScore.filter(function (value) {
  return !Number.isNaN(value);
  });

    //code for sending and receiving a score to the DOM adapted from Love Maths CI Walkthrough project ----------------CREDIT
    
  // gets old score data from html DOM and coverts string to number
  let aliceScore = parseInt(document.getElementById("alice-score").innerText);

  // adds the value of index 0 to old alice-score value
  document.getElementById("alice-score").innerText = (aliceScore) + (chosenAnswerScore[0]);
  
  // gets old score data from html DOM and coverts string to number
  let madHatterScore = parseInt(document.getElementById("mad-hatter-score").innerText);

  // adds the value of index 0 to old mad-hatter-score value
  document.getElementById("mad-hatter-score").innerText = madHatterScore + chosenAnswerScore[1];
  
  // gets old score data from html DOM and coverts string to number
  let whiteRabbitScore = parseInt(document.getElementById("white-rabbit-score").innerText);

  // adds the value of index 0 to old white-rabbit-score value
  document.getElementById("white-rabbit-score").innerText = whiteRabbitScore + chosenAnswerScore[2];
 
  // gets old score data from html DOM and coverts string to number    
  let cheshireCatScore = parseInt(document.getElementById("cheshire-cat-score").innerText);

  // adds the value of index 0 to old cheshire-cat-scoree value
  document.getElementById("cheshire-cat-score").innerText = cheshireCatScore + chosenAnswerScore[3];
  
  // gets old score data from html DOM and coverts string to number    
  let blueCaterpillarScore = parseInt(document.getElementById("blue-caterpillar-score").innerText);

  // adds the value of index 0 to old blue-caterpillar-score value
  document.getElementById("blue-caterpillar-score").innerText = blueCaterpillarScore + chosenAnswerScore[4];
  
  // gets old score data from html DOM and coverts string to number    
  let queenOfHeartsScore = parseInt(document.getElementById("queen-of-hearts-score").innerText);

  // adds the value of index 0 to old queen-of-hearts-score value
  document.getElementById("queen-of-hearts-score").innerText = queenOfHeartsScore + chosenAnswerScore[5];
  
}

/** Runs series of functions and checks when next button 'click' event listener triggered*/
function handleNextButton() {
  // calls addScore function 
  addScore();
  // checks if current question index is 0-8(Q9) before running subsequent code
  if(currentQuestionIndex <= 8){
    
    // adds 1 to the current question index
    currentQuestionIndex++;

    // calls the displayQuestion function for the new question index
    displayQuestion();

    // checks if current question is Q10
  } else if (currentQuestionIndex == 9) {

    // calls displayResults function for question Q10
    displayResults();
  }
}


// calls the startQuiz function to run the initialisation data and display the relevant questionData
startQuiz(); 


// ---------------RESULTS FUNCTIONS---------------------

/** Replaces quiz content with results content*/
function displayResults() {

  // hides quizBox
  quizBox.style.display = "none";

  // displays resultsSection
  resultsSection.style.display = "block";

  // calls getFinalScores function
  getFinalScores();
}

/** Gets data from the DOM to create an array of final scores for all characters */
function getFinalScores() {

  // gets an array of all elements (paragraphs) with class "character-score"
  let characterScores = Array.from(document.getElementsByClassName("character-score"));

  // sets up array to hold the final scores
  let finalScoreArray = [];

  // loops through each paragraph one by one
  for (let i=0; i < characterScores.length; i++) {

    // adds the innerText of each paragraph to the array
    // code syntax to push an item into an array adapted from W3 Schools Tutorial: https://www.w3schools.com/jsref/jsref_push.asp ---------CREDIT
    finalScoreArray.push(characterScores[i].innerText);
  }
   // loops through each item in the array 
  for (let i=0; i < finalScoreArray.length; i++) {

    // changes each item from a string to an integer
    let arrayItem = parseInt(finalScoreArray[i]);

    // adds each integer to the finalCharacterScores array
    finalCharacterScores.push(arrayItem);
  }

  //calls findTopScores function
  findTopScores(); 
}

/** Sorts finalCharacterScores array in descending order and compares index[0] with characterArray index*/
function findTopScores() {

  // creates a separate temporary array to ensure original finalCharacterScores maintains correct order 
  let finalScoreArray = finalCharacterScores.map(Number);

  // code to sort an array in descending order adapted from W3Schools Tutorial(https://www.w3schools.com/js/js_array_sort.asp) -----------CREDIT
  // sorts finalCharacterScores in decending order - index [0] is highest score
  let sortedCharacterScores = finalScoreArray.sort(function(a, b){return b - a;});

  // finds the corresponding index of sortedCharacterScores[0] in the original finalCharacterScore array
  let topScoreIndex = finalCharacterScores.indexOf(sortedCharacterScores[0]);
  
  // gets topIndex element in html
  let topIndex = document.getElementById("top-score-index");

  // writes the topScoreIndex into html DOM topIndex
  topIndex.innerText = topScoreIndex;

  // finds the topScoreCharacter by matching characterArray index to topScoreIndex 
  let topScoreCharacter = characterArray[topScoreIndex];
  
  // finds the corresponding index of sortedCharacterScores[1] in the original finalCharacterScore array
  let secondScoreIndex = finalCharacterScores.indexOf(sortedCharacterScores[1]);

  // checks in case first and second scores are the same value, and hence finding the same indexOf result
  if (topScoreIndex === secondScoreIndex) {

      // syntax for using 'lastIndexOf' to find matching index searching from end of an array found on Stackoverflow: 
      // https://stackoverflow.com/questions/52558924/how-can-i-find-an-array-element-starting-from-the-end-of-the-array ------------CREDIT 
    // searches for the last index with a matching score in the finalCharacterScores array
    let tiedTopIndex = finalCharacterScores.lastIndexOf(sortedCharacterScores[1]);

    // identifies the html element with id second-score-index
    let secondIndex = document.getElementById("second-score-index");

    // writes tiedTopScore into secondIndex element instead of duplicate 
    secondIndex.innerText = tiedTopIndex;

    // finds the tiedTopScoreCharacter by matching characterArray index to tiedTopIndex 
    let tiedTopCharacter = characterArray[tiedTopIndex];

    // gets the results-summary text from html DOM 
    let resultSummary = document.getElementById("results-summary");

    // writes summary sentence into html DOM results-summary adding template literals for each character
    resultSummary.innerText = (`Wow, you appear to have a split personality! You are 50% ${topScoreCharacter} and 50% ${tiedTopCharacter}.`);

  } else {

    //identifies the html element with id second-score-index
    let secondIndex = document.getElementById("second-score-index");

    // writes secondScoreIndex into secondIndex element
    secondIndex.innerText = secondScoreIndex;

    // finds the secondScoreCharacter by matching characterArray index to secondScoreIndex 
    let secondScoreCharacter = characterArray[secondScoreIndex];
  
    // gets the results-summary text from html DOM 
    let resultSummary = document.getElementById("results-summary");

    //finds difference between two highest scores to define which summary sentance to use
    let scoreDifference = (finalCharacterScores[topScoreIndex]) - (finalCharacterScores[secondScoreIndex]);

    // re-writes the innerText of the results-summary according to the scoreDifference
    if (scoreDifference === 0) {
      // if difference is 0, writes this sentence into html adding template literals for each character
      resultSummary.innerText = (`Wow, you appear to have a bit of a split personality! You are 50% ${topScoreCharacter} and 50% ${secondScoreCharacter}.`);

    } else if (scoreDifference <= 2) {
      // if difference is not 0, but less than or equal to 2, writes this sentence into html adding template literals for each character
      resultSummary.innerText = (`Just a couple of points in it! You are more like ${topScoreCharacter}, but you are a lot like ${secondScoreCharacter} too.`);

    } else if (scoreDifference > 2 && scoreDifference < 6) {
      // if difference is more than 2 and less than 6, writes this sentence into html adding template literals for each character
      resultSummary.innerText = (`You are most like ${topScoreCharacter}, but you have a generous dose of ${secondScoreCharacter} to provide balance.`);

    } else {
      // if difference is 6 or more, writes this sentence into html adding template literals for each character
      resultSummary.innerText = (`You are ${topScoreCharacter} through and through, with a bit of ${secondScoreCharacter} for good measure`);
    }
  }
  // calls displayCharacters function
  displayCharacters();
}

/** Drills down to correct data in character data sets to disply in results page */
function displayCharacters() {

  // gets index information from html DOM for top and second scores, parsing from string into integer
  let topIndex = parseInt(document.getElementById("top-score-index").innerText);
  let secondIndex = parseInt(document.getElementById("second-score-index").innerText);
  
  // identifies topScoreImage in html DOM and adds image src
  let topScoreImage = document.getElementById("top-score-image");
  topScoreImage.src = descriptions[topIndex].image;

  // identifies topScoreTag in html DOM and adds descriptionTag
  let topScoreTag = document.getElementById("top-score-tag");
  topScoreTag.innerText = descriptions[topIndex].descriptionTag;

  //identifies topScoreDescription in html and adds description
  let topScoreDescription = document.getElementById("top-score-description");
  topScoreDescription.innerText = descriptions[topIndex].text;

  // identifies secondScoreImage in html DOM and adds image src
  let secondScoreImage = document.getElementById("second-score-image");
  secondScoreImage.src = descriptions[secondIndex].image; 

  // identifies secondScoreTag in html DOM and adds descriptionTag
  let secondScoreTag = document.getElementById("second-score-tag");
  secondScoreTag.innerText = descriptions[secondIndex].descriptionTag;

  //identifies secondScoreDescription in html and adds description
  let secondScoreDescription = document.getElementById("second-score-description");
  secondScoreDescription.innerText = descriptions[secondIndex].text;
}
