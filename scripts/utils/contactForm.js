function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const firstname = document.querySelector('#first_name');
const lastname = document.querySelector('#last_name');
const email = document.querySelector('#email');
const messageform = document.querySelector('#message_form');

function printdata() {
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(messageform.value);
}

const contactbtn = document.querySelector('#contact_button');
contactbtn.addEventListener("click", validateSubmit);

function validateSubmit(){  
      closeModal();
      printdata();
    }
