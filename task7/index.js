function handleException() {
    var inputArray = [
        100, -100, Infinity, -Infinity, 0, NaN,
        true, false,
        "this is correct", "this is a error",
        "A", "@", "a", [1, 2, 3],
        [1, 2, 3, 4, 5],
        { success: true }, { error: true }
    ];
    for (var i = 0; i < inputArray.length; i++) {
        try {
            var val = inputArray[i];
            if (typeof val === "number") {
                if (val < 0) {
                    throw new Error("Negative number encountered !");
                }
                if (Number.isNaN(val)) {
                    throw new Error("NaN encountered !");
                }
            }
            if (typeof val == "boolean") {
                if (val == false) {
                    throw new Error("False encountered !");
                }
            }
            if (typeof val == "string") {
                if (val == "this is a error") {
                    throw new Error(val + " encountered !");
                }
                if (val == "@") {
                    throw new Error("Special Character encountered !");
                }
                if (val == "a") {
                    throw new Error("LowerCase Character encountered !");
                }
            }

            if (val instanceof Array) {
                if (val.length < 4) {
                    throw new Error("Array size less than 5 encountered !");
                }
            }
            if (val instanceof Object) {
                if (val.error == true) {
                    throw new Error("Error object encountered !");
                }
            }
        } catch (exception) {
            console.log("catch : ", exception);
        } finally {
            console.log("finally : ", i);
        }
    }
}

function checkPerfectNumber(number) {
    factors = [1];
    for (var i = 2; i < number / 2 + 1; i++) {
        if (number % i == 0) {
            factors.push(i);
        }
    }
    if (number == factors.reduce(myFunc)) {
        console.log(number + " is a perfect number");
    } else {
        console.log(number + " is not a perfect number")
    }

    function myFunc(total, num) {
        return total + num;
    }
}