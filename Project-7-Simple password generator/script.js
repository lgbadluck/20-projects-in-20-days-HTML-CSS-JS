
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const passwordInput = document.getElementById("passwordInput");
const show = document.querySelector(".show");

generateButton.onclick = function generatePassword() {
    const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";
    const passwordLenght = 16;
    let password = "";

    for (let i = 0; i < passwordLenght; i++) {
        let generatePwd = Math.floor(Math.random() * character.length);
        password += character.substring(generatePwd, generatePwd+1);
    }

    passwordInput.value = password;
};



copyButton.onclick = function copyPassword() {
    const passwordValue = passwordInput.value;

    if(passwordValue.trim() === "") {
        alert("Password is empty. Generate a password first!");
    } else {
        navigator.clipboard.writeText(passwordValue).then(function(){
            show.innerHTML = "Your new Password is: <br>" + passwordValue;

            show.classList.add("active");
            setTimeout(() => {
                show.classList.remove("active");
            }, 2000);
            passwordInput.value = "";
        });
    }
};
