// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Select the table body
var tableBody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Remove table if one exists
  d3.selectAll("td").remove()

 // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Fix date formating to accept zeros
  var parseTime = d3.timeParse("%-m/%-d/%Y");
  var parseDate = d3.timeFormat("%-m/%-d/%Y");

  // Filter Data
  var filtered = tableData.filter(siting => siting.datetime === parseDate(parseTime(inputValue)));

  // Print data to the screen if available
  if (filtered.length > 0 ){
    filtered.forEach( siting =>{
      var tr = tableBody.append("tr")
      
      Object.entries(siting).forEach(([key, value]) =>{
          var td=tr.append("td")
          td.text(value)
      });
    });
  }
  else{
    var tr = tableBody.append("tr").append("td").text(" No Data Found. Please modify your search.").style("color", "red");
  }



};