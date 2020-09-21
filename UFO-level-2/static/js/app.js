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
form.on("keypress", function () {
    if (d3.event.keyCode === 13) {
      runEnter();
    };
  });

// Complete the event handler function for the form
function runEnter() {
  // Clear old table if there is one.
  d3.selectAll("td").remove()
  
 // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");
  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");
  // Fix date formating to accept zeros
  var parseTime = d3.timeParse("%-m/%-d/%Y");
  var parseDate = d3.timeFormat("%-m/%-d/%Y");
  // filter data
  var filterData = tableData.filter(siting => {
    return (
      siting.datetime.includes(parseDate(parseTime(inputValueDate))) &&
      siting.city.includes(inputValueCity.toLowerCase())&&
      siting.state.includes(inputValueState.toLowerCase())&&
      siting.country.includes(inputValueCountry.toLowerCase())&&
      siting.shape.includes(inputValueShape.toLowerCase())
    )
  });

  // Print data to the screen if available
  if (filterData.length > 0 ){
    filterData.forEach( siting =>{
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