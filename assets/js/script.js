// COLOUR-CHANGING HEADING

// Code from StackOverflow (https://stackoverflow.com/questions/69743873/continuous-rainbow-color-cycling-effect-in-js) 
// Adapted to create colour changing effect on main heading element on all pages.
const scheme = document.querySelector("h1");
  const rainbow = ["#AB63E0","#C063E0","#D863E0","#E063D1","#E063B8","#E0639E","#E06389","#E0636E",
    "#E06963","#E0636E","#E06389","#E0639E","#E063B8","#E063D1","#D863E0","#C063E0","#AB63E0",
  ];
  var currentColor = 0;
  setInterval(() => {
    scheme.style.color = `${rainbow[currentColor]}`;
    scheme.style.borderColor = `${rainbow[currentColor]}`;
    currentColor++; 
    if (currentColor == rainbow.length-1) {
    currentColor = 0;
    }
  }, 200);

// WELCOME PAGE MODAL

  //  Code adapted using W3schools tutorial to create a basic modal https://www.w3schools.com/howto/howto_css_modals.asp

// let instructionsModal = document.getElementById("instructions-modal");
// let instructionsButton = document.getElementById("instructions-button");
// let span = document.getElementsByClassName("close")[0];


// // When the user clicks the button, display the modal 
// instructionsButton.onclick = function displayModal() {
//   instructionsModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function(_close) {
//   instructionsModal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == instructionsModal) {
//     instructionsModal.style.display = "none";
//   }
// };

// QUESTIONS AND ANSWERS -----------------

/*index of answerScore matches index of Alice in Wonderland characters: 
character_array [Alice, Mad Hatter, White Rabbit, Cheshire Cat, Blue Caterpillar, Queen of Hearts]*/

