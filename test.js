const form = document.getElementById('please');
const errorElement = document.getElementById('error');
// main items
const fname = document.getElementById('fname');

function validateRadio(radios) {
	for (i = 0; i < radios.length; ++i) {
		if (radios[i].checked) return true;
	}
	return false;
}

function validateForm() {
	let messages = [];

	// first name alerts
	if (fname.value === '' || fname.value == null) {
		messages.push('First name is required');
		fname.classList.add('missing');
	} else if (fname.value.length <= 1) {
		messages.push('First name must be more than 1 character');
		fname.classList.add('missing');
	} else if (!validateRadio(document.forms['please']['perspective'])) {
		messages.push(
			'What other action do you want us to take in your Activists settings?'
		);
	}

	// if there are any errors, show the error block with the error messages in it
	if (messages.length > 0) {
		error.style.display = 'block';
		errorElement.innerHTML = '<div id="idChild"> Ooops! <br /></div>';
		errorElement.innerText += messages.join(', ');
		return false;
	}
}
