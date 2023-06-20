document.addEventListener('DOMContentLoaded', function() {
  
  toggleIncoms();
  initializeIncomeForm();
  
});

function toggleIncoms() {
  var incomsProject = document.getElementById('incoms');
  incomsProject.classList.toggle("hidden");

  if (!incomsProject.classList.contains("hidden")) {
    initializeIncomeForm();
  }
}

function initializeIncomeForm() {
  var incomeForm = document.getElementById('incomeForm');
  incomeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addIncome();
  });
}

function addIncome() {
  var incomeAmountInput = document.getElementById('incomeAmount');
  var incomeDescriptionInput = document.getElementById('incomeDescription');
  var incomeList = document.getElementById('incomeList');
  var incomeTotalAmount = document.getElementById('incomeTotalAmount');

  var amount = parseFloat(incomeAmountInput.value);
  var description = incomeDescriptionInput.value;

  if (!isNaN(amount) && description.trim() !== '') {
    var incomeItem = document.createElement('li');
    incomeItem.textContent = description + ': $' + amount.toFixed(2);
    incomeList.appendChild(incomeItem);

    var currentTotal = parseFloat(incomeTotalAmount.textContent);
    var newTotal = currentTotal + amount;
    incomeTotalAmount.textContent = newTotal.toFixed(2);

    incomeAmountInput.value = '';
    incomeDescriptionInput.value = '';
  }
}
