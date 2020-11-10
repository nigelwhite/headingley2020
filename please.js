const form = document.getElementById('please');
const errorElement = document.getElementById('error');
// main items
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const oldEmailDiv = document.getElementById('oldEmailDiv');
const oldEmail = document.getElementById('oldEmail');
// Chat
const oldEmailChat = document.getElementById('oldEmailChat');
const nowMailChat = document.getElementById('nowMailChat');
const chatDetails = document.getElementById('chatDetails');
const chatEmails = document.getElementById('chatEmails');
// Triangle
const oldEmailTriangle = document.getElementById('oldEmailTriangle');
const nowMailTriangle = document.getElementById('nowMailTriangle');
const triangleDetails = document.getElementById('triangleDetails');
const triangleEmails = document.getElementById('triangleEmails');
// Activists
const oldEmailActivists = document.getElementById('oldEmailActivists');
const nowMailActivists = document.getElementById('nowMailActivists');
const activistsDetails = document.getElementById('activistsDetails');
const activistsEmails = document.getElementById('activistsEmails');
// Joining
const joining = document.getElementById('panel-joining');

var triggerOldEmailDisplay = 'dont';

// Validation before POST
function validateForm() {
	let messages = [];
	var chat = document.querySelector('input[name="chatAction"]:checked').value;
	var triangle = document.querySelector(
		'input[name="triangleAction"]:checked'
	).value;
	var activists = document.querySelector(
		'input[name="activistsAction"]:checked'
	).value;

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
	} else if (
		chat === 'no action' &&
		triangle === 'no action' &&
		activists === 'no action'
	) {
		messages.push(
			'You have not asked us to change anything! You have picked "Take no action" on all 3 networks.'
		);
	}

	// chat checks
	if (chat != 'no action') {
		// Chat other with no details alert
		if (
			document.getElementById('otherChat').checked &&
			chatDetails.value === ''
		) {
			messages.push(
				'What other action do you want us to take in your Chat settings?'
			);
			chatDetails.classList.add('missing');
			oldEmail.classList.remove('missing');
		}
		// Chat change email with no old email alert
		else if (
			document.getElementById('changeEmailChat').checked &&
			oldEmail.value === ''
		) {
			messages.push('Please fill in your old email');
			oldEmail.classList.add('missing');
			chatDetails.classList.remove('missing');
			triangleDetails.classList.remove('missing');
			activistsDetails.classList.remove('missing');
		}
	}

	// triangle checks
	if (triangle != 'no action') {
		// Triangle other with no details alert
		if (
			document.getElementById('otherTriangle').checked &&
			triangleDetails.value === ''
		) {
			messages.push(
				'What other action do you want us to take in your Triangle settings?'
			);
			triangleDetails.classList.add('missing');
			oldEmail.classList.remove('missing');
		}
		// Triangle change email with no old email alert
		else if (
			document.getElementById('changeEmailTriangle').checked &&
			oldEmail.value === ''
		) {
			messages.push('Please fill in your old email');
			oldEmail.classList.add('missing');
			chatDetails.classList.remove('missing');
			triangleDetails.classList.remove('missing');
			activistsDetails.classList.remove('missing');
		}
	}

	// Activists checks
	if (activists != 'no action') {
		// Activists other with no details alert
		if (
			document.getElementById('otherActivists').checked &&
			activistsDetails.value === ''
		) {
			messages.push(
				'What other action do you want us to take in your Activists settings?'
			);
			activistsDetails.classList.add('missing');
			oldEmail.classList.remove('missing');
		}
		// Activists change email with no old email alert
		else if (
			document.getElementById('changeEmailActivists').checked &&
			oldEmail.value === ''
		) {
			messages.push('Please fill in your old email');
			oldEmail.classList.add('missing');
			chatDetails.classList.remove('missing');
			triangleDetails.classList.remove('missing');
			activistsDetails.classList.remove('missing');
		}
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
		showJoining();
		if (document.forms.please.chatAction.value === 'subscribe Chat') {
			chatDetails.style.display = 'none';
			chatEmails.style.display = 'none';
			oldEmailDisplay();
		} else if (
			document.forms.please.chatAction.value === 'unsubscribe Chat'
		) {
			chatDetails.style.display = 'none';
			chatEmails.style.display = 'none';
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
			oldEmailDisplay();
		} else {
			chatDetails.style.display = 'none';
			chatEmails.style.display = 'none';
			oldEmailDisplay();
		}
	});
});

