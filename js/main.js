const username_input = document.querySelector('#username');
const username_label = document.querySelector('#username-label');

username_input.addEventListener('focus', e => {
	if (!username_input.value) {
		username_label.classList.add('login-form__label--focus');
		username_input.classList.add('login-form__input--focus');
	}
});
username_input.addEventListener('focusout', e => {
	if (!username_input.value) {
		username_label.classList.remove('login-form__label--focus');
		username_input.classList.remove('login-form__input--focus');
	}
});

const password_input = document.querySelector('#password');
const password_label = document.querySelector('#password-label');

password_input.addEventListener('focus', e => {
	if (!password_input.value) {
		password_label.classList.add('login-form__label--focus');
		password_input.classList.add('login-form__input--focus');
	}
});
password_input.addEventListener('focusout', e => {
	if (!password_input.value) {
		password_label.classList.remove('login-form__label--focus');
		password_input.classList.remove('login-form__input--focus');
	}
});

// Signin
const username_input_signin = document.querySelector('#username-signin');
const username_label_signin = document.querySelector('#username-label-signin');

username_input_signin.addEventListener('focus', e => {
	if (!username_input_signin.value) {
		username_label_signin.classList.add('login-form__label--focus');
		username_input_signin.classList.add('login-form__input--focus');
	}
});
username_input_signin.addEventListener('focusout', e => {
	if (!username_input_signin.value) {
		username_label_signin.classList.remove('login-form__label--focus');
		username_input_signin.classList.remove('login-form__input--focus');
	}
});

const password_input_signin = document.querySelector('#password-signin');
const password_label_signin = document.querySelector('#password-label-signin');

password_input_signin.addEventListener('focus', e => {
	if (!password_input_signin.value) {
		password_label_signin.classList.add('login-form__label--focus');
		password_input_signin.classList.add('login-form__input--focus');
	}
});
password_input_signin.addEventListener('focusout', e => {
	if (!password_input_signin.value) {
		password_label_signin.classList.remove('login-form__label--focus');
		password_input_signin.classList.remove('login-form__input--focus');
	}
});
const email_input = document.querySelector('#email-signin');
const email_label = document.querySelector('#email-label-sigin');

email_input.addEventListener('focus', e => {
	if (!email_input.value) {
		email_label.classList.add('login-form__label--focus');
		email_input.classList.add('login-form__input--focus');
	}
});
email_input.addEventListener('focusout', e => {
	if (!email_input.value) {
		email_label.classList.remove('login-form__label--focus');
		email_input.classList.remove('login-form__input--focus');
	}
});

const signin = document.querySelector('#signin');
signin.addEventListener('click', e => {
	if (e.target.id === 'signin') {
		console.log('close');
		signin.style.top = '-100vh';
	}
});
