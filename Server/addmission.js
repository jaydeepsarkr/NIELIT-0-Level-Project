const fs = require("fs");

const outputFilePath = "addmissionList.csv";

function writeToFile(
  fullName,
  fathersName,
  email,
  phoneNumber,
  matricDivision,
  stream
) {
  let date = new Date();
  const data = `${date.toISOString()},${fullName},${fathersName},${email},${phoneNumber},${matricDivision},${stream}\n`;
  console.log(data);
  fs.appendFile(outputFilePath, data, "utf8", finishCallBack);
}

function finishCallBack(err) {
  if (err) {
    console.error(err);
  }
}
module.exports = { writeToFile: writeToFile };
