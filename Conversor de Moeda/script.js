const themeIcon = document.getElementById('themeIcon');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  themeIcon.className = body.classList.contains('dark') ? 'fas fa-sun' : 'fas fa-moon';
}

window.onload = () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.remove('dark');
    themeIcon.className = 'fas fa-moon';
  } else {
    themeIcon.className = 'fas fa-sun';
  }
};

// Cotações fixas
const rates = {
  USD: { BRL: 5.00, EUR: 0.83, USD: 1 },
  BRL: { USD: 1 / 5.00, EUR: 1 / 6.00, BRL: 1 },
  EUR: { BRL: 6.00, USD: 1 / 0.83, EUR: 1 },
};

function convert() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Digite um valor válido!";
    return;
  }

  const rate = rates[from][to];
  const converted = (amount * rate).toFixed(2);

  resultDiv.textContent = `${amount.toLocaleString('pt-BR', { style: 'currency', currency: from })} = ${converted.toLocaleString('pt-BR', { style: 'currency', currency: to })}`;
}
