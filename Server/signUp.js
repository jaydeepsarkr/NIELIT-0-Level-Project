const fs = require("fs");

const outputFilePath = "SignupList.csv";

function writeToFile(firstName, lastName, email, password) {
  let date = new Date();
  const data = `${date.toISOString()},${firstName},${lastName},${email},${password}\n`;
  console.log(data);

  let information = fs.readFileSync("./SignupList.csv", "utf-8");
  let lines = information.split("\n");
  let result = [];
  let usernameCount = 0;

  for (let x = 0; x < lines.length; x++) {
    let eachUser = lines[x].split(",");
    let allData = {
      Email: eachUser[3],
    };

    result.push(allData);

    if (allData.Email == email) {
      usernameCount++;
    }
  }
  if (usernameCount > 0) {
    console.log("Username already exists. Please choose a different username.");
    return false;
  } else {
    fs.appendFile(outputFilePath, data, "utf8", finishCallBack);
    return true;
  }
}

function finishCallBack(err) {
  if (err) {
    console.error(err);
  }
}
module.exports = { writeToFile: writeToFile };
