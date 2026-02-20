// console.log("JavaScript Added");

document.getElementById("login-btn").addEventListener("click", function () {
  // 1. get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  //   2. get the PIN
  const inputPIN = document.getElementById("input-pin");
  const pin = inputPIN.value;
  console.log(pin);

  //   3. Match Mobile number & PIN
  if (contactNumber == "01914285006" && pin == "1234") {
    // 3.1 if true
    alert("Login Success");
    //  window.location.replace("./home.html");
    window.location.assign("./home.html");
  } else {
    // 3.2 if false
    alert("Login Failed");
    return;
  }
});
