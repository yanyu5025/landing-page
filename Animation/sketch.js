
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);

}

function draw() {
    clear();
//  background(255,255,255,);
  stroke(121,33,255);
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX,height);
  ellipseColor = color(121,33,255);
  ellipseColor.setAlpha(250 + 150 * sin(millis() / 1000));
  fill(ellipseColor);
  noStroke(0);
  ellipse(mouseX, mouseY, 50 + 5 * sin(frameCount / 20));
}

