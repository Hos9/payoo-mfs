document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1. Select a bank
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please Select a Bank first!!");
    return;
  }

  // 2. Get Bank Account Number
  const accNo = getValueFromInput("add-money-number");
  if (accNo.length != 11) {
    alert("Invalid Number!!");
    return;
  }

  // 3. Get amount
  const balance = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(balance);

  //   4. PIN verify
  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Amount Added from ${bankAccount}
        at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid PIN!!");
    return;
  }
});
