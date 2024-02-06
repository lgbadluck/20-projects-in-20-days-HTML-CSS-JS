

const display = document.getElementById("_status");
const body = document.body;
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let captcha = "";

body.onload = function generateCaptch() {

    const capthcaLength = 6;
    for (let i = 0; i < capthcaLength; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char.substring(randomIndex, randomIndex + 1);
    }

    document.getElementById("_generator").value = captcha;
    display.innerText = "Captcha Generator"
};

refresh.onclick = function refreshCaptcha() {

    let newCaptcha = "";
    const capthcaLength = 6;
    for (let i = 0; i < capthcaLength; i++) {
        const randomChar = char[Math.floor(Math.random() * char.length)];
        newCaptcha += randomChar;
    }
    document.getElementById("_generator").value = newCaptcha;
    display.innerText = "Captcha Generator"
};


submit.onclick = function checkInput() {

    const input = document.getElementById("_client-text").value;

    if(input === ""){
        display.innerText = "Please enter text Shown below 👇";

    } else if(input === captcha){
        display.innerText = "Matched 🤓";
    } else {
        display.innerText = "Not-Matched 🧐";
    }
};
