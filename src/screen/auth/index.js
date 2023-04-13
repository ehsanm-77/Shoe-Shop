import { El } from '@/library/El';
import { validateForm } from '@/library/validation';
import { Router } from '@/library';

export const auth = () => {
  setTimeout(() => {
    // Get the showPassword element
    var showPasswordElement = document.getElementById('showPassword');
    // Get the password input element
    var passwordInputElement = document.getElementById('password');
    // Add event listener for click event
    showPasswordElement.addEventListener('click', function () {
      // Toggle the password input type between 'password' and 'text'
      if (passwordInputElement.type === 'password') {
        passwordInputElement.type = 'text';

        // Hide the show-password-image and show the hide-password-image
        showPasswordElement
          .querySelector('.show-password-image')
          .classList.add('hidden');
        showPasswordElement
          .querySelector('.hide-password-image')
          .classList.remove('hidden');
      } else {
        passwordInputElement.type = 'password';

        // Show the show-password-image and hide the hide-password-image
        showPasswordElement
          .querySelector('.show-password-image')
          .classList.remove('hidden');
        showPasswordElement
          .querySelector('.hide-password-image')
          .classList.add('hidden');
      }
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      validateForm();
    });
  }, 0);
  console.log('hi auth');
  return El({
    element: 'div',
    className: 'max-w-md h-full flex flex-col px-6 py-8 bg-white mx-auto',
    children: [
      El({
        element: 'img',
        className: 'w-8 mb-16',
        src: './src/assets/img/left 1.svg',
        eventListener: [
          {
            event: 'click',
            callback: () => {
              Router().navigate('/slider');
            },
          },
        ],
      }),
      El({
        element: 'img',
        className: 'text-2xl font-semibold text-center mb-24 mx-auto',
        // children: 'Logo',
        src: './src/assets/img/Vector 1 (1).svg',
      }),
      El({
        element: 'form',
        id: 'loginForm',
        className: 'h-full flex flex-col',
        children: [
          El({
            element: 'div',
            className: 'mb-4',
            children: [
              El({
                element: 'p',
                className: 'mb-8 text-3xl text-center font-bold',
                children: 'Login to Your Account',
              }),
              El({
                element: 'input',
                className:
                  'w-full px-3 py-2 placeholder-gray-400 focus:outline-none bg-authInput',
                type: 'text',
                id: 'email',
                restAttrs: {
                  placeholder: 'Email',
                },
              }),
              El({
                element: 'p',
                id: 'emailError',
                className: 'text-red-500 text-sm mt-1',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'mb-4',
            children: [
              El({
                element: 'div',
                className: 'relative',
                children: [
                  El({
                    element: 'input',
                    className:
                      'w-full px-3 py-2 placeholder-gray-40 focus:outline-none bg-authInput',
                    type: 'password',
                    id: 'password',
                    restAttrs: {
                      placeholder: 'Password',
                    },
                  }),
                  El({
                    element: 'span',
                    className:
                      'absolute right-0 top-0 mt-3 mr-4 cursor-pointer',
                    id: 'showPassword',
                    restAttrs: {
                      title: 'Show/Hide Password',
                    },
                    children: [
                      El({
                        element: 'img',
                        className: 'show-password-image',
                        restAttrs: {
                          src: './src/assets/img/hide.svg', // Image for showing password
                          alt: 'Show Password',
                        },
                      }),
                      El({
                        element: 'img',
                        className: 'hide-password-image hidden',
                        restAttrs: {
                          src: './src/assets/img/show.svg', // Image for hiding password
                          alt: 'Hide Password',
                        },
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'p',
                id: 'passwordError',
                className: 'text-red-500 text-sm mt-1',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center mb-4 justify-center',
            children: [
              El({
                element: 'input',
                className: 'mr-2 focus:outline-none',
                type: 'checkbox',
                id: 'rememberMe',
              }),
              El({
                element: 'label',
                className: 'text-gray-700 text-md',
                restAttrs: {
                  for: 'rememberMe',
                },
                children: 'Remember me',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'w-full h-full mt-auto  flex flex-col items-center justify-end',
            children: [
              El({
                element: 'button',
                id: 'signin-btn',
                className: 'w-full py-3 bg-dark text-white rounded-full',
                type: 'submit',
                children: 'Sign In',
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
