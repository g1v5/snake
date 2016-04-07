var width = window.innerWidth;
var height = window.innerHeight;

var svg2 = document.getElementById("svg2");
var svgWidth = svg2.getAttribute("width");
var svgHeight = svg2.getAttribute("height");

// Adjust svg width and height

svg2.setAttribute("width", width);
svg2.setAttribute("height", height);

var difX = width/svgWidth;
var difY = height/svgHeight;

if(difX < difY) {

	var scaleF = difX;

} else {

	var scaleF = difY;

}

var layer1 = document.getElementById("layer1");
//var layer2 = document.getElementById("layer2");

// Adjust svg scale

try {

	layer1.setAttribute("transform", "scale(" + scaleF + " " + scaleF + ")");
	layer2.setAttribute("transform", "scale(" + scaleF + " " + scaleF + ")");
	
} catch(e) {}

this.level.scaleX = scaleF;
this.level.scaleY = scaleF;

$(this.svgObject).hide();
