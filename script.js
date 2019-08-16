document.getElementById('textarea').value = localStorage.getItem('content')
document.getElementById('textarea').addEventListener("keyup", localStorage.setItem('content', document.getElementById('textarea').value))
