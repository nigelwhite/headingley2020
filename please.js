const form = document.getElementById('please');
const errorElement = document.getElementById('error');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const oldEmail = document.getElementById('oldEmail');
var chatAction = document.querySelector('input[name="chatAction"]:checked')
	.value;
const oldEmailChat = document.getElementById('oldEmailChat');
const oldEmailDiv = document.getElementById('oldEmailDiv');
const nowMailChat = document.getElementById('nowMailChat');
const chatDetails = document.getElementById('chatDetails');
const chatEmails = document.getElementById('chatEmails');
var triggerOldEmailDisplay = 'dont';

// chat action radio buttons

document.forms.please.chatAction.forEach((radio) => {
	radio.addEventListener('change', () => {
		// console.log(`${document.forms.please.chatAction.value}`);
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
		console.log(document.forms.please.chatAction.value);
		console.log(triggerOldEmailDisplay);
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

// validate the form
form.addEventListener('submit', (e) => {
	let messages = [];
	if (fname.value === '' || fname.value == null) {
		messages.push('First name is required');
		fname.classList.add('missing');
	} else if (fname.value.length <= 1) {
		messages.push('First name must be more than 1 character');
		fname.classList.add('missing');
	}

	if (lname.value === '' || lname.value == null) {
		messages.push('Last name is required');
		lname.classList.add('missing');
	} else if (lname.value.length <= 4) {
		messages.push('Last name must be more than 4 characters');
		lname.classList.add('missing');
	}

	if (
		document.getElementById('otherChat').checked &&
		chatDetails.value === ''
	) {
		messages.push(
			'What other action do you want us to take in your Chat settings?'
		);
		chatDetails.classList.add('missing');
	}

	if (messages.length > 0) {
		e.preventDefault();
		error.style.display = 'block';
		errorElement.innerHTML = '<div id="idChild"> Ooops! <br /></div>';
		errorElement.innerText += messages.join(', ');
	}
});

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
