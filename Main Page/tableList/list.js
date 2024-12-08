async function fetchData() {
  fetch("http://localhost:5000/table", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((response) => response.json())
    .then((data) => {
      buildTable(data.csvList);
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
}
fetchData();
function buildTable(list) {
  let table = document.getElementById("myTable");

  for (x = 0; x < list.length; x++) {
    let row = `<tr>    
                      <td>${list[x].ctratedAt}</td>
                      <td>${list[x].FullName}</td>
                      <td>${list[x].FathersName}</td>
                      <td>${list[x].Email}</td>
                      <td>${list[x].PhoneNumber}</td>
                      <td>${list[x].MatricResult}</td>
                      <td>${list[x].Stream}</td>
              </tr>`;
    table.innerHTML += row;
  }
}
//how to add static assects for node js
