/*
	new design 
    patterns pink with button
	assigment 6
*/

/* global var */
var bg = "green";
var g = 155;
var columns = 25;
var rows = 25;
var sw = 25;

function setup() {
	createCanvas(windowWidth, windowHeight/2);
	pattern();

	var button = createButton("Save");
	button.mousePressed(saveImage);
	button.style('font-family', 'ariel');
	button.id('my-button');
	button.class('pattern');

	
	var generatePattern = createButton("create pattern");
	generatePattern.mousePressed(pattern);
	generatePattern.class('pattern');

	
	// slider
	createDiv("mag button");
	var columnSlider = createSlider(8, 30, columns);
	columnSlider.input(setColumn);
	
	
	
	createDiv("scramble");
	var colorSlider = createSlider(10, 35, g);
	colorSlider.input(setColor);
	
	
}

function setColumn() {
	columns = this.value();
    sw = map(this.value(), 4, 8, 8, 4);
	pattern();
}

function setColor() {
	g = this.value();
	pattern();
}

function pattern() {
	background("green"); 
    
	var w = width / columns;
	var h = height / rows;
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			
			
			strokeWeight(6);
    var r = random(5);
    if (r > 2) {
                
                
        
    fill("red");
    ellipse(x + w - w/2, y + h - h/2, w/2, h/2); //back circle 
    } else {
        
    stroke(0);
    fill("pink");
    ellipse(x+w/9, y+h/9, w*2, h); //pink circle
            
            
        
    fill("white");
    ellipse(x + w/2, y + h - h*2, w, h/2); //bottom  
                                
            
  
                
				
			}
			
			
		}
	}
}

function saveImage() {
	save("pattern.png");
}









