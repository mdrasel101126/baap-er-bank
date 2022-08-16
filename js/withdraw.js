document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawInput = document.getElementById("input-withdraw");
  let newWithdraw = newWithdrawInput.value;
  newWithdrawInput.value = "";
  newWithdraw = parseFloat(newWithdraw);

  const prevTotalBalance = document.getElementById("total-balance");
  let prevTotalBalanceValue = parseFloat(prevTotalBalance.innerText);

  if (
    isNaN(newWithdraw) ||
    newWithdraw <= 0 ||
    newWithdraw > prevTotalBalanceValue
  ) {
    alert("Please Insert Valid Input!");
    return;
  }
  const prevWithdrawField = document.getElementById("total-withdraw");
  let prevWithdraw = parseFloat(prevWithdrawField.innerText);
  const totalWithdraw = prevWithdraw + newWithdraw;
  prevWithdrawField.innerText = totalWithdraw;

  const totalBalance = prevTotalBalanceValue - newWithdraw;
  prevTotalBalance.innerText = totalBalance;
});
