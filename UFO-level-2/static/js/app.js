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

  d3.selectAll("td").remove()
  d3.select(this)
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

  if (inputValueDate === null){
    var filterDate = tableData;
  }
  else{
    var filterDate = tableData.filter(siting => siting.datetime === inputValueDate);
  };

  if (inputValueCity === null){
    var filterCity = filterDate;
  }
  else{
    var filterCity = filterDate.filter(siting => siting.city === inputValueCity.toLowerCase());
  };

  if (inputValueState === null){
    var filterState = filterCity;
  }
  else{
    var filterState = filterCity.filter(siting => siting.state === inputValueState.toLowerCase());
  };

  if (inputValueCountry === null){
    var filterCountry = filterState;
  }
  else{
    var filterCountry = filterState.filter(siting => siting.country === inputValueCountry.toLowerCase());
  };

  if (inputValueShape === null){
    var filterShape = filterCountry;
  }
  else{
    var filterShape = filterCountry.filter(siting => siting.shape === inputValueShape.toLowerCase());
  };

  console.log(inputValueDate);
  console.log(inputValueCity);
  console.log(inputValueState);
  console.log(inputValueCountry);
  console.log(inputValueShape);
  console.log(filterShape);

  filterShape.forEach( siting =>{
    var tr = tableBody.append("tr")
    
    Object.entries(siting).forEach(([key, value]) =>{
        var td=tr.append("td")
        td.text(value)
    });
  });

    //   people
    //   .filter(person => person.bloodType===inputValue)
    //   .map(person =>person.fullName)
    //   .forEach(name => ul.append("li").text(name))



};