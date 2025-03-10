const burgerIcon = document.getElementById('burgerIcon');
 const menu = document.getElementById('menu');
 const overlay = document.getElementById('overlay');
 burgerIcon.addEventListener('click', () => {
   burgerIcon.classList.toggle('open');
   menu.classList.toggle('open');
   overlay.classList.toggle('active');
 });
 overlay.addEventListener('click', () => {
   burgerIcon.classList.remove('open');
   menu.classList.remove('open');
   overlay.classList.remove('active');
 });




