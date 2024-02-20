document.querySelector('.toggle-menu').addEventListener("click", (event)=>{
  event.target.classList.toggle('active');
  document.getElementById('menu').classList.toggle('open');
});
