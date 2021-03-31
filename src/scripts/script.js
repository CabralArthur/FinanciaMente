VanillaTilt.init(document.querySelector('.card-about'), {
  max: 20,
  speed: 300,
});

function Fecha(id) {
  let modalBackground = document.getElementById('modalbg');
  tipoModal = document.getElementById(id);
  tipoModal.style.display = 'none';
  modalBackground.style.display = 'none';
}

function Abre(id) {
  let modalBackground = document.getElementById('modalbg');
  tipoModal = document.getElementById(id);
  tipoModal.style.display = 'inline';
  modalBackground.style.display = 'inline';
}
