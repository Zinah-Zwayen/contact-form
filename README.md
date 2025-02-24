## Overview

This project is a responsive contact form built using HTML, CSS, Bootstrap, and JavaScript. The form allows users to enter their details, select a query type, provide a message, and submit their request. It also includes form validation and a success message upon successful submission.

## Features

- Responsive design using Bootstrap and custom CSS.

- Form validation to ensure all required fields are completed correctly.

- Query type selection with interactive background color change.

- Success message display upon form submission.

- Error handling for invalid inputs.

- Uses Google Fonts (Karla) for styling.

## Technologies Used

- HTML5 for structure

- CSS3 for styling

- Bootstrap 5.3.3 for responsiveness and form elements

- JavaScript for validation and interactivity

## Installation & Usage

- Clone the repository:

git clone https://github.com/zinah-zwayen/contact-form.git

- Navigate to the project directory and open index.html in a browser.

- Ensure Bootstrap and external resources load properly.

## Form Validation Details

# The JavaScript file (main.js) contains validation for:

- First Name & Last Name (Cannot be empty)

- Email Address (Must be in a valid format)

- Query Type Selection (Must select an option)

- Message Field (Cannot be empty)

- Checkbox Consent (Must be checked)

- If all fields are valid, a success message is displayed and the form resets.

## Responsive Design

- A media query ensures proper display for screens ranging from 370px to 700px, adjusting form width and button sizes accordingly.
