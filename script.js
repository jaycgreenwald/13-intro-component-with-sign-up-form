// console.log("Start");
const form = document.querySelector(".js-signup__form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("What is going on?!");
});

// check for empty first name, last name, and password
form.addEventListener("submit", () => {
    const firstName = document.querySelector(".js-first-name");
    if (firstName.value === "") {
        document.querySelector(".js-fn-error-icon").style.display = "block";
        document.querySelector(".js-fn-error-text").style.display = "block";
    }
    
    const lastName = document.querySelector("#lastname");
    if (lastName.value === "") {
        document.querySelector(".js-ln-error-icon").style.display = "block";
        document.querySelector(".js-ln-error-text").style.display = "block";
    }
    
    const password = document.querySelector("#password");
    if (password.value === "") {
        document.querySelector(".js-pw-error-icon").style.display = "block";
        document.querySelector(".js-pw-error-text").style.display = "block";
    }
});

// check for valid password
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

form.addEventListener("submit", () => {
    // const inputEmail = document.querySelector("js-email").value;
    // const isValidEmail = emailRegex.test(inputEmail);
});