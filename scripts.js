function calculateTip() {

  let bill = document.getElementById("bill").value;
  let tip = document.getElementById("tip").value;
  let people = document.getElementById("people").value;

  if (bill === "" || tip === "" || people === "" || people <= 0) {
    alert("Please enter valid values");
    return;
  }

  bill = parseFloat(bill);
  tip = parseFloat(tip);
  people = parseInt(people);

  let totalTip = bill * (tip / 100);
  let tipPerPerson = totalTip / people;

  document.getElementById("totalTip").innerText =
    "$" + totalTip.toFixed(2);

  document.getElementById("perPerson").innerText =
    "$" + tipPerPerson.toFixed(2);
}
