const header = document.querySelector(".header");
const navbar = document.querySelector(".header-nav");
const main = document.querySelector(".main");
const signUp = document.querySelector(".sign-up-modal");
const signIn = document.querySelector(".sign-in-modal");
const form = document.querySelector(".form");
const formIn = document.querySelector(".form-in");
const formInputPass = document.querySelector(".form-pass");
const formInputPassIn = document.querySelector(".form-pass-in");
const formInputEmail = document.querySelector(".form-input");
const formInputEmailIn = document.querySelector(".form-input-in");


header.addEventListener("click", evt =>{
    if(evt.target.matches(".toggle")){
        navbar.classList.add('show');
        main.style.opacity = "0";
    }
    if(evt.target.matches(".header-nav-item")){
        navbar.classList.remove("show");
        main.style.opacity = "1";
    }
    if(evt.target.matches(".close")){
        navbar.classList.remove("show");
        main.style.opacity = "1";
    }
    if(evt.target.matches(".header-login-sign-up") || evt.target.matches(".sign")){
        signIn.classList.add("display-none");
        signUp.classList.remove("display-none");
        formInputPass.value = null;
        formInputEmail.value = null;
    }
    if(evt.target.matches(".header-login-sign-in") || evt.target.matches(".enter")){
        signUp.classList.add("display-none");
        signIn.classList.remove("display-none");
        formInputPassIn.value = null;
        formInputEmailIn.value = null;
    }
});

main.addEventListener("click", evt =>{
    if(evt.target.matches(".close-sign-up")){
        signUp.classList.add("display-none");
    }
    if(evt.target.matches(".close-sign-in")){
        signIn.classList.add("display-none");
    }
    if(evt.target.matches(".type-text")){
        eye.classList.remove("type-text");
        eyeSlash.classList.add("type-password");
        formInputPass.setAttribute("type", "text");
    }
    if(evt.target.matches(".type-password")){
        eye.classList.add("type-text");
        eyeSlash.classList.remove("type-password");
        formInputPass.setAttribute("type", "password");
    }
    if(evt.target.matches(".type-text-in")){
        textIn.classList.remove("type-text-in");
        passwordIn.classList.add("type-password-in");
        formInputPassIn.setAttribute("type", "text");
    }
    if(evt.target.matches(".type-password-in")){
        textIn.classList.add("type-text-in");
        passwordIn.classList.remove("type-password-in");
        formInputPassIn.setAttribute("type", "password");
    }
});

form.addEventListener("submit", e =>{
    e.preventDefault();
    const userEmail = formInputEmail.value.trim();
    const userPass = formInputPass.value.trim();

    alert(`Email: ${userEmail}
Password: ${userPass}`);
    formInputEmail.value = null;
    formInputPass.value = null;
})

formIn.addEventListener("submit", e =>{
    e.preventDefault();
    const userEmail = formInputEmailIn.value.trim();
    const userPass = formInputPassIn.value.trim();

    alert(`Email: ${userEmail}
Password: ${userPass}`);
    formInputEmailIn.value = null;
    formInputPassIn.value = null;
})