const form = document.querySelector(".js-signup__form");
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

// stop form from submitting
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

// check for empty first name, last name, and password
form.addEventListener("submit", () => {
    const firstName = document.querySelector(".js-first-name");
    if (firstName.value === "") {
        document.querySelector(".js-fn-error-icon").style.display = "block";
        document.querySelector(".js-fn-error-text").style.display = "block";
    }
    
    const lastName = document.querySelector(".js-last-name");
    if (lastName.value === "") {
        document.querySelector(".js-ln-error-icon").style.display = "block";
        document.querySelector(".js-ln-error-text").style.display = "block";
    }
    
    const password = document.querySelector(".js-password");
    if (password.value === "") {
        document.querySelector(".js-pw-error-icon").style.display = "block";
        document.querySelector(".js-pw-error-text").style.display = "block";
    }
});

// check for valid email address
form.addEventListener("submit", () => {
    const email = document.querySelector(".js-email");
    const isValidEmail = emailRegex.test(email.value);

    if (isValidEmail == false) {
        document.querySelector(".js-email-error-icon").style.display = "block";
        document.querySelector(".js-email-error-text").style.display = "block";
    }

})