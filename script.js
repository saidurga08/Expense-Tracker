document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");
  const totalDisplay = document.getElementById("total");

  let total = 0;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    if (name === "" || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid name and amount.");
      return;
    }
    const li = document.createElement("li");
    li.innerHTML = `${name} - Rs. ${amount.toFixed(2)} 
    <strong>(${category})</strong> 
    <button class="delete-btn">X</button>`;

    expenseList.appendChild(li);

    total += amount;
    totalDisplay.textContent = total.toFixed(2);

    form.reset();

    li.querySelector(".delete-btn").addEventListener("click", function () {
      expenseList.removeChild(li);
      total -= amount;
      totalDisplay.textContent = total.toFixed(2);
    });
  });
});
