var trex;
var trex_running;


function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.scale = 0.5;

}

function draw() {
  background(180);

  drawSprites()
}
