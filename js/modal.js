function openModal() {
  document.getElementById("modal-background").style.display = "block";
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('modal-background').style.display = 'none';
  document.body.classList.remove('modal-open');
}

function toggleModal() {
  var modal = document.getElementById('modal-background');
  modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
  document.body.classList.toggle('modal-open');
}