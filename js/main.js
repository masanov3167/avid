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
const signList = document.querySelector(".sign-list");
const fragment = document.createDocumentFragment();
const coursesTemplate = document.querySelector(".courses-template").content;
const list = document.querySelector(".list");


header.addEventListener("click", evt =>{
    if(evt.target.matches(".toggle")){
        navbar.classList.add('show');
        signIn.classList.remove("sign-show");
        signUp.classList.remove("sign-show");
        document.querySelector(".hero-down").style.opacity = "0"
    }
    if(evt.target.matches(".header-nav-item")){
        navbar.classList.remove("show");
        document.querySelector(".hero-down").style.opacity = "1";
    }
    if(evt.target.matches(".close")){
        navbar.classList.remove("show");
        document.querySelector(".hero-down").style.opacity = "1";
        signList.classList.add("display-none");
    }
    if(evt.target.matches(".header-login-sign-up") || evt.target.matches(".sign")){
        signIn.classList.remove("sign-show");
        signUp.classList.add("sign-show");
        signList.classList.remove("display-none");
        formInputPass.value = null;
        formInputEmail.value = null;
    }
    if(evt.target.matches(".header-login-sign-in") || evt.target.matches(".enter")){
        signUp.classList.remove("sign-show");
        signIn.classList.add("sign-show");
        signList.classList.remove("display-none");
        formInputPassIn.value = null;
        formInputEmailIn.value = null;
    }
    if(evt.target.matches(".main-menu")){
        getCourses();
    }
});

signList.addEventListener("click", evt =>{
    if(evt.target.matches(".close-sign-up")){
        signUp.classList.remove("sign-show");
        signList.classList.add("display-none");
    }
    if(evt.target.matches(".close-sign-in")){
        signIn.classList.remove("sign-show");
        signList.classList.add("display-none");
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
    signList.classList.add("display-none");
    signUp.classList.remove("sign-show");
})

formIn.addEventListener("submit", e =>{
    e.preventDefault();
    const userEmail = formInputEmailIn.value.trim();
    const userPass = formInputPassIn.value.trim();

    alert(`Email: ${userEmail}
Password: ${userPass}`);
    formInputEmailIn.value = null;
    formInputPassIn.value = null;
    signList.classList.add("display-none");
    signIn.classList.remove("sign-show");
});

async function getCourses(){

    const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=16bebfc50341cc543211465e5af7fc48");
    const data = await res.json();
    let h = data.results;
    console.log(h);
    renderCourses(h, list)
}
// getCourses();

function renderCourses(arr, node){
    node.innerHTML = null;
    document.querySelector(".hero").style.opacity = "0";

    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.innerHTML = `<span>{</span><span>}</span>`;
    list.appendChild(loader);
   
    setTimeout(() =>{
        node.innerHTML = "";

        arr.forEach(a =>{
            const cloned = coursesTemplate.cloneNode(true);
    
            cloned.querySelector(".list-item-img").src = `https://image.tmdb.org/t/p/w500${a?.poster_path}`;
            cloned.querySelector(".body-title").textContent = a?.title;
            cloned.querySelector(".body-title").id = a?.id;
            cloned.querySelector(".body-info").textContent = a?.overview.substr(0,80);
    
            fragment.appendChild(cloned);
        });
        node.appendChild(fragment);
        document.querySelector(".hero").style.opacity = "1";
    }, 1400);
}