document.getElementById('textarea').value = localStorage.getItem('content') || "";
if (localStorage.getItem('dark') == null) {
  localStorage.setItem('dark', false);
}

if (localStorage.getItem('dark') == 'true') {
  document.body.className += ' ' + 'dark';
} else {
  document.body.className += ' ' + 'light';
}
