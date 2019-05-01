// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the submit button
var submit = d3.select("#filter-btn");


submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  //Clear table
  document.getElementById("tbody").innerHTML = "";

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  
  var filteredData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);
  
  
  //Update each cell's text with values
  // Append a cell to the row for each value in the object
  filteredData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});



  

