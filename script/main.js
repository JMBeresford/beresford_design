const close_btn = document.querySelector('#close-btn');
const find_yours_btn = document.querySelector('#cta-button');
const contact_btn = document.querySelector('#contact-us');
const brightness_mode = document.getElementById('dark-mode');
const modal_bg = document.getElementById('contact-wrapper');
const modal = document.getElementById('contact');

function addContactAnimation() {
  document.querySelector('#contact-wrapper').classList.add("animate");
  document.querySelector('#contact').classList.add("animate");
}

function removeContactAnimation() {
  document.querySelector('#contact-wrapper').classList.remove("animate");
  document.querySelector('#contact').classList.remove("animate");
}

close_btn.addEventListener('click', removeContactAnimation);
modal_bg.addEventListener('click', removeContactAnimation);
contact_btn.addEventListener('click', addContactAnimation);
find_yours_btn.addEventListener('click', addContactAnimation);

modal.addEventListener('click', (e) => {
  e.stopPropagation();
})

brightness_mode.addEventListener('click', () => {
  document.body.classList.toggle("dark");
});