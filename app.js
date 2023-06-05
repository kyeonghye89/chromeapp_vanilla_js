/**
 * app
 * @author kyeonghye
 * @since 2023/06/05
 * app main code
 */

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const NAME_STORAGEKEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    console.log("onLoginSubmit() ", userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    paintGreeting(userName);

    localStorage.setItem(NAME_STORAGEKEY, userName);
}

function paintGreeting(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(NAME_STORAGEKEY);

if (savedUserName) {
    paintGreeting(savedUserName);
}
else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}