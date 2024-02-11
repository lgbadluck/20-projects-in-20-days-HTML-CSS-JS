function detectChar() {
    const charInput = document.getElementById("_charInput");
    const result = document.getElementById("_result");

    const character = charInput.value;
    if(isASCII(character)){
        result.innerHTML = "You entered an ASCII character";
    } else {
        result.innerHTML = "You entered an Unicode character";
    }
}

function isASCII(char) {
    return char.charCodeAt(0) <= 127;
}