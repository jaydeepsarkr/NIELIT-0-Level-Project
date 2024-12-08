function signUpSubmit(event) {
  event.preventDefault();
  let firstName = document.querySelector("#name");
  let lastName = document.querySelector("#lastName");
  let email = document.querySelector("#gmail");
  let password = document.querySelector("#pass");

  resetError(firstName);
  resetError(lastName);
  resetError(email);
  resetError(password);

  let signUpDetails = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  console.log(signUpDetails);
  fetch("http://localhost:5000/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(signUpDetails),
  })
    .then((result) => result.json())
    .then((data) => {
      if (data.success) {
        console.log(data.message);
        alert("Sign up successful!");
      } else {
        console.error(data.message);
        alert("Sign up failed: " + data.message);
      }
    });
}

function loginSubmited(event) {
  event.preventDefault();
  let userName = document.querySelector("#usernameOrEmail");
  let pasword = document.querySelector("#usernameOrPassword");

  resetError(userName);
  resetError(pasword);

  let loginDetails = {
    userName: userName.value,
    pasword: pasword.value,
  };
  console.log(loginDetails);
  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(loginDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log(data.message);
        alert("Login successful!  ");
        var newPageUrl = "../tableList/list.html";
        window.location.href = newPageUrl;
      } else {
        console.error(data.message);
        alert(
          "Login Failed. (User not found or incorrect password.)SignUp First"
        );
      }
    });
} //Parsing

function resetError(element) {
  var errorSpan = element.parentNode.querySelector(".error-message");
  if (errorSpan) {
    element.parentNode.removeChild(errorSpan);
  }
}
function showError(element, message) {
  var errorSpan = document.createElement("span");
  errorSpan.className = "error-message";
  errorSpan.textContent = message;
  element.parentNode.appendChild(errorSpan);
}
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}
function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}
