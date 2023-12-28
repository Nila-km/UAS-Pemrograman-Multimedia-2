async function getData() {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = await response.json();

  let tab = "";
  data.entries.forEach(function (isi) {
    tab += `
      <tr>
        <td>${isi.API}</td>
        <td>${isi.Description}</td>
        <td>${isi.Link}</td>
      </tr>
    `;
  });
  document.getElementById("tbody").innerHTML = tab;

  $("#dataTable").DataTable({
    data: data.entries,
    columns: [{ data: "API" }, { data: "Description" }, { data: "Link" }],
    searching: true, // Enable searching
  });
}

// Call the function to retrieve and display data
getData();
