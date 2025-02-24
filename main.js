let radio1 = document.getElementById("inlineRadio1");
let radio2 = document.getElementById("inlineRadio2");
let queryType1 = document.getElementById("query-type1");
let queryType2 = document.getElementById("query-type2");

// Function to change the background color of the parent div
function changeBackgroundColor() {
  // When first radio button is clicked
  radio1.addEventListener('change', function () {
    if (radio1.checked) {
      queryType1.style.backgroundColor = " hsl(148, 38%, 91%)";  // Change background of the first radio button's parent div
      queryType2.style.backgroundColor = "";  // Reset the second radio button's parent div
      queryType1.style.border = "2px solid hsl(169, 82%, 27%)";
      queryType2.style.border = "none";
    }   
  });

  // When second radio button is clicked
  radio2.addEventListener('change', function () {
    if (radio2.checked) {
      queryType2.style.backgroundColor = " hsl(148, 38%, 91%)";  // Change background of the second radio button's parent div
      queryType1.style.backgroundColor = "";  // Reset the first radio button's parent div
      queryType2.style.border = "2px solid hsl(169, 82%, 27%)";
      queryType1.style.border = "none";
    }
  });
}

// Initialize the function
changeBackgroundColor();

//////////////////////////////////////////////////////////////

// Form validation
document.getElementById('btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form from submitting automatically

  let firstName = document.getElementById('validationServer01');
  let lastName = document.getElementById('validationServer02');
  let email = document.getElementById('Email');
  let radioButtons = document.getElementsByName('inlineRadioOptions'); // Radio buttons
  let radioError = document.getElementById('radioError'); // Error message div
  let message = document.getElementById('validationTextarea'); // Textarea field
  let messageError = message.nextElementSibling; // The invalid-feedback div
  let checkbox = document.getElementById('flexCheckDefault'); // Checkbox
  let checkboxError = checkbox.nextElementSibling.nextElementSibling; // The invalid-feedback div for checkbox
  let successMessage = document.querySelector('.successMessage');// The success message

  let isRadioSelected = false; // Track radio button selection
  let isValid = true; // To track if the form is valid

  // First Name Validation
  if (firstName.value.trim() === '') {
    firstName.classList.add('is-invalid'); // Show Bootstrap invalid styling
    isValid = false;
  } else {
    firstName.classList.remove('is-invalid');
    firstName.classList.add('is-valid'); // Optional: Show valid state
  }

  // Last Name Validation
  if (lastName.value.trim() === '') {
    lastName.classList.add('is-invalid');
    isValid = false;
  } else {
    lastName.classList.remove('is-invalid');
    lastName.classList.add('is-valid');
  }

  // Email Validation (Checking Empty + Correct Format)
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple Email Regex
  if (email.value.trim() === '' || !emailPattern.test(email.value.trim())) {
    email.classList.add('is-invalid');
    isValid = false;
  } else {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
  }

  // Radio Button Validation (Checking if at least one is selected)
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isRadioSelected = true;
      break;
    }
  }
  if (!isRadioSelected) {
    radioError.style.display = 'block';
    isValid = false;
  } else{
    radioError.style.display = 'none';
  }

  // Textarea (Message) Validation
  if (message.value.trim() === '') {
    message.classList.add('is-invalid');
    messageError.style.display = 'block'; // Show error message
    isValid = false;
  } else {
    message.classList.remove('is-invalid');
    message.classList.add('is-valid');
    messageError.style.display = 'none'; // Hide error message
  }

  // Checkbox Validation (Check if the checkbox is checked)
  if (!checkbox.checked) {
    checkboxError.style.display = 'block'; // Show error message
    isValid = false;
  } else {
    checkboxError.style.display = 'none'; // Hide error message
  }

  // If everything is valid, show success message
if (isValid) { 
  successMessage.style.display = 'block'; // Show the success message
  
  // Optionally, reset the form
  document.querySelector('form').reset();

  // Remove validation styles after success
  firstName.classList.remove('is-valid', 'is-invalid');
  lastName.classList.remove('is-valid', 'is-invalid');
  email.classList.remove('is-valid', 'is-invalid');
  message.classList.remove('is-valid', 'is-invalid');

  // Hide error messages
  radioError.style.display = 'none';
  messageError.style.display = 'none';
  checkboxError.style.display = 'none';
  
  // Hide success message after a few seconds (optional)
  setTimeout(() => {
      successMessage.style.display = 'none';
  }, 3000);
} else {
  successMessage.style.display = 'none';
}

});

