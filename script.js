document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("name");
  const expenseAmount = document.getElementById("amount");
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let total = calc();
});
