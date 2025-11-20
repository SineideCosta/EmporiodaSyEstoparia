document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('.input-padrao');
  
    // Verifica se o formulário existe antes de tudo
    if (!form) return;
  
    // Validação de campos: adiciona classe 'erro' se inválido
    inputs.forEach(input => {
      input.addEventListener('blur', function () {
        if (!this.validity.valid) {
          this.classList.add('erro');
        } else {
          this.classList.remove('erro');
        }
      });
    });
  
    // Envio do formulário com feedback visual (simulado)
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // ❗️Remova em produção se for usar back-end real
  
  
      // Verifica se todos os campos obrigatórios são válidos
      let formValido = true;
      inputs.forEach(input => {
        if (!input.validity.valid) {
          input.classList.add('erro');
          formValido = false;
        }
      });
    
      if (!formValido) {
        alert('Por favor, preencha corretamente todos os campos obrigatórios.');
        return;
      }
  
      const button = form.querySelector('.enviar');
      const originalText = button.value;
  
      // Feedback de envio
      button.value = 'Enviando...';
      button.disabled = true;  
  
      setTimeout(() => {
        button.value = 'Mensagem Enviada!';
        button.classList.add('sucesso'); // Suporte para estilo via CSS
  
        setTimeout(() => {
          button.value = originalText;
          button.disabled = false;
          button.classList.remove('sucesso');
          form.reset();
        }, 2000);
      }, 1000);
    });
  });