function validateForm() {
  if(document.getElementById('newsletter__mail').value == '') {
    document.getElementById('newsletter__error__texte').innerHTML = 'Veuillez renseignez votre mail';
    return false;
  } else {
    document.getElementById('newsletter__error__texte').innerHTML = '';
    alert('Vous êtes inscrits à la Newsletter');
    return true;
  }
}
