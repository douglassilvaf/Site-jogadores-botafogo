function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const enteredPassword = passwordInput.value;
  
    // Calcular o hash MD5 da senha inserida
    const enteredPasswordHash = md5(enteredPassword);
    console.log('Entered Password Hash:', enteredPasswordHash);
  
    // Substitua 'hashDaSenhaCorreta' pelo hash MD5 da senha desejada.
    const correctPasswordHash = '85ee0fe4f155a9af2657d85054ad63ca'; // Exemplo para a senha 'SENHA'
    console.log('Correct Password Hash:', correctPasswordHash);
  
    if (enteredPasswordHash === correctPasswordHash) {
      // Redirecione para a próxima página.
      window.location.href = 'pagina_principal.html';
      return false; // Evita o envio do formulário padrão
    } else {
      alert('Senha incorreta. Tente novamente.');
      passwordInput.value = '';
      return false; // Evita o envio do formulário padrão
    }
  }
  