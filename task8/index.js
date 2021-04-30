function printBill() {
    var books = [
        { name: "b1", quantity: 20 },
        { name: "b2", quantity: 21 },
        { name: "b3", quantity: 10 },
        { name: "b4", quantity: 30 }
    ]
    var bookPrices = [
        { b1: 10 },
        { b2: 12 },
        { b3: 9 },
        { b4: 9 },
    ]
    InnerHtmlString = "";
    var TotalBillAmount = 0
    books.forEach(function(val, index) {
        InnerHtmlString += "<tr><td>" + (index + 1) + "</td><td>" + val.name + "</td><td>" + val.quantity +
            "</td><td>" + bookPrices[index][val.name] + "</td><td>" +
            val.quantity * bookPrices[index][val.name] + "</td></tr>";
        TotalBillAmount += val.quantity * bookPrices[index][val.name];
    })
    document.getElementById("billTableBody").innerHTML = InnerHtmlString;
    document.getElementById("total").value = TotalBillAmount;
}