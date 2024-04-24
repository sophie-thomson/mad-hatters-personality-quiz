// COLOUR-CHANGING HEADING

// Code from StackOverflow (https://stackoverflow.com/questions/69743873/continuous-rainbow-color-cycling-effect-in-js) CREDIT 
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
