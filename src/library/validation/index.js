// import { getJson } from '@/service/api/tasks/read';
// import { Router } from '@/library/routers';

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// function validateEmail() {
//   const emailInput = document.getElementById('email');
//   const emailError = document.getElementById('emailError');
//   if (emailInput.value.trim() === '') {
//     emailError.classList.remove('hidden');
//     emailError.textContent = 'Email is required';
//     return false;
//   } else if (!emailRegex.test(emailInput.value.trim())) {
//     emailError.innerHTML = '';
//     emailError.classList.remove('hidden');
//     emailError.textContent = 'Invalid email format';
//     return false;
//   } else {
//     emailError.classList.add('hidden');
//     emailError.textContent = '';
//     return true;
//   }
// }

// function validatePassword() {
//   const passwordInput = document.getElementById('password');
//   const passwordError = document.getElementById('passwordError');

//   if (passwordInput.value.trim() === '') {
//     passwordError.classList.remove('hidden');
//     console.log('if');
//     passwordError.textContent = 'Password is required';
//     return false;
//   } else if (!passwordRegex.test(passwordInput.value.trim())) {
//     passwordError.classList.remove('hidden');
//     console.log('else if');
//     passwordError.textContent = 'Password should contain number and letter';
//     return false;
//   } else {
//     console.log('else');
//     passwordError.classList.add('hidden');
//     passwordError.textContent = '';
//     return true;
//   }
// }

// export function validateForm() {
//   let isValid = true;
//   if (!validateEmail()) {
//     isValid = false;
//   }
//   if (!validatePassword()) {
//     isValid = false;
//   }
//   if (isValid) {
//     // document.getElementById('loginForm').reset();
//   }
//   let emailInput = document.getElementById('email');
//   let passwordInput = document.getElementById('password');

//   let dbObj = {
//     username: emailInput.value,
//     password: passwordInput.value,
//   };
//   console.log(emailInput.value, passwordInput.value);
//   getJson('http://localhost:3000', `users?=${dbObj.email}`).then((res) => {
//     console.log(res);
//     if (res.length < 1) {
//       Router().navigate('/login');
//     } else {
//       console.log(dbObj.password);
//       if (dbObj.password === res[0].password) {
//         Router().navigate('/home');
//       } else {
//         Router().navigate('/login');
//       }
//     }
//   });
//   console.log(emailInput.value);
//   return isValid;
// }

// export function validateForm() {
//   let isValid = true;
//   if (!validateEmail()) {
//     isValid = false;
//   }
//   if (!validatePassword()) {
//     isValid = false;
//   }
//   if (isValid) {
//     // document.getElementById('loginForm').reset();
//   }
//   let emailInput = document.getElementById('email');
//   let passwordInput = document.getElementById('password');

//   let dbObj = {
//     username: emailInput.value,
//     password: passwordInput.value,
//   };
//   console.log(emailInput.value, passwordInput.value);
//   getJson(`users?=${dbObj.email}`).then((res) => {
//     console.log(res);
//     if (res.data < 1) {
//       Router().navigate('/login');
//     } else {
//       console.log(dbObj.password);
//       if (dbObj.password === res.data[0].password) {
//         Router().navigate('/home');
//       } else {
//         Router().navigate('/login');
//       }
//     }
//   });
// }
