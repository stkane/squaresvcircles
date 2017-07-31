let counter = 0;
let cyVar = 0;
let cxVar = 0;

function dataMaker(array) {
	for(i = 0; i < 1; i++) {
		array.push(i);
	}
}

dataArray = [];

dataMaker(dataArray);

let w = window.innerWidth;
let h = window.innerHeight;

let xPosition = w/2;
let yPosition = h/2;

function getCoords(event) {
  xPosition = event.clientX;
  yPosition = event.clientY;
  xPosition == xPosition - 50;
  yPosition == yPosition - 50;
}

function getCX() {
  cxVar = (Math.random() * w);
}

function getCY() {
  cyVar = (Math.random() * h);
}

function score() {
  if((xPosition >= (cxVar - 25) && xPosition <= (cxVar + 25)) && (yPosition >= (cyVar - 25) && yPosition <= (cyVar + 25))) {
    counter += 1;
  }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var canvas = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var squares = canvas.selectAll("square")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("height", "150")
  .attr("width", "150")
  .attr("x", xPosition)
  .attr("y", yPosition)
  .attr("fill", "none")
  .attr("stroke", "lightyellow")
  .attr("stroke-width", "1.5")
  .attr("box-sizing", "border-box" );

var circles = canvas.selectAll("circle")
      .data(dataArray)
      .enter()
        .append("circle")
        .attr("r", 0)
        .attr("cx", function(d) {return (Math.random() * w)})
        .attr("cy", function(d) {return (Math.random() * h)})
        .attr("fill", getRandomColor())
        .attr("id", function(d) {return "dot" + d});

canvas.on("click", function() {
  getCX();
  getCY();
  getCoords(event);
  squares.transition()
    .duration(1600)
    .attr("x", xPosition - 75)
    .attr("y", yPosition -75)
    .ease("elastic");

  circles.transition()
      .duration(500)
      .delay(1500)
      .attr("r", 0)
      .transition()
      .duration(500)
      .attr("cx", cxVar)
      .attr("cy", cyVar)
      .transition()
      .duration(1000)
      .attr("fill", getRandomColor())
      .attr("r", 50);

  score();
})
