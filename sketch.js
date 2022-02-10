let j;
function setup() {
  // put setup code here
createCanvas(400,500);
j = 0;
}

function draw() {
  // put drawing code here
  background(200);
  point(200,100);
  line(0,0,100,180);

  strokeWeight(2)
  fill(149,53,83)
  rect(150,100,20,100)
  ellipse(150,120,20,20)

  noStroke
  strokeWeight(4)
  fill(0,0,0)
  triangle(20,20,20,40,60,20)
  arc(50,50,40,40,radians(0),radians(360))
  triangle(120,120,120,140,160,120)
  triangle(40,40,56,80,80,40);

  for (var i = 0; i<=400; i++){
    x = i
    y = 300 + 20*Math.sin(PI*x/20)
    point(x,y)
  }
  var y = 200 + 20*Math.sin(PI*j/20)
  var r = 50 + 20*Math.sin(PI*j/20)
  j += 10
  fill(240,192,35)
  ellipse(300,y,r,r)
}