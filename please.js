const form = document.getElementById('please');
const errorElement = document.getElementById('error');
const successElement = document.getElementById('success');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const oldEmail = document.getElementById('oldEmail');
const oldEmailChat = document.getElementById('oldEmailChat');
const oldEmailDiv = document.getElementById('oldEmailDiv');
const nowMailChat = document.getElementById('nowMailChat');
const chatDetails = document.getElementById('chatDetails');
const chatEmails = document.getElementById('chatEmails');
var triggerOldEmailDisplay = 'dont';

// Validation before POST
function validateForm() {
	let messages = [];

	// first name alerts
	if (fname.value === '' || fname.value == null) {
		messages.push('First name is required');
		fname.classList.add('missing');
	} else if (fname.value.length <= 1) {
		messages.push('First name must be more than 1 character');
		fname.classList.add('missing');
	} else if (
		// last name alerts
		lname.value === '' ||
		lname.value == null
	) {
		messages.push('Last name is required');
		lname.classList.add('missing');
	} else if (lname.value.length <= 4) {
		messages.push('Last name must be more than 4 characters');
		lname.classList.add('missing');
	} else if (
		!email.value.match(
			/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
		)
	) {
		messages.push('Please enter a valid email');
	}
	// Chat other with no details alert
	else if (
		document.getElementById('otherChat').checked &&
		chatDetails.value === ''
	) {
		messages.push(
			'What other action do you want us to take in your Chat settings?'
		);
		chatDetails.classList.add('missing');
	}
	// Chat change email with no old email alert
	else if (
		document.getElementById('changeEmailChat').checked &&
		oldEmail.value === ''
	) {
		messages.push('Please fill in your old email');
		oldEmail.classList.add('missing');
	}

	// if there are any errors, show the error block with the error messages in it
	if (messages.length > 0) {
		error.style.display = 'block';
		errorElement.innerHTML = '<div id="idChild"> Ooops! <br /></div>';
		errorElement.innerText += messages.join(', ');
		return false;
	}

	// if (messages.length == 0) {
	// 	successElement.style.display = 'block';
	// }
}

// chat action radio button reactions
document.forms.please.chatAction.forEach((radio) => {
	radio.addEventListener('change', () => {
		if (document.forms.please.chatAction.value === 'subscribe Chat') {
			chatDetails.style.display = 'none';
			chatEmails.style.display = 'none';
			triggerOldEmailDisplay = 'dont';
			oldEmailDisplay();
		} else if (
			document.forms.please.chatAction.value === 'unsubscribe Chat'
		) {
			chatDetails.style.display = 'none';
			chatEmails.style.display = 'none';
			triggerOldEmailDisplay = 'dont';
			oldEmailDisplay();
		} else if (
			document.forms.please.chatAction.value === 'change email Chat'
		) {
			chatDetails.style.display = 'none';
			chatEmails.style.display = 'block';
			triggerOldEmailDisplay = 'doso';
			oldEmailDisplay();
		} else if (document.forms.please.chatAction.value === 'other Chat') {
			chatDetails.style.display = 'block';
			chatEmails.style.display = 'none';
			triggerOldEmailDisplay = 'dont';
			oldEmailDisplay();
		} else {
			chatDetails.style.display = 'none';
			chatEmails.style.display = 'none';
			triggerOldEmailDisplay = 'dont';
			oldEmailDisplay();
		}
	});
});

// display oldEmail in top section if any "change my email" radio is checked
function oldEmailDisplay() {
	if (triggerOldEmailDisplay === 'doso') {
		oldEmailDiv.style.display = 'block';
	} else {
		oldEmailDiv.style.display = 'none';
	}
}

// chat action echo current email
email.onblur = function () {
	nowMailChat.value = this.value;
};
oldEmail.onblur = function () {
	oldEmailChat.value = this.value;
};

// reset form
form.addEventListener('reset', (e) => {
	error.style.display = 'none';
	oldEmailDiv.style.display = 'none';
	chatDetails.style.display = 'none';
	chatEmails.style.display = 'none';
});

// test
// document.getElementById('test').onclick = function () {
// 	alert(changeChatEmail);
// };
