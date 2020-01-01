$(function() {
  $("#passwordValidation").submit(function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var passwordREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/;
    var passwordResult = passwordREGEX.test(password);
    if (passwordResult === false) {
      $("#passwordOutput").text(
        "Password is invalid. Please enter a new password."
      );
    } else {
      $("#passwordOutput").text("Password is valid.");
    }
  });
  $("#urlValidation").submit(function(event) {
    event.preventDefault();
    var url = document.getElementById("url").value;
    var urlREGEX = /^(http|https|ftp):[\/]{2}([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,4})(:[0-9]+)?\/?([a-zA-Z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~]*)/;
    var urlResult = urlREGEX.test(url);
    if (urlResult === false) {
      $("#urlOutput").text(
        "URL is invalid. Please enter a new URL."
      );
    } else {
      $("#urlOutput").text("URL is valid.");
    }
  });
});
