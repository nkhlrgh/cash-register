var input1 = document.querySelector("#bill-input");
var input2 = document.querySelector("#note-input");
var display = document.querySelector(".output");
var resetBtn = document.querySelector("#rst-btn");
var currencies = [2000, 500, 200, 100, 50, 20, 10, 2, 1];
function onClickHandler() {
  var billInput = input1.value;
  var noteInput = input2.value;
  var remainingAmount = noteInput - billInput;
  display.innerText = remainingAmount;
  currencies.map((currency) => {
    if (currency <= remainingAmount && remainingAmount > 0) {
      var notes = Math.floor(remainingAmount / currency);
      remainingAmount %= currency;
      var displayOut = "Note: " + currency + " = " + notes;
      var node = document.createElement("LI");
      var textnode = document.createTextNode(displayOut);
      node.appendChild(textnode);
      document.getElementById("output-list").appendChild(node);
    }
  });
}

function resetHandler() {
  var list = document.getElementById("output-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

resetBtn.addEventListener("click", resetHandler);
