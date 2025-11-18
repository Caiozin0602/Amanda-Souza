document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('form-agendar');
	const telefone = document.getElementById('telefone');
	const btn = form.querySelector('.btn');
	const telError = telefone.parentElement.querySelector('.error');

	// Força apenas números no telefone
	telefone.addEventListener('input', (e) => {
		const onlyDigits = e.target.value.replace(/\D/g, '');
		e.target.value = onlyDigits;
		telError.textContent = '';
	});

	// Validação simples ao submeter
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const telVal = telefone.value.trim();

		// exigir entre 10 e 11 dígitos (BR: 10 ou 11)
		if (telVal.length < 10 || telVal.length > 11) {
			telError.textContent = 'Informe 10 ou 11 números de telefone.';
			telefone.focus();
			return;
		}

		// Animação curta no botão e feedback
		btn.disabled = true;
		const originalText = btn.textContent;
		// Anima usando Web Animations API se disponível
		if (btn.animate) {
			btn.animate([
				{ transform: 'scale(1)', boxShadow: '0 6px 20px rgba(0,0,0,0.08)' },
				{ transform: 'scale(0.98)', boxShadow: '0 10px 30px rgba(0,0,0,0.12)' },
				{ transform: 'scale(1)', boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }
			], { duration: 260, easing: 'ease-out' });
		}

		btn.textContent = 'Agendado ✓';

		// Simula envio; limpar e restaurar estado
		setTimeout(() => {
			btn.textContent = originalText;
			btn.disabled = false;
			form.reset();
		}, 1400);
	});
});
