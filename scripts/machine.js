console.log("Machine Added");

function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// Get Balance

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("Current Balance", Number(balance));
  return Number(balance);
}

// Set Balance

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// Hidden & Show button

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  // console.log("Show only clicked ");
  const cashOut = document.getElementById("cashOut");

  // console.log(`add-money- ${addmoney} , cashOut - ${cashout}`);

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
