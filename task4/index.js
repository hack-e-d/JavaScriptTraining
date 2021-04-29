/*
 *The function has no input and output
 */
function init() {
    var input = prompt("Enter name")
    document.getElementById("output").innerHTML = "Welcome " + input;

    var inputColor = prompt("Enter a color");
    document.getElementById("output").style.backgroundColor = inputColor;
}

function changeColor(color) {
    document.getElementById("output").style.backgroundColor = color;
}
var flag = true;

function hideContent() {
    if (flag == true) {
        document.getElementById("hiddingContent").style.visibility = 'hidden';
        document.getElementById("toggleButton").value = "Show";
        flag = false;
    } else {
        document.getElementById("hiddingContent").style.visibility = 'visible';
        document.getElementById("toggleButton").value = "Hide";
        flag = true;
    }
}

function getGender() {
    document.getElementById("genderDisplay").innerHTML = getChecked();
}

function getChecked() {
    if (document.getElementById("male").checked == true) {
        return "Male";
    } else {
        return "Female";
    }
}