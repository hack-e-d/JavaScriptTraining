/*
 *The function has no input and output
 */
function init() {
    console.log(typeof false)
}
var specialCharacterString = "!@#$%&*()_?./";

function validatePassword(password) {
    var passwordObject = {}
    if (password.length >= 8 && password.length <= 15) {
        passwordObject.lengthCheck = true;
    }
    for (var i = 0; i < password.length; i++) {
        var ch = password.charAt(i);
        if (ch >= 'A' && ch <= 'Z') {
            passwordObject.characterCheck = true;
            passwordObject.upperCaseCheck = true;
        } else if (ch >= 'a' && ch <= 'z') {
            passwordObject.characterCheck = true;
            passwordObject.lowerCaseCheck = true;
        } else if (ch >= '0' && ch <= '9') {
            passwordObject.numberCheck = true;
        } else if (specialCharacterString.indexOf(ch) != -1) {
            passwordObject.specialCharacterCheck = true
        }
    }
    console.log(passwordObject)
    var conditionValidatedCount = Object.keys(passwordObject).length;
    if (conditionValidatedCount == 6) {
        document.getElementById("passwordOut").innerHTML = "Good"
        document.getElementById("passwordOut").style.color = "green"
    }
    if (conditionValidatedCount == 4 || conditionValidatedCount == 5) {
        document.getElementById("passwordOut").innerHTML = "Medium"
        document.getElementById("passwordOut").style.color = "orange"
    }
    if (conditionValidatedCount < 4) {
        document.getElementById("passwordOut").innerHTML = "Poor"
        document.getElementById("passwordOut").style.color = "red"
    }
}

function getVowelsCount(checkString) {
    var count = 0
    for (var i = 0; i < checkString.length; i++) {
        if ("aeiou".indexOf(checkString.charAt(i)) != -1) {
            count++;
        }
    }
    return count;
}

function removeCharAt(characterIndex, completeString) {
    return completeString.substr(0, characterIndex) + completeString.substr(characterIndex + completeString.length)
}

function getUniqueVowelsCount(checkString) {
    var count = 0
    var vowelString = "aeiou";
    for (var i = 0; i < checkString.length; i++) {
        if (vowelString.indexOf(checkString.charAt(i)) != -1) {
            count++;
            vowelString = removeCharAt(vowelString.indexOf(checkString.charAt(i)), vowelString);
            console.log(vowelString);
        }
    }
    return count;
}

function setInTextBox(settingString) {
    document.getElementById("selectedUserName").value = settingString;
}

function generateRandomNumber() {
    var x = Math.floor((Math.random() * 100) + 1);
    var randomNumberString = "";
    if (x < 10) {
        randomNumberString += "00" + x;
    } else if (x < 100) {
        randomNumberString += "0" + x;
    }
    return randomNumberString
}

function generateUserNames() {
    var firstName = document.getElementById("firstName").value.trim().toLowerCase();
    var lastName = document.getElementById("lastName").value.trim().toLowerCase();
    var userNameSuggestions = []
    userNameSuggestions.push(firstName.slice(0, 2) + lastName.slice(0, 2) + firstName.length + lastName.length);
    userNameSuggestions.push(firstName.slice(0, 3) + lastName.slice(0, 3) + firstName.length + lastName.length);
    userNameSuggestions.push(lastName.slice(-3) + firstName.slice(-3) + getVowelsCount(firstName) + getVowelsCount(lastName));
    userNameSuggestions.push(lastName.slice(-3) + firstName.slice(-3) + getUniqueVowelsCount(firstName) + getUniqueVowelsCount(lastName));
    userNameSuggestions.push(firstName.slice(0, 3) + lastName.slice(0, 3) + generateRandomNumber());
    console.log(userNameSuggestions);
    var innerHtmlString = "";
    for (var i = 0; i < userNameSuggestions.length; i++) {
        innerHtmlString += "<li style='cursor:pointer'onclick = 'setInTextBox(this.innerText)'>" + userNameSuggestions[i] + "</li>";
    }
    document.getElementById("userNameSuggestions").innerHTML = innerHtmlString;
}