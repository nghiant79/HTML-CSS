// Your solution goes here 
function isStrongPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    // Check if the password contains "password"
    if (password.toLowerCase().includes("password")) {
      return false;
    }
  
    // Check if the password contains at least one uppercase character
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // If all conditions are met, return true
    return true;
  }
  
  // Example calls to isStrongPassword():
  console.log(isStrongPassword("Qwerty"));          // false - Too short
  console.log(isStrongPassword("passwordQwerty"));  // false - Contains "password"
  console.log(isStrongPassword("qwerty123"));       // false - No uppercase characters
  console.log(isStrongPassword("Qwerty123")); 