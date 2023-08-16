// Replace this with your code

//*Get references to the relevant elements
const closeFormButton = document.querySelector('#close-form')//id="close-form"
const formContents = document.querySelector('.form') //class="form"

//Add event listener for 'click' event
closeFormButton.addEventListener('click', () =>{
    //toggle the 'hide' class on the formContents element
    formContents.classList.toggle('hide');

    //Update the button text from 'X' to '+'
    if(closeFormButton.textContent === 'X'){
        closeFormButton.textContent = '+'
    } else {
        closeFormButton.textContent = 'X'
    }
})





//Get references to the relevant elements
const submit = document.querySelector('#sign-up')//button id="sign-up"
const nameInput = document.querySelector('#name')//input id="name"
const emailInput = document.querySelector('#email')//input id="email"
const form = document.querySelector('.form')//form class="form"
const formParent = form.parentElement//div class="form-container"

//Add event listener for 'submit' event
form.addEventListener('submit', (event) =>{
    event.preventDefault();// Prevent the default form submission behavior

    //reset border styles
    nameInput.style.border = 'none'
    emailInput.style.border = 'none'

    //get input values
    const nameValue = nameInput.value.trim()
    const emailValue = emailInput.value.trim()

    //validate the email and name
    if (!nameValue && !emailValue) {
        nameInput.style.border = '2px solid red'
        emailInput.style.border = '2px solid red'
        alert("You must enter a name and an email address to subscribe!")
    } else if (!nameValue) {
        nameInput.style.border = '2px solid red'
        alert("Please enter a name to subscribe.")
    } else if (!emailValue) {
        emailInput.style.border = '2px solid red'
        alert("Please enter an email address to subscribe.")
    } else {
        //replace form content with thank you message
        formParent.textContent = "Thank you for subscribing!"
    }
})