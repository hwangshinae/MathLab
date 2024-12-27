function setup() {
  createCanvas(400, 400);

  size = 20;
  degree = 0;
}

function degreeToRad(degree) {
  return (degree * Math.PI) / 180;
}

function draw() {
    background('black');
    translate(width / 2, height / 2);
    degree = degree + 1;
    
    fill('white');
    circle(0, 0, 200);

    fill('yellow');
    circle(120 * Math.cos(degreeToRad(degree)), 120 * Math.sin(degreeToRad(degree)), 40); 
}
