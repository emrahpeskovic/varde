var attempt = 3;

function LogMeIn() {
  var username = document.getElementById("UserId").value;
  var password = document.getElementById("Password").value;
  if (username == "admin" && password == "1234") {
    alert("Du er nu logget ind!");
    window.location = "indbakke.html";
    return false;
  } else {
    attempt--;
    alert("Du har " + attempt + " forsøg tilbage");
    if (attempt == 0) {
      document.getElementById("UserId").disabled = true;
      document.getElementById("Password").disabled = true;
      document.getElementById("Submit").disabled = true;
      return false;
    }
  }
}
