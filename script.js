function goToPin() {
  const phoneInput = document.getElementById('phone');
  if (phoneInput.value.length === 10) {
    // Mostrar la pantalla del PIN
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('pin').style.display = 'flex';
  } else {
    alert('Por favor, escribe un número de celular válido.');
  }
}

function moveToNext(current, next) {
  const currentInput = document.getElementById(current);
  const nextInput = document.getElementById(next);

  if (currentInput.value && nextInput) {
    nextInput.focus();
  }
}

function finishPin() {
  const pin1 = document.getElementById('pin1').value;
  const pin2 = document.getElementById('pin2').value;
  const pin3 = document.getElementById('pin3').value;
  const pin4 = document.getElementById('pin4').value;

  if (pin1 && pin2 && pin3 && pin4) {
    // Mostrar la pantalla de confirmación
    document.getElementById('pin').style.display = 'none';
    document.getElementById('confirmation').style.display = 'flex';
  }
}

function enterNumber(num) {
  const inputs = document.querySelectorAll('.pin-inputs input');
  for (let input of inputs) {
    if (!input.value) {
      input.value = num;
      input.dispatchEvent(new Event('input'));
      break;
    }
  }
}

function deleteNumber() {
  const inputs = document.querySelectorAll('.pin-inputs input');
  for (let i = inputs.length - 1; i >= 0; i--) {
    if (inputs[i].value) {
      inputs[i].value = '';
      inputs[i].focus();
      break;
    }
  }
}
