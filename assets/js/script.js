// Code from StackOverflow (https://stackoverflow.com/questions/69743873/continuous-rainbow-color-cycling-effect-in-js) was adapted to create this colour changing effect on main heading element.
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
  }, 1000);

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
        question: "Question 1 text",
        answers: [
            { text: "Answer 1 text", value: "characterValue"},
            { text: "Answer 2 text", value: "characterValue"},
            { text: "Answer 3 text", value: "characterValue"},
            { text: "Answer 4 text", value: "characterValue"},
            { text: "Answer 5 text", value: "characterValue"},
            { text: "Answer 6 text", value: "characterValue"},
        ]
    },
    // Question 2 (index [1])
    { 
      question: "Question 2 text",
      answers: [
          { text: "Answer 1 text", value: "characterValue"},
          { text: "Answer 2 text", value: "characterValue"},
          { text: "Answer 3 text", value: "characterValue"},
          { text: "Answer 4 text", value: "characterValue"},
          { text: "Answer 5 text", value: "characterValue"},
          { text: "Answer 6 text", value: "characterValue"},
      ]
    },
    // Question 3 (index [2])
    { 
    question: "Question 3 text",
    answers: [
        { text: "Answer 1 text", value: "characterValue"},
        { text: "Answer 2 text", value: "characterValue"},
        { text: "Answer 3 text", value: "characterValue"},
        { text: "Answer 4 text", value: "characterValue"},
        { text: "Answer 5 text", value: "characterValue"},
        { text: "Answer 6 text", value: "characterValue"},
    ]
  },
  // Question 4 (index [3])
  { 
  question: "Question 4 text",
  answers: [
      { text: "Answer 1 text", value: "characterValue"},
      { text: "Answer 2 text", value: "characterValue"},
      { text: "Answer 3 text", value: "characterValue"},
      { text: "Answer 4 text", value: "characterValue"},
      { text: "Answer 5 text", value: "characterValue"},
      { text: "Answer 6 text", value: "characterValue"},
  ]
  },
  // Question 5 (index [4])
  { 
  question: "Question 5 text",
  answers: [
      { text: "Answer 1 text", value: "characterValue"},
      { text: "Answer 2 text", value: "characterValue"},
      { text: "Answer 3 text", value: "characterValue"},
      { text: "Answer 4 text", value: "characterValue"},
      { text: "Answer 5 text", value: "characterValue"},
      { text: "Answer 6 text", value: "characterValue"},
  ]
  },
  // Question 6 (index [5])
  { 
  question: "Question 6 text",
  answers: [
      { text: "Answer 1 text", value: "characterValue"},
      { text: "Answer 2 text", value: "characterValue"},
      { text: "Answer 3 text", value: "characterValue"},
      { text: "Answer 4 text", value: "characterValue"},
      { text: "Answer 5 text", value: "characterValue"},
      { text: "Answer 6 text", value: "characterValue"},
  ]
  },
  // Question 7 (index [6])
  { 
  question: "Question 7 text",
  answers: [
      { text: "Answer 1 text", value: "characterValue"},
      { text: "Answer 2 text", value: "characterValue"},
      { text: "Answer 3 text", value: "characterValue"},
      { text: "Answer 4 text", value: "characterValue"},
      { text: "Answer 5 text", value: "characterValue"},
      { text: "Answer 6 text", value: "characterValue"},
  ]
  },
  // Question 8 (index [7])
  { 
  question: "Question 8 text",
  answers: [
      { text: "Answer 1 text", value: "characterValue"},
      { text: "Answer 2 text", value: "characterValue"},
      { text: "Answer 3 text", value: "characterValue"},
      { text: "Answer 4 text", value: "characterValue"},
      { text: "Answer 5 text", value: "characterValue"},
      { text: "Answer 6 text", value: "characterValue"},
  ]
  },
  // Question 9 (index [8])
  { 
  question: "Question 9 text",
  answers: [
      { text: "Answer 1 text", value: "characterValue"},
      { text: "Answer 2 text", value: "characterValue"},
      { text: "Answer 3 text", value: "characterValue"},
      { text: "Answer 4 text", value: "characterValue"},
      { text: "Answer 5 text", value: "characterValue"},
      { text: "Answer 6 text", value: "characterValue"},
  ]
  },
  // Question 10 (index [9])
  { 
  question: "Question 10 text",
  answers: [
      { text: "Answer 1 text", value: "characterValue"},
      { text: "Answer 2 text", value: "characterValue"},
      { text: "Answer 3 text", value: "characterValue"},
      { text: "Answer 4 text", value: "characterValue"},
      { text: "Answer 5 text", value: "characterValue"},
      { text: "Answer 6 text", value: "characterValue"},
  ]
  }
];

// Get the question elements from the DOM by Id "question" and "answers" and "next button"
let questionData = document.getElementById("question");
let answersData = document.getElementById("answers");
let nextButton = document.getElementById("next-button");