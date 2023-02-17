const loginButton = document.getElementById('login-button');
const errorMessage = document.getElementById('error-message');

loginButton.

loginButton
addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    errorMessage.innerHTML = 'Por favor, preencha todos os campos.';
  } 
 
else if (username === 'usuario' && password === 'senha') {
    window.location.href = 'pagina-inicial.html';
  } else {
    errorMessage.
   
innerHTML = 'Nome de usuário ou senha incorretos.';
  }
});
