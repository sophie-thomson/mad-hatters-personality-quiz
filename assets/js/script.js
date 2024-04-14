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
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const questions = [
    {
        question: "Question 1",
        answers: [
            { text: "Answer 1", value: character},
            { text: "Answer 2", value: character},
            { text: "Answer 3", value: character},
            { text: "Answer 4", value: character},
            { text: "Answer 5", value: character},
            { text: "Answer 6", value: character},
        ]
    }
]