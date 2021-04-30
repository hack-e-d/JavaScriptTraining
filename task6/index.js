var subscriptionFees = {
    premium: 5,
    enterprise: 10,
    platinum: 15
}

function selectSubscription(selectedSubscription) {
    if (selectedSubscription == "free") {
        document.getElementById("payment").style.display = "none";
    } else {
        document.getElementById("payment").style.display = "block";
        // console.log(subscriptionFees, selectedSubscription, subscriptionFees[selectedSubscription])
        document.getElementById("selectedSubscription").innerText = "" + subscriptionFees[selectedSubscription];
        var amount = subscriptionFees[selectedSubscription] - 0;
        if (document.getElementById("duration").value != "") {
            getTotal(amount);
        }
    }
}

function getTotal(amount) {
    if (amount == undefined) {
        amount = document.getElementById("selectedSubscription").innerText
    }
    var duration = document.getElementById("duration").value;
    document.getElementById("total").innerText = (duration - 0) * amount;
}