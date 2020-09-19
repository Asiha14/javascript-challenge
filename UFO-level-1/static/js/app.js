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

 // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filtered = tableData.filter(siting => siting.datetime === inputValue);
  console.log(filtered);
  filtered.forEach( siting =>{
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