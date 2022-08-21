const form = document.querySelector(".js-signup__form");
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

// stop form from submitting on button click and enter key
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

form.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        submitButton.click();
    }
});

// when page is loaded/reloaded clear input fields
window.onload = () => {
    document.querySelector(".js-first-name").value = "";
    document.querySelector(".js-last-name").value = "";
    document.querySelector(".js-password").value = "";
    document.querySelector(".js-email").value = "";
};

// event listeners for enter key and button
form.addEventListener("submit", validateInput);

// check for empty first name, last name, and password
function validateInput() {
    // check for empty first name
    const firstName = document.querySelector(".js-first-name");
    
    if (firstName.value === "") {
        document.querySelector(".js-fn-error-icon").style.display = "block";
        document.querySelector(".js-fn-error-text").style.display = "block";
        firstName.style.border = "2px solid hsl(0, 100%, 74%)";
        firstName.placeholder = "";
    } else {
        document.querySelector(".js-fn-error-icon").style.display = "none";
        document.querySelector(".js-fn-error-text").style.display = "none";
        firstName.style.border = "1px solid hsl(246, 25%, 77%)";
    }
    
    // check for empty last name
    const lastName = document.querySelector(".js-last-name");
    
    if (lastName.value === "") {
        document.querySelector(".js-ln-error-icon").style.display = "block";
        document.querySelector(".js-ln-error-text").style.display = "block";
        lastName.style.border = "2px solid hsl(0, 100%, 74%)";
        lastName.placeholder = "";
    } else {
        document.querySelector(".js-ln-error-icon").style.display = "none";
        document.querySelector(".js-ln-error-text").style.display = "none";
        lastName.style.border = "1px solid hsl(246, 25%, 77%)";
    }
    
    // check for empty last name
    const password = document.querySelector(".js-password");
    
    if (password.value === "") {
        document.querySelector(".js-pw-error-icon").style.display = "block";
        document.querySelector(".js-pw-error-text").style.display = "block";
        password.style.border = "2px solid hsl(0, 100%, 74%)";
        password.placeholder = "";
    } else {
        document.querySelector(".js-pw-error-icon").style.display = "none";
        document.querySelector(".js-pw-error-text").style.display = "none";
        password.style.border = "1px solid hsl(246, 25%, 77%)";
    }
    
    // check for valid email address
    const email = document.querySelector(".js-email");
    const isValidEmail = emailRegex.test(email.value);
    
    if (email.value === "") {
        document.querySelector(".js-email-error-icon").style.display = "block";
        document.querySelector(".js-email-empty-text").style.display = "block";
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        email.placeholder = "";
    } else if (isValidEmail == false) {
        document.querySelector(".js-email-empty-text").style.display = "none";
        document.querySelector(".js-email-error-icon").style.display = "block";
        document.querySelector(".js-email-error-text").style.display = "block"; 
        document.querySelector(".js-email").style.color = "hsl(0, 100%, 74%)";
        email.style.border = "2px solid hsl(0, 100%, 74%)";
    } else {
        document.querySelector(".js-email-error-icon").style.display = "none";
        document.querySelector(".js-email-error-text").style.display = "none"; 
        document.querySelector(".js-email").style.color = "hsl(249, 10%, 26%)";
        email.style.border = "1px solid hsl(246, 25%, 77%)";
    }
    
    // if (isValidEmail == false) {
    //     document.querySelector(".js-email-error-icon").style.display = "block";
    //     document.querySelector(".js-email-error-text").style.display = "block"; 
    //     document.querySelector(".js-email").style.color = "hsl(0, 100%, 74%)";
    //     email.style.border = "2px solid hsl(0, 100%, 74%)";
    // } else {
    //     document.querySelector(".js-email-error-icon").style.display = "none";
    //     document.querySelector(".js-email-error-text").style.display = "none"; 
    //     document.querySelector(".js-email").style.color = "hsl(249, 10%, 26%)";
    //     email.style.border = "1px solid hsl(246, 25%, 77%)";
    // }
    
};