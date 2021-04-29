/*
 *The function has no input and output
 */
function init() {
    var inputName = "";
    while (inputName === "") {
        inputName = prompt("Enter your name");
    }
    alert(inputName)
    console.log("Entered Data :" + inputName);
    console.log("Entered Choice : " + confirm("Entered value : " + inputName));
}

init()