// Code from StackOverflow (https://stackoverflow.com/questions/69743873/continuous-rainbow-color-cycling-effect-in-js) 
// Adapted to create colour changing effect on main heading element on all pages.
const scheme = document.querySelector("h1");
  const rainbow = [
    "#AB63E0",
    "#C063E0",
    "#D863E0",
    "#E063D1",
    "#E063B8",
    "#E0639E",
    "#E06389",
    "#E0636E",
    "#E06963",
    "#E0636E",
    "#E06389",
    "#E0639E",
    "#E063B8",
    "#E063D1",
    "#D863E0",
    "#C063E0",
    "#AB63E0",
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

//  Code adapted using W3schools tutorial to create a basic modal https://www.w3schools.com/howto/howto_css_modals.asp

let modal = document.getElementById("instructionsModal");
let btn = document.getElementById("instructionsButton");
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Basic format for question & answers structure adapted from tutorial How to Make Quiz App Using JavaScript on GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8)
const questions = [ // Array of of 10 questions with index of 0 (Q1) to 9 (Q10)
    // Question 1 (index [0])
    { 
      question: "First things first - Would you like some tea?",
      answers: [
        { text: "Always!", answerScore: [mh(3), al(2), bc(1)]},
        { text: "Calming Chamomile", answerScore: [al(3), cc(2), wr(1)]},
        { text: "Proper Yorkshire", answerScore: [qh(3), mh(2), wr(1)]},
        { text: "It depends on my mood!", answerScore: [cc(3), qh(2), bc(1)]},
        { text: "Chai, darling", answerScore: [bc(3), cc(2), al(1)]},
        { text: "No thanks, I prefer a coffee!", answerScore: [wr(3), qh(2), bc(1)]},
      ]
    },
    // Question 2 (index [1])
    { 
      question: "Best way to approach a seemingly impossible problem?",
      answers: [
        { text: "Consider it, but if it takes long I'm likely to get distracted", answerScore: [al(3), wr(2), mh(1)]},
        { text: "Find a quick workaround so I can get on with the next thing on my list", answerScore: [wr(3), al(2), qh(1)]},
        { text: "Consider it from another angle… maybe you just need to think outside the box", answerScore: [mh(3), bc(2), cc(1)]},
        { text: "Don't even try. I have better things to do with my time than solve impossible problems.", answerScore: [bc(3), qh(2), wr(1)]},
        { text: "Find someone else to solve it for me!", answerScore: [qh(3), mh(2), cc(1)]},
        { text: "Consider whether it is worth solving or not", answerScore: [cc(3), bc(2), al(1)]},
      ]
    },
    // Question 3 (index [2])
    { 
      question: "Would you rather...",
      answers: [
        { text: "Meditate on a mountain top on a journey of self-discovery", answerScore: [bc(3), al(2), cc(1)]},
        { text: "Get everything done on your 'To Do' list", answerScore: [wr(3), qh(2), al(1)]},
        { text: "Hold the Royal Flush in the ultimate high-stakes game of poker", answerScore: [qh(3), mh(2), cc(1)]},
        { text: "Live a day in the life of someone else of your choosing", answerScore: [cc(3), wr(2), mh(1)]},
        { text: "Host the ultimate party with all your favourite people", answerScore: [mh(3), qh(2), bc(1)]},
        { text: "Curl up with a good book in your favourite nook", answerScore: [al(3), bc(2), wr(1)]},
      ]
    },
    // Question 4 (index [3])
    { 
      question: "What would you do with a mysterious bottle marked 'Drink Me'?",
      answers: [
        { text: "Shake it to see if it's fizzy", answerScore: [mh(3), qh(2), wr(1)]},
        { text: "Pour it away. I don't like following orders", answerScore: [qh(3), bc(2), cc(1)]},
        { text: "Drink it one go and look around for more", answerScore: [bc(3), mh(2), qh(1)]},
        { text: "That all depends on who has given me the bottle...", answerScore: [cc(3), al(2), bc(1)]},
        { text: "Try a tiny sip to see if you like it first", answerScore: [al(3), wr(2), cc(1)]},
        { text: "Give it to someone else and hope it's not poisonous", answerScore: [wr(3), al(2), mh(1)]},
      ]
    },
    // Question 5 (index [4])
    { 
      question: "What would you say is your best feature?",
      answers: [
        { text: "Legs", answerScore: [wr(3), al(2), mh(1)]},
        { text: "Teeth", answerScore: [cc(3), wr(2), al(1)]},
        { text: "Hair", answerScore: [al(3), mh(2), qh(1)]},
        { text: "Voice", answerScore: [qh(3), cc(2), bc(1)]},
        { text: "Brain", answerScore: [bc(3), cc(2), qh(1)]},
        { text: "Nose", answerScore: [mh(3), wr(2), bc(1)]},
      ]
    },
    // Question 6 (index [5])
    { 
      question: "What's the best way to get from A to B?",
      answers: [
        { text: "Faster than everyone else", answerScore: [qh(3), wr(2), mh(1)]},
        { text: "Why would I want to get to B?", answerScore: [bc(3), cc(2), qh(1)]},
        { text: "Follow the path from nowhere to somewhere", answerScore: [cc(3), mh(2), qh(1)]},
        { text: "On foot", answerScore: [wr(3), al(2), cc(1)]},
        { text: "It doesn't matter as long as there is a cafe stop on the way!", answerScore: [mh(3), al(2), bc(1)]},
        { text: "Will I want to come back, or am I only going one way?", answerScore: [al(3), bc(2), wr(1)]},
      ]
    },
    // Question 7 (index [6])
    { 
      question: "In an emergency, some might say you are...?",
      answers: [
        { text: "Cool, calm and collected", answerScore: [cc(3), bc(2), al(1)]},
        { text: "Methodical and perhaps a bit clinical", answerScore: [al(3), cc(2), bc(1)]},
        { text: "About as helpful as a headless chicken", answerScore: [mh(3), wr(2), qh(1)]},
        { text: "The one who takes control (after all, everyone loves a hero)!", answerScore: [qh(3), cc(2), mh(1)]},
        { text: "Quick to respond and enthusiastic - A for effort!", answerScore: [wr(3), mh(2), al(1)]},
        { text: "Too busy doing something else to be much help", answerScore: [bc(3), qh(2), wr(1)]},
      ]
    },
    // Question 8 (index [7])
    { 
      question: "Which is the best Season?",
      answers: [
        { text: "They all have something special to offer.", answerScore: [cc(3), al(2), bc(1)]},
        { text: "The lazy hazy crazy days of Summer", answerScore: [qh(3), bc(2), al(1)]},
        { text: "Winter Wonderland", answerScore: [wr(3), mh(2), cc(1)]},
        { text: "Spring of course, how can I choose any other?", answerScore: [al(3), wr(2), qh(1)]},
        { text: "Autumn is the best for foraging", answerScore: [bc(3), wr(2), mh(1)]},
        { text: "I'm a big fan of jerk seasoning myself", answerScore: [mh(3), qh(2), cc(1)]},
      ]
    },
    // Question 9 (index [8])
    { 
      question: "Favourite Alice in Wonderland Quote?",
      answers: [
        { text: "I can't go back to yesterday because I was a different person then.", answerScore: [al(3), bc(2), mh(1)]},
        { text: "If everybody minded their own business, the world would go around a great deal faster than it does.", answerScore: [wr(3), al(2), bc(1)]},
        { text: "Cat: We're all mad here. I'm mad. You're mad.n\Alice: How do you know I'm mad?\nCat: You must be, or you wouldn't have come here.", answerScore: [cc(3), mh(2), qh(1)]}, 
        { text: "If you drink much from a bottle marked 'poison' it is certain to disagree with you sooner or later.", answerScore: [bc(3), cc(2), qh(1)]},
        { text: "I'm afraid so. You're mad, bonkers, completely off your head. But I'll tell you a secret. All the best people are.", answerScore: [mh(3), cc(2), wr(1)]},
        { text: "It takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!", answerScore: [qh(3), wr(2), al(1)]},
      ]
    },
    // Question 10 (index [9])
    { 
      question: "At the Mad Hatter's Tea Party, you hope there will be…",
      answers: [
        { text: "Wild Mushroom Tarts", answerScore: [bc(3), wr(2), mh(1)]},
        { text: "Tea!", answerScore: [mh(3), al(2), bc(1)]},
        { text: "Scones with Jam & Cream", answerScore: [al(3), qh(2), cc(1)]},
        { text: "Vegan Carrot Cake", answerScore: [wr(3), bc(2), al(1)]},
        { text: "Smoked Salmon and Cucumber Sandwiches", answerScore: [cc(3), mh(2), qh(1)]},
        { text: "Jammy Dodgers", answerScore: [qh(3), cc(2), wr(1)]},
      ]
    }
  ];

