// console.log("CashOut JS added");

document.getElementById("withdraw-btn").addEventListener("click", function () {
  //   // 1. get the agent number & validate
  const agentNumber = getValueFromInput("agent-number");
  if (agentNumber.length != 11) {
    alert("Invalid Agent's Number!!");
    return;
  }

  // 2. get the withdraw amount, validate, convert to number
  const cashOutAmount = getValueFromInput("cashOut-amount");

  // 3. get the current balance, validate, convert to number
  //   const balanceElement = document.getElementById("balance");
  //   const balance = balanceElement.innerText;
  //   console.log(balance);

  // 4. calculate new balance
  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(cashOutAmount);
  if (newBalance < 0) {
    alert("Withdraw amount can't be greater than current balance!!");
    return;
  }

  // 5. get the PIN & verify
  const cashOutPin = getValueFromInput("cashOut-pin");
  if (cashOutPin === "1234") {
    alert("Cash Out Successful");
    console.log("New Balance", newBalance);
    setBalance(newBalance);
  } else {
    alert("Invalid PIN!!");
    return;
  }
});

/* Previous Steps */
// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   // 1. get the agent number & validate
//   const agentNumberInput = document.getElementById("agent-number");
//   const agentNumber = agentNumberInput.value;
//   console.log(agentNumber);
//   if (agentNumber.length != 11) {
//     alert("Invalid Agent's Number!!");
//     return;
//   }

//   // 2. get the withdraw amount, validate, convert to number
//   const cashOutAmountInput = document.getElementById("cashOut-amount");
//   const cashOutAmount = cashOutAmountInput.value;
//   console.log(cashOutAmount);

//   // 3. get the current balance, validate, convert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   // 4. calculate new balance
//   const newBalance = Number(balance) - Number(cashOutAmount);
//   if (newBalance < 0) {
//     alert("Withdraw Amount can't be greater than your current Balance");
//     return;
//   }

//   // 5. get the PIN & verify
//   const cashOutPinInput = document.getElementById("cashOut-pin");
//   const cashOutPin = cashOutPinInput.value;

//   if (cashOutPin === "1234") {
//     // 5-1 if true > show the alert > set new balance
//     alert("Cash Out Successful");
//     console.log("New Balance", newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     // 5-2 if false > show an error > return
//     alert("Invalid PIN!!");
//     return;
//   }
// });