// Basic format for question & answers structure adapted from tutorial How to Make Quiz App Using JavaScript on GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8)
const questions = [ // Array of of 10 questions with index of 0 (Q1) to 9 (Q10)
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

 // Array of image, tag and description text for each character
const descriptions = [
    {
      image: {src: "assets/images/alice-character-image.webp"},
      descriptionTag: "Inquisitive & Curious",
      text: "You love to travel and are open to new experiences. You are an excellent problem-solver, but sometimes easily distracted. You can get frustrated if things don't go your way.",
    },
    {
      image: "",
      descriptionTag: "An Obsessive Creative",
      text: "Your approach might not be conventional and you can get fixated on things, but your creative flair & energy are your superpowers. You are great to be around, if a little bit bonkers!",
    },
    {
      image: "",
      descriptionTag: "The Busy Bee",
      text: "Always on the go, you are super productive and always available to help a friend. You have a million things to do which can stress you out, but you love to unwind at the end of the day.",
    },
    {
      image: "",
      descriptionTag: "A Font of Wisdom",
      text: "You love to learn and offer support and guidance, though this can change with your mood. People-watching is your favourite hobby, but sometimes you just need to get away from it all.",
    },
    {
      image: "",
      descriptionTag: "The Cool Cat(erpillar)",
      text: "Your laid back confident attitude reflects your philosophical Zen-like approach to life, but it's all about balance - you love to let your hair down and party hard too!",
    },
    {
      image: "",
      descriptionTag: "A Born Leader",
      text: "While your direct approach might sometimes be challenging to others, you know what you want and you get things done. Your motivation is infectious and everyone would like to have you on their team.",
    }
];

//declaring the character description index for each character
const aliceDescription = descriptions[0].text;
const madHatterDescription = descriptions[1].text; 
const whiteRabbitDescription = descriptions[2].text;
const cheshireCatDescription = descriptions[3].text;
const blueCaterpillarDescription = descriptions[4].text;
const queenOfHeartsDescription = descriptions[5].text;



// Declare the specific question elements from the DOM by Id
// const used as these elements won't change and need to be declared in multiple functions
const quizBox = document.getElementById("questions-box");
const quizSection = document.getElementById("quiz"); 
const questionData = document.getElementById("question"); // with id='question" 
const answerData = document.getElementById("answer-buttons"); // Gets data from DOM in the 'answer-buttons' div
const nextButton = document.getElementById("next-button"); 
const changeAnswerButton = document.getElementById("change-answer-button"); //declares button from 'change-answer-button in html
const resultsSection = document.getElementById("results-box");
const resultsButton = document.getElementById("results-button");
const currentScore = document.getElementById("chosen-answer-score");
const characterArray = ["Alice", "Mad Hatter", "White Rabbit", "Cheshire Cat", "Blue Caterpillar", "Queen of Hearts"];
const finalCharacterScores = [];


// Create index structure for identifying the current question and enabling changes to the next question in sequence
// always starts from q1 (index 0)

let currentQuestionIndex = 0;
let aliceScore = 0;
let madHatterScore = 0;
let whiteRabbitScore = 0;
let cheshireCatScore = 0;
let blueCaterpillarScore = 0;
let queenOfHeartsScore = 0;

/*Function to start the quiz takes the index of 0 and sets the content of the 'next button'*/
function startQuiz() {
  currentQuestionIndex = 0;
  // Scores for each character need to be set at 0 for the start of the quiz
  aliceScore = 0;
  madHatterScore = 0;
  whiteRabbitScore = 0;
  cheshireCatScore = 0;
  blueCaterpillarScore = 0;
  queenOfHeartsScore = 0;

  displayQuestion(); // calling function to display the question and answer data
};

/*Displays the questionData and answerData for the current question*/
function displayQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex]; //declares the current question as the question at most recent index used
  let questionNumber = currentQuestionIndex + 1; //gets the question number for the current question and adds 1 because want 'Q1' to show not 'Q0' which is the index
  // Tells html to display question number in front of question text then a "." and then the question text 
  questionData.innerText = questionNumber + ". " + currentQuestion.question;

  /*Gets 'answers' for the currentQuestion from the answerData*/ 
  currentQuestion.answers.forEach(answer => { //forEach runs the script for each answer in the answersData for that question
    const button = document.createElement("button"); //creates an answerButton for each answer in the answerData
    button.innerText = answer.text; //displays the 'text' from the answers for that question
    button.classList.add("button"); //adds the class "button" to the button for CSS
    answerData.appendChild(button); // Adds another button for each answer in sequence
    button.addEventListener("click", selectAnswer);//Adds an event listener to each button which calls the selectAnswer function
  })

}

/*Resets the page with initial displayQuestion data*/
function resetState() {
  nextButton.style.display = "none"; // Next button not visible before question answered
  changeAnswerButton.style.display = "none"; //set button to not visible until an answer has been selected
  while(answerData.firstChild) { // Checks if there are firstChild nodes present in the answerData 
    answerData.removeChild(answerData.firstChild); //Removes previous answer button firstChild nodes
  }
  //gets the currentScore from the DOM and resets it to 0
  let currentScore = document.getElementById("chosen-answer-score"); //gets the currentScore from the DOM
    currentScore.innerHTML = [0, 0, 0, 0, 0, 0];
}


