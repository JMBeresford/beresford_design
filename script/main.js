const close_btn = document.querySelector('#close');
const find_yours_btn = document.querySelector('#button-div');
const contact_btn = document.querySelector('#contact-us');

close_btn.addEventListener('click', () => {
  const el = document.querySelector('#contact-wrapper');

  el.style.display = 'none';
});

find_yours_btn.addEventListener('click', () => {
  const el = document.querySelector('#contact-wrapper');

  el.style.display = 'block';
});

contact_btn.addEventListener('click', () => {
  const el = document.querySelector('#contact-wrapper');

  el.style.display = 'block';
});
