$(function() {
    $("#passwordValidation").submit(function(event){
        event.preventDefault();
        var password = document.getElementById('password').value;
        var passwordREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/;
        var passwordResult = passwordREGEX.test(password);
        if (passwordResult === false) {
            $("#passwordOutput").text("Password is invalid. Please enter a new password.")
        } else {
            $("#passwordOutput").text("Password is valid.")
        }
    });
});
