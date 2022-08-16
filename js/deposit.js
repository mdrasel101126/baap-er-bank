document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositInput = document.getElementById("input-deposit");
  let newDeposit = newDepositInput.value;
  newDepositInput.value = "";
  newDeposit = parseFloat(newDeposit);
  if (isNaN(newDeposit) || newDeposit <= 0) {
    alert("Please Insert Valid Input!");
    return;
  }
  const prevDepositField = document.getElementById("total-deposit");
  let prevDeposit = parseFloat(prevDepositField.innerText);
  const totalDeposit = prevDeposit + newDeposit;
  prevDepositField.innerText = totalDeposit;

  const prevTotalBalance = document.getElementById("total-balance");
  let totalBalance = parseFloat(prevTotalBalance.innerText);
  totalBalance = totalBalance + newDeposit;
  prevTotalBalance.innerText = totalBalance;
});
