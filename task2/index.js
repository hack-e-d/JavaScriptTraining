/*
 *The function has no input and output
 */
function init() {
    var numberInt = 100;
    var numberFloat = 12.23;
    var stringVariable = "hi eathlings!";

    var arrayVariable = []
    var objectVariable = new Object();
    objectVariable.key1 = 10;

    console.log(numberInt, numberFloat, stringVariable, arrayVariable, objectVariable)
    var browserNames = []
    var browserNamesObject = {};
    var i = 0;
    //while (i < 3) {
    var tempBrowserName = prompt("Enter the browser name ")
    if (tempBrowserName != "") {
        browserNames[i] = tempBrowserName;
        browserNamesObject[tempBrowserName] = tempBrowserName.length;
        i++;
    }

    tempBrowserName = prompt("Enter the browser name ")
    if (tempBrowserName != "") {
        browserNames[i] = tempBrowserName;
        browserNamesObject[tempBrowserName] = tempBrowserName.length;
        i++;
    }

    tempBrowserName = prompt("Enter the browser name ")
    if (tempBrowserName != "") {
        browserNames[i] = tempBrowserName;
        browserNamesObject[tempBrowserName] = tempBrowserName.length;
    }
    //}
    // for (var i = 0; i < browserNames.length; i++) {
    //     browserNamesObject[browserNames[i]] = browserNames[i].length;
    // }
    console.log(browserNames, browserNamesObject)
}

init()