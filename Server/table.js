const fs = require("fs");

function processList() {
  const data = fs.readFileSync("./addmissionList.csv", "utf-8", finishCallBack);

  let lines = data.split("\n");
  let result = [];

  for (let x = 0; x < lines.length; x++) {
    let eachUser = lines[x].split(",");

    result.push({
      ctratedAt: eachUser[0],
      FullName: eachUser[1],
      FathersName: eachUser[2],
      Email: eachUser[3],
      PhoneNumber: eachUser[4],
      MatricResult: eachUser[5],
      Stream: eachUser[6],
    });
  }
  /*  let result = lines.map(function (line) {
    return line.split(",");
    
  });*/

  return result;
}

function finishCallBack(err) {
  if (err) {
    console.error(err);
  }
}

module.exports = { processList: processList };
