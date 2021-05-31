const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const submit = document.getElementById("submit");

const database = firebase.database();

submit.addEventListener('click', (e) =>{
	e.preventDefault();

database.ref('/users/' + id.value).set({

	fname: name.value,
	femail: email.value, 
	fmessage: message.value 


});

});