// Get the question elements from the DOM by Id "question" and "answers" and "next button"
// const used as these elements won't change 
const questionData = document.getElementById("question");
const answerData = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-button");

// Create index structure for identifying the current question and enabling changes to the next question in sequence
// always starts from q1 (index 0)

let currentQuestionIndex = 0;
// Scores for all characters need to be set at 0 for the start of the quiz
let characterScores = 0 [al, mh, cc, wr, qh, bc]; //????????????????????????????????

// function to start the quiz takes the index of 0 and sets the content of the 'next button'
function startQuiz() {
  currentQuestionIndex = 0;
  characterScores = 0;
  nextButton.innerHTML = "Next Question";
  displayQuestion(); // calling function to to display the question text
};

function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex]; //declares the current question as the question at most recent index used
  let questionNumber = currentQuestionIndex + 1; //gets the question number for the current question and adds 1 because want 'Q1' to show not 'Q0' which is the index
  // Tells html to display question number in front of question text then a "." and then the question text 
  questionData.innerHTML = questionNumber + ". " + currentQuestion.question;

  //gets 'answers' for the currentQuestion from the answerData 
  currentQuestion.answers.forEach(answer => { //forEach runs the script for each answer in the answersData for that question
    const button = document.createElement("button"); //creates an answerButton for each answer in the answerData
    button.innerHTML = answer.text; //displays the 'text' from the answers for that question
    button.classList.add("button"); //adds the class "button" to the button for CSS
    answerData.appendChild(button); // Adds another button for each answer in sequence
  })
}

startQuiz(); //calls the startQuiz function to run the initialisation data and display the relevant questionData