/*identifies answerScore array for the selected answer and disables other answers.*/
function selectAnswer(e) {
  const chosenAnswer = e.target; //Specifically targetting the answer button (e) that has been chosen to pass the subsequent code
  chosenAnswer.classList.add("chosen-answer"); //Adds class of 'chosen-answer' to the selected answer button
  console.log(chosenAnswer.innerText); //testing that this is the expected data
 
  // iterates through all answers in the questions dataset to find the matching answer and answerScore
  questions[currentQuestionIndex].answers.forEach(answer => { //checks each answer for the current question
    if (chosenAnswer.innerText === answer.text) {
      console.log(answer.answerScore); //used to check expected score from answerData
    let chosenAnswerScore = answer.answerScore; //declares the answerScore for the matching answer as the chosenAnswerScore
    let currentScore = document.getElementById("chosen-answer-score");
    currentScore.innerHTML = chosenAnswerScore;
    }
  });
  // disables all answer buttons so can't select any others 
  Array.from(answerData.children).forEach(button => { //gets all the answerData Child nodes
      button.disabled = true; //sets them to disabled
  });
  // makes hover function invisible to user
  Array.from(answerData.children).forEach(button => {
      button.classList.add("nohvr"); //nohvr class added to each button so that hover effect is invisible to user
      chosenAnswer.classList.remove("nohvr"); // removed from chosen answer to maintain original CSS
  });
  // makes change answer button visible and changes styling
  changeAnswerButton.style.display = "block";
  changeAnswerButton.classList.add("button");
  changeAnswerButton.addEventListener("click", changeAnswer);

  nextButton.style.display = "block"; //displays next button when an answer is selected
  nextButton.classList.add("button"); 
  nextButton.addEventListener("click", handleNextButton);
  
};


/* Enables the user to change their mind and select a different answer.*/
function changeAnswer() {
  Array.from(answerData.children).forEach(button => {
    button.disabled = false;
  })
  
  displayQuestion(); // runs the displayQuestion function with refreshed questionData and answerData 
};



/**Gets currentScore data and adds the current answer score to each character score*/
function addScore() {

  let currentScore = Array.from(document.getElementById("chosen-answer-score").innerHTML).map(Number);
  console.log(currentScore);

  let chosenAnswerScore = currentScore.filter(function (value) {
  return !Number.isNaN(value);
  });
  console.log(chosenAnswerScore)

  let aliceScore = parseInt(document.getElementById("alice-score").innerText);
  document.getElementById("alice-score").innerText = (aliceScore) + (chosenAnswerScore[0]);
  console.log(aliceScore);
      
  let madHatterScore = parseInt(document.getElementById("mad-hatter-score").innerText);
  document.getElementById("mad-hatter-score").innerText = madHatterScore + chosenAnswerScore[1];
  console.log(madHatterScore);
      
  let whiteRabbitScore = parseInt(document.getElementById("white-rabbit-score").innerText);
  document.getElementById("white-rabbit-score").innerText = whiteRabbitScore + chosenAnswerScore[2];
  console.log(whiteRabbitScore);
      
  let cheshireCatScore = parseInt(document.getElementById("cheshire-cat-score").innerText);
  document.getElementById("cheshire-cat-score").innerText = cheshireCatScore + chosenAnswerScore[3];
  console.log(cheshireCatScore);
      
  let blueCaterpillarScore = parseInt(document.getElementById("blue-caterpillar-score").innerText);
  document.getElementById("blue-caterpillar-score").innerText = blueCaterpillarScore + chosenAnswerScore[4];
  console.log(blueCaterpillarScore);
      
  let queenOfHeartsScore = parseInt(document.getElementById("queen-of-hearts-score").innerText);
  document.getElementById("queen-of-hearts-score").innerText = queenOfHeartsScore + chosenAnswerScore[5];
  console.log(queenOfHeartsScore);
};

/**code and functions to call when next button 'click' event listener triggered*/
function handleNextButton() {
  addScore();
  if(currentQuestionIndex <= 8){//if current question index is 0-8(Q9)
    currentQuestionIndex++;//adds 1 to the current index
    displayQuestion();//calls the displayQuestion function
  } else if (currentQuestionIndex == 9) {//if current question is Q10
    displayResults();//calls displayResults function
    console.log("have added q10 scores");// to test that last scores have been added
  }
};

startQuiz(); //calls the startQuiz function to run the initialisation data and display the relevant questionData


// RESULTS FUNCTIONS // ---------------------------

