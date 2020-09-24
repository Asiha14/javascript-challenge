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


  // // Get the value property of the input element for date and fix formatting if not null
  var parseTime = d3.timeParse("%-m/%-d/%Y");
  var parseDate = d3.timeFormat("%-m/%-d/%Y");
  var inputValueDate = inputElementDate.property("value");
  if (inputValueDate != ""){
    inputValueDate = parseDate(parseTime(inputValueDate))
  }
  
  // Object to store all input
  var input = new Object();
  input['datetime'] = inputValueDate;
  input['city'] = inputElementCity.property("value").toLowerCase();
  input['state']= inputElementState.property("value").toLowerCase();
  input['country'] = inputElementCountry.property("value").toLowerCase();
  input['shape']= inputElementShape.property("value").toLowerCase();

  // Delete empty input
  Object.entries(input).forEach( ([key,value]) => {
     if(value === ""){   
      delete input[key];
    };
  });
  
  // Filter Data
  var filterData = tableData;
  Object.entries(input).forEach(([key,value]) => {
    filterData = filterData.filter(siting => {
      return siting[key] === value
    });
 });

  // // Print data to the screen if available
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

  console.log(filterData)
};