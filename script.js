document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("name");
  const expenseAmount = document.getElementById("amount");
  const expenseList = document.getElementById("expense-list");
  const resultDisplay = document.getElementById("result");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let total = calc();
});
