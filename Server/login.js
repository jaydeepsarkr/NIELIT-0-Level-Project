const fs = require("fs");

function processlogin(userName, pasword) {
  let information = fs.readFileSync("./SignupList.csv", "utf-8");
  let lines = information.split("\n");
  let result = [];
  let isValid = false;

  for (let x = 0; x < lines.length; x++) {
    let eachUser = lines[x].split(",");
    let allData = {
      Email: eachUser[3],
      Pasword: eachUser[4],
    };

    result.push(allData);

    if (allData.Email == userName && allData.Pasword == pasword) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    console.log("Login successful");
    return true;
  } else {
    console.log("Invalid username or password");
    return false;
  }
}

module.exports = { processlogin: processlogin };
