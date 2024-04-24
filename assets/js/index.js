// WELCOME PAGE MODAL

  //  Code adapted using W3schools tutorial to create a basic modal https://www.w3schools.com/howto/howto_css_modals.asp - CREDIT

  const instructionsModal = document.getElementById("instructions-modal");
  const instructionsButton = document.getElementById("instructions-button");
  console.log(instructionsButton.innerText);
  
  instructionsButton.addEventListener("click", displayModal);
  let span = document.getElementsByClassName("close")[0];
  
  // // When the user clicks the button, display the modal 
  
  function displayModal() {
    instructionsModal.style.display = "block";
  };
  
  // // When the user clicks on <span> (x), close the modal
  span.onclick = function(_close) {
    instructionsModal.style.display = "none";
  };
  
  // // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == instructionsModal) {
      instructionsModal.style.display = "none";
    }
  };
  