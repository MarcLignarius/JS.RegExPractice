$(function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@&$]).{6,12}$/;
    var passwordResult = phoneREGEX.test(phoneNumber);
  alert("password:"+passwordResult );
});
