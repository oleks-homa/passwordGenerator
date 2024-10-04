const passwordLengthSpan = document.getElementById('length');
const result = document.getElementById('result');
const generateButton = document.getElementById('generate');
const passwordLength = document.getElementById('range');
const options = document.querySelectorAll('.option input');

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

passwordLength.addEventListener('change', () => {
    passwordLengthSpan.innerHTML = passwordLength.value;
})

generateButton.addEventListener('click', () => {
    let allIncludedChars = '';
    let excludeDuplicate = false;
    let saveCookie = false;
    let chosenOptions = [];
    options.forEach(option => {
        if(option.checked) {
            if(option.id !== "exc-duplicate") {
                allIncludedChars += characters[option.id];
            } else {
                excludeDuplicate = true;
            } 
            chosenOptions.push(option.id);
        }
    })

    let length = +passwordLength.value;
    let resultString = '';

    for(let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * allIncludedChars.length);
        let char = allIncludedChars.charAt(index);
        if (excludeDuplicate) {
            if (resultString.indexOf(char) === -1) {
                resultString += char;
            } else {
                i--;
            }
        } else {
            resultString += char;
        }
    }

    result.value = resultString;
})