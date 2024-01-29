function checkForm() {
   const name = document.getElementById('fullName');
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const passwordConfirm = document.getElementById('passwordConfirm');
   const error = document.getElementById('formErrors');
   let errorsFound = false;
 
   // Reset the form errors and input styles
   error.style.display = 'none';
   name.style.border = '1px solid #aaa';
   email.style.border = '1px solid #aaa';
   password.style.border = '1px solid #aaa';
   passwordConfirm.style.border = '1px solid #aaa';
 
   // Remove existing error messages
   while (error.firstChild) {
     error.removeChild(error.firstChild);
   }
 
   if (!name.value) {
     errorsFound = true;
     name.style.border = '2px solid red';
     error.style.display = 'block';
     const nameErr = document.createElement('li');
     nameErr.textContent = 'Missing full name.';
     error.appendChild(nameErr);
     name.classList.add('error');
   }
 
   if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
     errorsFound = true;
     email.style.border = '2px solid red';
     error.style.display = 'block';
     const emailErr = document.createElement('li');
     emailErr.textContent = 'Invalid or missing email address.';
     error.appendChild(emailErr);
     email.classList.add('error');
   }
 
   if (password.value.length < 10 || password.value.length > 20) {
     errorsFound = true;
     password.style.border = '2px solid red';
     error.style.display = 'block';
     const passwordError1 = document.createElement('li');
     passwordError1.textContent = 'Password must be between 10 and 20 characters.';
     error.appendChild(passwordError1);
     password.classList.add('error');
   }
 
   if (!/[a-z]/.test(password.value)) {
     errorsFound = true;
     password.style.border = '2px solid red';
     error.style.display = 'block';
     const passwordError2 = document.createElement('li');
     passwordError2.textContent = 'Password must contain at least one lowercase character.';
     error.appendChild(passwordError2);
     password.classList.add('error');
   }
 
   if (!/[A-Z]/.test(password.value)) {
     errorsFound = true;
     password.style.border = '2px solid red';
     error.style.display = 'block';
     const passwordError3 = document.createElement('li');
     passwordError3.textContent = 'Password must contain at least one uppercase character.';
     error.appendChild(passwordError3);
     password.classList.add('error');

   }
 
   if (!/[0-9]/.test(password.value)) {
     errorsFound = true;
     password.style.border = '2px solid red';
     error.style.display = 'block';
     const passwordError4 = document.createElement('li');
     passwordError4.textContent = 'Password must contain at least one digit.';
     error.appendChild(passwordError4);
     password.classList.add('error');
     passwordConfirm.classList.add('error');
   }
 
   if (passwordConfirm && password.value !== passwordConfirm.value) {
     errorsFound = true;
     password.style.border = '2px solid red';
     passwordConfirm.style.border = '2px solid red';
     error.style.display = 'block';
     const passwordError5 = document.createElement('li');
     passwordError5.textContent = 'Password and confirmation password don\'t match.';
     error.appendChild(passwordError5);
     password.classList.add('error');

     passwordConfirm.classList.add('error');

   }
 
   if (errorsFound === false) {
      error.style.display = 'none';
      error.classList.add('hide');
      // Remove the "error" class from the input fields if there are no errors
      name.classList.remove('error');
      email.classList.remove('error');
      password.classList.remove('error');
      passwordConfirm.classList.remove('error');
   }
 }


document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});