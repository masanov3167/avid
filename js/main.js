const header = document.querySelector(".header");
const navbar = document.querySelector(".header-nav");
const main = document.querySelector(".main");
const signUp = document.querySelector(".form");
const signIn = document.querySelector(".form-in");
const form = document.querySelector(".form");
const supportForm = document.querySelector(".support-form");
const supportName = document.querySelector(".name-input");
const supportEmail = document.querySelector(".email-input");
const supportTextarea = document.querySelector(".problem-textarea");
const formIn = document.querySelector(".form-in");
const formInputPass = document.querySelector(".form-pass");
const formInputPassIn = document.querySelector(".form-pass-in");
const formInputEmail = document.querySelector(".form-input");
const formInputEmailIn = document.querySelector(".form-input-in");
const signList = document.querySelector(".sign-list");
const fragment = document.createDocumentFragment();
const coursesTemplate = document.querySelector(".courses-template").content;
const blogTemplate = document.querySelector(".blog-template").content;
const aboutTemplate = document.querySelector(".about-template").content;
const list = document.querySelector(".list");


header.addEventListener("click", evt =>{
    if(evt.target.matches(".toggle")){
        navbar.classList.add('show');
        signIn.classList.remove("sign-show");
        signUp.classList.remove("sign-show");
        supportForm.classList.remove("sign-show");
        main.style.opacity = "0.3";
        document.querySelector("footer").style.opacity = "0.3";
    }
    if(evt.target.matches(".header-nav-item")){
        navbar.classList.remove("show");
        main.style.opacity = "1";
        document.querySelector("footer").style.opacity = "1";
    }
    if(evt.target.matches(".close")){
        navbar.classList.remove("show");
        main.style.opacity = "1";
        document.querySelector("footer").style.opacity = "1";
        signList.classList.add("display-none");
    }
    if(evt.target.matches(".header-login-sign-up") || evt.target.matches(".sign")){
        signIn.classList.remove("sign-show");
        signUp.classList.add("sign-show");
        supportForm.classList.remove("sign-show");
        signList.classList.remove("display-none");
        formInputPass.value = null;
        formInputEmail.value = null;
    }
    if(evt.target.matches(".header-login-sign-in") || evt.target.matches(".enter")){
        signUp.classList.remove("sign-show");
        signIn.classList.add("sign-show");
        supportForm.classList.remove("sign-show");
        signList.classList.remove("display-none");
        formInputPassIn.value = null;
        formInputEmailIn.value = null;
    }

    if(evt.target.matches(".support-form") || evt.target.matches(".nav-support")){
        signUp.classList.remove("sign-show");
        signIn.classList.remove("sign-show");
        supportForm.classList.add("sign-show");
        signList.classList.remove("display-none");
    }
    if(evt.target.matches(".main-menu")){
        getCourses();
    }
    if(evt.target.matches(".nav-blog")){
        renderBlog(list);
    }
    if(evt.target.matches(".nav-about")){
        renderAbout(list);
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

supportForm.addEventListener("submit", evt =>{
    evt.preventDefault();

    const userName =  supportName.value.trim();
    const userEmail = supportEmail.value.trim();
    const userSms =   supportTextarea.value.trim();

    alert(`Ism: ${userName}, email:${userEmail}, habar:${userSms}`);

    setTimeout(() =>{
        supportName.value = null;
        supportEmail.value = null;
        supportTextarea.value = null;

        signList.classList.add("display-none");
        supportForm.classList.remove("sign-show");
    }, 2300);
})

list.addEventListener("click", evt =>{
   if(evt.target.matches(".body-btn")){
    document.querySelector(".alert-wrapper").classList.remove("display-none");
    document.querySelector(".alert").innerHTML = `Tez kunlarda darslarni joylaymiz <span class="ios">🌚🔥</span>`;
    list.style.opacity = "0.2";
       setTimeout(() =>{
           document.querySelector(".alert-wrapper").classList.add("display-none");
           list.style.opacity = "1";
       }, 1300)
   }
})
async function getCourses(){

    const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=16bebfc50341cc543211465e5af7fc48");
    const data = await res.json();
    let h = data.results;
    console.log(h);
    renderCourses(h, list)
}
// getCourses();

function renderCourses(arr, node){
    document.querySelector(".hero-title").textContent = "Dasturlashga oid onlayn darslar platformasi";
    document.title = "Avid.uz - dasturlashdan bepul kurslar to'plami";
    node.innerHTML = null;
    document.querySelector(".hero").style.opacity = "0";
    document.querySelector(".static").style.opacity = "0";
    document.querySelector("footer").style.opacity = "0";
    signList.classList.add("display-none");
    signIn.classList.remove("sign-show");
    signUp.classList.remove("sign-show");
    supportForm.classList.remove("sign-show");
    list.classList.remove("shadow");

    const loader = document.createElement("div");
    loader.classList.add("loader-wrapper");
    loader.innerHTML = `<div class="loader">
    <span>{</span><span>}</span>
</div>`;
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
        document.querySelector(".static").style.opacity = "1";
        document.querySelector("footer").style.opacity = "1";
        list.classList.add("shadow");
    }, 1500);
}


function renderBlog(node){
    document.querySelector(".hero-title").textContent = "Saytmidagi yangiliklarni va sizlarga beradigan tavsiyalarimizni shu yerdan o'qib borishingiz mumkin";
    document.title = "Avid.uz - qaynoq yangiliklar";
    node.innerHTML = null;
    document.querySelector(".hero").style.opacity = "0";
    document.querySelector(".static").style.opacity = "0";
    document.querySelector("footer").style.opacity = "0";
    signList.classList.add("display-none");
    signIn.classList.remove("sign-show");
    signUp.classList.remove("sign-show");
    supportForm.classList.remove("sign-show");
    list.classList.remove("shadow");

    const loader = document.createElement("div");
    loader.classList.add("loader-wrapper");
    loader.innerHTML = `<div class="loader">
    <span>{</span><span>}</span>
</div>`;
    list.appendChild(loader);
   
    setTimeout(() =>{
        node.innerHTML = "";

     
            const cloned = blogTemplate.cloneNode(true);
    
            fragment.appendChild(cloned);
    
        node.appendChild(fragment);
        document.querySelector(".hero").style.opacity = "1";
        document.querySelector(".static").style.opacity = "1";
        document.querySelector("footer").style.opacity = "1";
        list.classList.add("shadow");
    }, 1500);
}

function renderAbout(node){
    document.querySelector(".hero-title").innerHTML = `Bu yerda biz haqimizda batafsil ma'lumot olishingiz mumkin<span class="ios">☺️</span> `;
    document.title = "Avid.uz - biz haqimizda";
    node.innerHTML = null;
    document.querySelector(".hero").style.opacity = "0";
    document.querySelector(".static").style.opacity = "0";
    document.querySelector("footer").style.opacity = "0";
    signList.classList.add("display-none");
    signIn.classList.remove("sign-show");
    signUp.classList.remove("sign-show");
    supportForm.classList.remove("sign-show");
    list.classList.remove("shadow");

    const loader = document.createElement("div");
    loader.classList.add("loader-wrapper");
    loader.innerHTML = `<div class="loader">
    <span>{</span><span>}</span>
</div>`;
    list.appendChild(loader);
   
    setTimeout(() =>{
        node.innerHTML = "";

     
            const cloned = aboutTemplate.cloneNode(true);
    
            fragment.appendChild(cloned);
    
        node.appendChild(fragment);
        document.querySelector(".hero").style.opacity = "1";
        document.querySelector(".static").style.opacity = "1";
        document.querySelector("footer").style.opacity = "1";
        list.classList.add("shadow");
    }, 1500);
}
