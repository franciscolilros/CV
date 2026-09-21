const button = document.querySelector('#copy-email');
button.addEventListener('click', async () => {
  await navigator.clipboard.writeText('franciscolilros@gmail.com');
  const original = button.innerHTML;
  button.innerHTML = 'Correo copiado <span>✓</span>';
  window.setTimeout(() => { button.innerHTML = original; }, 1800);
});
