const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (emailInput.value.trim() === '') {
    emailError.classList.remove('hidden');
    emailError.textContent = 'Email is required';
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.innerHTML = '';
    emailError.classList.remove('hidden');
    emailError.textContent = 'Invalid email format';
    return false;
  } else {
    emailError.classList.add('hidden');
    emailError.textContent = '';
    return true;
  }
}

function validatePassword() {
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');

  if (passwordInput.value.trim() === '') {
    passwordError.classList.remove('hidden');
    console.log('if');
    passwordError.textContent = 'Password is required';
    return false;
  } else if (!passwordRegex.test(passwordInput.value.trim())) {
    passwordError.classList.remove('hidden');
    console.log('else if');
    passwordError.textContent = 'Password should contain number and letter';
    return false;
  } else {
    console.log('else');
    passwordError.classList.add('hidden');
    passwordError.textContent = '';
    return true;
  }
}

export function validateForm() {
  let isValid = true;
  if (!validateEmail()) {
    isValid = false;
  }
  if (!validatePassword()) {
    isValid = false;
  }
  if (isValid) {
    document.getElementById('loginForm').reset();
  }
  return isValid;
}
