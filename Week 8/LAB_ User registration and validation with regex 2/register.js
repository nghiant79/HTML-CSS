function checkForm() {
   // Hide error div
   document.getElementById('formErrors').classList.add('hide');
   
   // Remove error class from inputs
   document.getElementById('name').classList.remove('error');
   document.getElementById('email').classList.remove('error');
   document.getElementById('password').classList.remove('error');
   document.getElementById('confirmPassword').classList.remove('error');
 
   let errors = [];
 
   // Validate name
   let name = document.getElementById('name').value;
   if(name.length < 1) {
     errors.push('Missing full name.');
     document.getElementById('name').classList.add('error');
   }
 
   // Validate email
   let email = document.getElementById('email').value;
   let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if(!emailRegex.test(email)) {
     errors.push('Invalid or missing email address.');
     document.getElementById('email').classList.add('error'); 
   }
 
   // Validate password
   let password = document.getElementById('password').value; 
   if(password.length < 10 || password.length > 20) {
     errors.push('Password must be between 10 and 20 characters.');
     document.getElementById('password').classList.add('error');
   }
 
   // Validate password has lowercase
   let lowerCaseRegex = /[a-z]+/;
   if(!lowerCaseRegex.test(password)) {
     errors.push('Password must contain at least one lowercase character.');
     document.getElementById('password').classList.add('error');
   }
 
   // Validate password has uppercase
   let upperCaseRegex = /[A-Z]+/; 
   if(!upperCaseRegex.test(password)) {
     errors.push('Password must contain at least one uppercase character.');
     document.getElementById('password').classList.add('error');
   }
 
   // Validate password has digit
   let digitRegex = /\d+/;
   if(!digitRegex.test(password)) {
     errors.push('Password must contain at least one digit.');
     document.getElementById('password').classList.add('error');
   }
 
   // Validate confirm password
   let confirmPassword = document.getElementById('confirmPassword').value;
   if(password !== confirmPassword) {
     errors.push("Password and confirmation password don't match.");
     document.getElementById('confirmPassword').classList.add('error');
   }
 
   // Show errors or submit form
   if(errors.length > 0) {
     document.getElementById('formErrors').classList.remove('hide');
     document.getElementById('errors').innerHTML = '<ul><li>' + errors.join('</li><li>') + '</li></ul>';
   } else {
     // Submit form
   }
 }

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});