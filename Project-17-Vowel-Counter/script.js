function checkVowel() {
    var text = document.getElementById("_inputText").value;
    var vowelCount = 0;

    for(var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if(isVowel(char)) {
            vowelCount++;
        }
    }

    var result = document.getElementById("_result");
    result.textContent = "Total Vowels: " + vowelCount;
}

function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u"];

    return vowels.includes(char.toLowerCase());
}