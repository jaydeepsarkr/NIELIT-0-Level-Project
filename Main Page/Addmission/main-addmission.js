function formSubmited(event) {
  event.preventDefault();
  let fullName = document.querySelector("#fullName");
  let email = document.getElementById("username");
  let fatherName = document.getElementById("email");
  let phoneNumber = document.getElementById("phoneNumber");
  let matricDivision = document.getElementById("password");
  let stream = document.getElementById("confirmPassword");

  resetError(fullName);
  resetError(email);
  resetError(fatherName);
  resetError(phoneNumber);
  resetError(matricDivision);
  resetError(stream);

  let admissionDetails = {
    fullName: fullName.value,
    email: email.value,
    fatherName: fatherName.value,
    phoneNumber: phoneNumber.value,
    matricDivision: matricDivision.value,
    stream: stream.value,
  };
  fetch("http://localhost:5000/addmission", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(admissionDetails),
  }).then((result) => {
    var newPageUrl = "./addmissionDone.html";
    window.location.href = newPageUrl;
    console.log(result);
  });
}

function showError(element, message) {
  var errorSpan = document.createElement("span");
  errorSpan.className = "error-message";
  errorSpan.textContent = message;
  element.parentNode.appendChild(errorSpan);
}

function resetError(element) {
  var errorSpan = element.parentNode.querySelector(".error-message");
  if (errorSpan) {
    element.parentNode.removeChild(errorSpan);
  }
}
