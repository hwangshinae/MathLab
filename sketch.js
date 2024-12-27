function setup() {
  createCanvas(windowWidth, windowHeight);

  size = 20;
  degree = 0;
}

function degreeToRad(degree) {
  return (degree * Math.PI) / 180;
}

for (i = 0; i < 100; i++) {
  function draw() {
    background('black');
    translate(width / 2, height / 2);
    /* degree = degree + 10;
    fill('white');
    circle(size * degreeToRad(degree), -size / 2, 40);

    fill('yellow');
    //circle(0, 0, 200);
    circle(
    size * degreeToRad(degree) - size * sin(degreeToRad(degree)),
    -size + size * cos(degreeToRad(degree)),
    10
    );*/
    fill('white');
    circle(0, 0, 200);

    fill('yellow');
    circle(200 * Math.cos(degreeToRad(i)), 200 * Math.sin(degreeToRad(i)), 10);
  }
}
