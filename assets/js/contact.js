function emailSent() {
  window.alert("Din e-mail er nu sendt.")
}

function saveData() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var besked = document.getElementById('besked').value;
  localStorage.setItem('Navn', name);
  localStorage.setItem('Email', email);
  localStorage.setItem('Besked', besked);
}
