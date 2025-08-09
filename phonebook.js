let phonebook = [];

function getPhonebook(){

	return phonebook;

}

function getContact(contact){

   phonebook.push(contact);

}

functions.export = {
	getPhonebook,
	getContact
};
