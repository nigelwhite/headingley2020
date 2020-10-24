const form = document.getElementById('please');
const errorElement = document.getElementById('error');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const nowMail = document.getElementById('nowMail');
const oldEmail = document.getElementById('oldEmail');
const otherChat = document.getElementById('chatDetails');

// chat action radio buttons

document.forms.please.chatAction.forEach((radio) => {
	radio.addEventListener('change', () => {
		// console.log(`${document.forms.please.chatAction.value}`);
		if (document.forms.please.chatAction.value === 'other') {
			otherChat.style.display = 'block';
		} else {
			otherChat.style.display = 'none';
		}
		console.log(document.forms.please.chatAction.value);
	});
});

// chat action echo current email

email.onblur = function () {
	nowMail.value = this.value;
};

// validate the form
form.addEventListener('submit', (e) => {
	let messages = [];
	if (fname.value === '' || fname.value == null) {
		messages.push('First name is required');
	}

	if (fname.value.length <= 1) {
		messages.push('First name must be more than 1 character');
	}

	if (lname.value === '' || lname.value == null) {
		messages.push('Last name is required');
	}

	if (lname.value.length <= 4) {
		messages.push('Last name must be more than 4 characters');
	}

	if (messages.length > 0) {
		e.preventDefault();
		error.style.display = 'block';
		errorElement.innerHTML = '<div id="idChild"> Ooops! <br /></div>';
		errorElement.innerText += messages.join(', ');
	}
});
