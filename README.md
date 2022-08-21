# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://jaycgreenwald.github.io/13-intro-component-with-sign-up-form/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

Questions
 - I split the javascript variables/error variables into a partial - felt useful - is it okay?
 - It bugs me that when the 2px border is applied to the error fields, the form changes ever so slightly in size. I tried using outline instead of border, but I couldn't quite pull it off. I suspect I could have manipulated the padding via JavaScript but I was worried that was overkill. Suggestions?
 - How could I improve my javascript? syntax/formatting?

During this project, I became more comfortable using arrow notation in JavaScript. There was very little new learning, but this project reinforced previous work validating input fields. I feel much more confident with this process as a result.

One function that I added to this project (that I had previously not included) was code to empty out the input fields when the page is reloaded.

```js
window.onload = () => {
    document.querySelector(".js-first-name").value = "";
    document.querySelector(".js-last-name").value = "";
    document.querySelector(".js-password").value = "";
    document.querySelector(".js-email").value = "";
};
```


### Continued development

I plan to keep learning more JavaScript.


### Useful resources


## Author

- Website - [jaycgreenwald at GitHub](https://github.com/jaycgreenwald)
- Frontend Mentor - [@jaycgreenwald](https://www.frontendmentor.io/profile/jaycgreenwald)
- Twitter - [@jaycgreenwald](https://www.twitter.com/jaycgreenwald)

