// Petrol buttons
const petrolButtons = document.querySelectorAll('.petrol-button');
// Liters input field
const litersInput = document.getElementById('litersPurchased');
// Calculate button
const calculateButton = document.getElementById('calculateButton');
// Display output
const totalCostDisplay = document.getElementById('totalCost');

// Default price (Super 98)
let costPerLiter = 2.57;

// Select petrol type
petrolButtons.forEach(button => {
  button.addEventListener('click', () => {
    petrolButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    costPerLiter = parseFloat(button.dataset.price);
  });
});

// Clear zero on focus
litersInput.addEventListener('focus', () => {
  if (litersInput.value === '0') litersInput.value = '';
});
// Reset to zero on blur
litersInput.addEventListener('blur', () => {
  if (!litersInput.value) litersInput.value = '0';
});

// Calculate and show total cost
function calculateTotal() {
  const liters = parseFloat(litersInput.value);
  if (!isNaN(liters)) {
    const total = costPerLiter * liters;
    totalCostDisplay.textContent = `Total Cost: AED ${total.toFixed(2)}`;
  } else {
    totalCostDisplay.textContent = 'Total Cost: Invalid Input';
  }
}

// Trigger calculation
calculateButton.addEventListener('click', calculateTotal);
