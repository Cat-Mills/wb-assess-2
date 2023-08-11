// Replace this with your code


const closeForm = document.getElementById('#close-form')
closeForm.addEventListener('click', () =>{
    closeForm.classList.remove("form-container")
    closeForm.classList.toggle("hide")
})
const submit = document.querySelector('.form').addEventListener('submit', (evt) =>{
    evt.preventDefault();
    const name = document.querySelector('#name').value;
    if (name.length <= 0) {
        alert("Please enter a name to subscribe")
    }
    const email = document.querySelector("#email").value
    if (email.length <= 0) {
        alert("Please enter an email address to subscribe.")
    }
    document.querySelector(".sub-intro")
    if (email.length > 0 && name.length > 0){
        alert("Thank you for subscribing!")
    }
})