/**calls functions to replace quiz content html with results content */
function displayResults() {
  quizBox.style.display = "none";
  resultsSection.style.display = "block";
  getFinalScores();
}
/**gets data from the DOM to create an array of final scores for all characters */
function getFinalScores() {
  //gets an array of all paragraphs with class "character-score"
  let characterScores = Array.from(document.getElementsByClassName("character-score"));
  let finalScoreArray = [];//sets up array to hold the final scores

  for (let i=0; i < characterScores.length; i++) {//loops through each paragraph one by one
    finalScoreArray.push(characterScores[i].innerText);//adds the innerText of each to the array
  }
  
  for (let i=0; i < finalScoreArray.length; i++) {//loops through each item in the array
    let arrayItem = parseInt(finalScoreArray[i]);//changes each item from a string to an integer 
    finalCharacterScores.push(arrayItem);//adds each integer to the finalCharacterScores array
  }
  console.log("These are the final scores", finalCharacterScores); //to check output is as expected

  findTopScores(); //calls findTopScores function
};

/**Sorts finalCharacterScores array in descending order and compares index[0] with characterArray index*/
function findTopScores() {

  //creates a separate temporary array to ensure original finalCharacterScores maintains correct order 
  let finalScoreArray = finalCharacterScores.map(Number);

  //sorting code adapted from W3Schools Tutorial(https://www.w3schools.com/js/js_array_sort.asp) - CREDIT
  //sorts finalCharacterScores in decending order - index [0] is highest score
  let sortedCharacterScores = finalScoreArray.sort(function(a, b){return b - a});

  //finds the corresponding index of sortedCharacterScores[0] in the original finalCharacterScore array
  let topScoreIndex = finalCharacterScores.indexOf(sortedCharacterScores[0]);
  
  console.log("These are the sorted final scores", sortedCharacterScores);
  console.log("Index of top score", topScoreIndex);
  console.log("This is the top score", finalCharacterScores[topScoreIndex]);

  // finds the topScoreCharacter by matching characterArray index to topScoreIndex 
  let topScoreCharacter = characterArray[topScoreIndex];
  console.log("This is the top character", topScoreCharacter);
  //finds the corresponding index of sortedCharacterScores[1] in the original finalCharacterScore array
  let secondScoreIndex = finalCharacterScores.indexOf(sortedCharacterScores[1]);

  console.log("Index of second highest score", secondScoreIndex);
  console.log("This is the second score", finalCharacterScores[secondScoreIndex]);

  // finds the secondScoreCharacter by matching characterArray index to secondScoreIndex 
  let secondScoreCharacter = characterArray[secondScoreIndex];
  console.log("This is the second character", secondScoreCharacter);  
  // gets the results-summary text from html DOM 
  let resultSummary = document.getElementById("results-summary");
  //finds difference between two highest scores to define which summary sentance to use
  let scoreDifference = (finalCharacterScores[topScoreIndex]) - (finalCharacterScores[secondScoreIndex]);
  console.log(scoreDifference);
  console.log(resultSummary.innerText);
  // re-writes the innerText of the results-summary according to the scoreDifference
  if (scoreDifference === 0) {
    resultSummary.innerText = (`Wow, you appear to have a bit of a split personality! You are 50% ${topScoreCharacter} and 50% ${secondScoreCharacter}.`); 
  } else if (scoreDifference <= 2) {
    resultSummary.innerText = (`Just a couple of points in it! You are more like ${topScoreCharacter}, but you have a fair amount of ${secondScoreCharacter} too.`);
  } else if (scoreDifference > 2 && scoreDifference < 6) {
    resultSummary.innerText = (`You are most like ${topScoreCharacter}, but you have a generous dose of ${secondScoreCharacter} to provide balance.`)
  } else {
    resultSummary.innerText = (`You are pretty much ${topScoreCharacter} through and through, with a bit of ${secondScoreCharacter} for good measure`);
  }
  resultSummary.innerText = (`You are most like ${topScoreCharacter} but with a healthy dose of ${secondScoreCharacter} too.`);
}

function displaySummary() {
  
  
  
}

// function displayTopResult() {

// };

// function displaySecondResult() {
  
// };


  
  // questionData.innerHTML = `Wow, you are one mixed up individual! Your main personality is ${topScoreName}, with a generous dose of ${secondScoreName} too.`;