// triangle action radio button reactions
document.forms.please.triangleAction.forEach((radio) => {
	radio.addEventListener('change', () => {
		showJoining();
		if (
			document.forms.please.triangleAction.value === 'subscribe Triangle'
		) {
			triangleDetails.style.display = 'none';
			triangleEmails.style.display = 'none';
			oldEmailDisplay();
		} else if (
			document.forms.please.triangleAction.value ===
			'unsubscribe Triangle'
		) {
			triangleDetails.style.display = 'none';
			triangleEmails.style.display = 'none';
			oldEmailDisplay();
		} else if (
			document.forms.please.triangleAction.value ===
			'change email Triangle'
		) {
			triangleDetails.style.display = 'none';
			triangleEmails.style.display = 'block';
			triggerOldEmailDisplay = 'doso';
			oldEmailDisplay();
		} else if (
			document.forms.please.triangleAction.value === 'other Triangle'
		) {
			triangleDetails.style.display = 'block';
			triangleEmails.style.display = 'none';
			oldEmailDisplay();
		} else {
			triangleDetails.style.display = 'none';
			triangleEmails.style.display = 'none';
			oldEmailDisplay();
		}
	});
});

// activists action radio button reactions
document.forms.please.activistsAction.forEach((radio) => {
	radio.addEventListener('change', () => {
		showJoining();
		if (
			document.forms.please.activistsAction.value ===
			'subscribe Activists'
		) {
			activistsDetails.style.display = 'none';
			activistsEmails.style.display = 'none';
			oldEmailDisplay();
		} else if (
			document.forms.please.activistsAction.value ===
			'unsubscribe Activists'
		) {
			activistsDetails.style.display = 'none';
			activistsEmails.style.display = 'none';
			oldEmailDisplay();
		} else if (
			document.forms.please.activistsAction.value ===
			'change email Activists'
		) {
			activistsDetails.style.display = 'none';
			activistsEmails.style.display = 'block';
			triggerOldEmailDisplay = 'doso';
			oldEmailDisplay();
		} else if (
			document.forms.please.activistsAction.value === 'other Activists'
		) {
			activistsDetails.style.display = 'block';
			activistsEmails.style.display = 'none';
			oldEmailDisplay();
		} else {
			activistsDetails.style.display = 'none';
			activistsEmails.style.display = 'none';
			oldEmailDisplay();
		}
	});
});

// Joining panel
function showJoining() {
	if (
		document.getElementById('subscribeChat').checked ||
		document.getElementById('subscribeTriangle').checked ||
		document.getElementById('subscribeActivists').checked
	) {
		joining.style.display = 'block';
	} else joining.style.display = 'none';
}

// display oldEmail in top section if any "change my email" radio is checked
function oldEmailDisplay() {
	if (triggerOldEmailDisplay === 'doso') {
		oldEmailDiv.style.display = 'block';
	} else {
		oldEmailDiv.style.display = 'none';
	}
}

// echo emails from top into each list section
email.onblur = function () {
	nowMailChat.value = this.value;
	nowMailTriangle.value = this.value;
	nowMailActivists.value = this.value;
};
oldEmail.onblur = function () {
	oldEmailChat.value = this.value;
	oldEmailTriangle.value = this.value;
	oldEmailActivists.value = this.value;
};

// reset form
form.addEventListener('reset', (e) => {
	error.style.display = 'none';
	oldEmailDiv.style.display = 'none';
	chatDetails.style.display = 'none';
	chatEmails.style.display = 'none';
	triangleDetails.style.display = 'none';
	triangleEmails.style.display = 'none';
	activistsDetails.style.display = 'none';
	activistsEmails.style.display = 'none';
});

// test - always prints to console
// document.getElementById('test').onclick = function () {
// 	if (chat || traingle || activists) {
// 		console.log('You have not asked us to change anything!');
// 	}
// };

// test - never prints to console
// document.getElementById('test').onclick = function () {
// 	if (!chat || !triangle || !activists) {
// 		console.log('You have not asked us to change anything!');
// 	}
// };

// test - always prints to console
// document.getElementById('test').onclick = function () {
// 	if (chat && triangle && activists) {
// 		console.log('You have not asked us to change anything!');
// 	}
// };

// test - never prints to console
// document.getElementById('test').onclick = function () {
// 	if (!chat && !triangle && !activists) {
// 		console.log('You have not asked us to change anything!');
// 	}
// };

// test - always prints to console
// document.getElementById('test').onclick = function () {
// 	if (chat == true && triangle == true && activists == true) {
// 		console.log('You have not asked us to change anything!');
// 	}
// };

// // test - always prints 'nothing' to console
// document.getElementById('test').onclick = function () {
// 	console.log(chat + ' ' + triangle + ' ' + activists);
// 	if (
// 		chat === 'no action' &&
// 		triangle === 'no action' &&
// 		activists === 'no action'
// 	) {
// 		console.log('nothing');
// 	}
// };

// test - WORKS!!
// document.getElementById('test').onclick = function () {
// 	var x = document.querySelector('input[name="chatAction"]:checked').value;
// 	var y = document.querySelector('input[name="triangleAction"]:checked')
// 		.value;
// 	var z = document.querySelector('input[name="activistsAction"]:checked')
// 		.value;
// 	console.log(x + ' ' + y + ' ' + z);
// 	if (x === 'no action' && y === 'no action' && z === 'no action') {
// 		console.log('nothing');
// 	}
// };
