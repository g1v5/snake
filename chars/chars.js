function aaDim(level, svgObject) {

this.type = "aaDim";
this.nr = this.count;
aaDim.prototype.count++;

C.call(this, level, svgObject);

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

}

aaDim.prototype = Object.create(C.prototype);
aaDim.prototype.constructor = aaDim;
aaDim.prototype.count = 0;

function next(level, svgObject) {

this.type = "next";
this.nr = this.count;
next.prototype.count++;

C.call(this, level, svgObject);

//alert("Hier");

}

next.prototype = Object.create(C.prototype);
next.prototype.constructor = next;
next.prototype.count = 0;

next.prototype.update = function(tick)
 {

if(tick == s2t(5)) {

   
    LevelManager.getInstance().startLevel(2);
}


}

