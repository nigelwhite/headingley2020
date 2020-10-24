// validate

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const form = document.getElementById('please');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
	let messages = [];
	if (fname.value === '' || fname.value == null) {
		messages.push('First name is required');
	}

	if (messages.length > 0) {
		e.preventDefault();
		error.style.display = 'block';
		errorElement.innerHTML = '<div id="idChild"> Ooops! <br /></div>';
		errorElement.innerText += messages.join(', ');
	}
});
