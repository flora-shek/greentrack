document.getElementById('usage-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const electricity = document.getElementById('electricity').value;
  const gas = document.getElementById('gas').value;
  const water = document.getElementById('water').value;
  document.getElementById('footprint-result').textContent = `Logged: ${electricity} kWh, ${gas} therms, ${water} gallons. (API integration coming soon!)`;
});