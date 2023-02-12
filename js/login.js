//step 1: add click event handler with the submit button 
document.getElementById('button-submit').addEventListener('click', function () {
    // step 2: get the email from email input fleid 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   // step 3: get password
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
//    console.log(password);
if (email === 'zisan@bank.com' && password === 'zisanpass') {
    window.location.href = 'bank.html';

    
}
else{

   alert('vul ache kisu');
}
})

