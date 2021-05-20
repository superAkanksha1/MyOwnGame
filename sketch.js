const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var arrow;
var slingshot;
var score = 0;

function preload() {
  backgroundImg = loadImage("bgImg.jpg");  
  fairyImg = loadImage("fairyImage1.png");
}

function setup() {
  createCanvas(690, 550);
	engine = Engine.create();
	world = engine.world;

  b1 = new VBubble(15,15,15);
  b2 = new VBubble(45,15,15);
  b3 = new VBubble(75,15,15);
  b4 = new VBubble(105,15,15);
  b5 = new VBubble(135,15,15);
  b6 = new VBubble(165,15,15);
  b7 = new VBubble(195,15,15);
  b8 = new VBubble(225,15,15);
  b9 = new VBubble(255,15,15);
  b10 = new VBubble(285,15,15);
  b11 = new VBubble(315,15,15);
  b12 = new VBubble(345,15,15); 
  b13 = new VBubble(375,15,15);
  b14 = new VBubble(405,15,15);
  b15 = new VBubble(435,15,15);
  b16 = new VBubble(465,15,15);
  b17 = new VBubble(495,15,15);
  b18 = new VBubble(525,15,15);
  b19 = new VBubble(555,15,15);
  b20 = new VBubble(585,15,15);
  b21 = new VBubble(615,15,15);
  b22 = new VBubble(645,15,15);
  b23 = new VBubble(675,15,15);

  b24 = new Bbubble(15,45,15);
  b25 = new Bbubble(45,45,15);
  b26 = new Bbubble(75,45,15);
  b27 = new Bbubble(105,45,15);
  b28 = new Bbubble(135,45,15);
  b29 = new Bbubble(165,45,15);
  b30 = new Bbubble(195,45,15);
  b31 = new Bbubble(225,45,15);
  b32= new Bbubble(255,45,15);
  b33 = new Bbubble(285,45,15);
  b34 = new Bbubble(315,45,15);
  b35 = new Bbubble(345,45,15); 
  b36 = new Bbubble(375,45,15);
  b37 = new Bbubble(405,45,15);
  b38 = new Bbubble(435,45,15);
  b39 = new Bbubble(465,45,15);
  b40 = new Bbubble(495,45,15);
  b41 = new Bbubble(525,45,15);
  b42 = new Bbubble(555,45,15);
  b43 = new Bbubble(585,45,15);
  b44 = new Bbubble(615,45,15);
  b45 = new Bbubble(645,45,15);
  b46 = new Bbubble(675,45,15);

  b47 = new Gbubble(15,75,15);
  b48 = new Gbubble(45,75,15);
  b49 = new Gbubble(75,75,15);
  b50 = new Gbubble(105,75,15);
  b51 = new Gbubble(135,75,15);
  b52 = new Gbubble(165,75,15);
  b53 = new Gbubble(195,75,15);
  b54 = new Gbubble(225,75,15);
  b55 = new Gbubble(255,75,15);
  b56 = new Gbubble(285,75,15);
  b57 = new Gbubble(315,75,15);
  b58 = new Gbubble(345,75,15); 
  b59 = new Gbubble(375,75,15);
  b60 = new Gbubble(405,75,15);
  b61 = new Gbubble(435,75,15);
  b62 = new Gbubble(465,75,15);
  b63 = new Gbubble(495,75,15);
  b64 = new Gbubble(525,75,15);
  b65 = new Gbubble(555,75,15);
  b66 = new Gbubble(585,75,15);
  b67 = new Gbubble(615,75,15);
  b68 = new Gbubble(645,75,15);
  b69 = new Gbubble(675,75,15);

  b70 = new RBubble(15,105,15);
  b71 = new RBubble(45,105,15);
  b72 = new RBubble(75,105,15);
  b73 = new RBubble(105,105,15);
  b74 = new RBubble(135,105,15);
  b75 = new RBubble(165,105,15);
  b76 = new RBubble(195,105,15);
  b77 = new RBubble(225,105,15);
  b78 = new RBubble(255,105,15);
  b79 = new RBubble(285,105,15);
  b80 = new RBubble(315,105,15);
  b81 = new RBubble(345,105,15); 
  b82 = new RBubble(375,105,15);
  b83 = new RBubble(405,105,15);
  b84 = new RBubble(435,105,15);
  b85 = new RBubble(465,105,15);
  b86 = new RBubble(495,105,15);
  b87 = new RBubble(525,105,15);
  b88 = new RBubble(555,105,15);
  b89 = new RBubble(585,105,15);
  b90 = new RBubble(615,105,15);
  b91 = new RBubble(645,105,15);
  b92 = new RBubble(675,105,15);

  b93 = new YBubble(15,135,15);
  b94 = new YBubble(45,135,15);
  b95 = new YBubble(75,135,15);
  b96 = new YBubble(105,135,15);
  b97 = new YBubble(135,135,15);
  b98 = new YBubble(165,135,15);
  b99 = new YBubble(195,135,15);
  b100 = new YBubble(225,135,15);
  b101 = new YBubble(255,135,15);
  b102 = new YBubble(285,135,15);
  b103 = new YBubble(315,135,15);
  b104 = new YBubble(345,135,15); 
  b105 = new YBubble(375,135,15);
  b106 = new YBubble(405,135,15);
  b107 = new YBubble(435,135,15);
  b108 = new YBubble(465,135,15);
  b109 = new YBubble(495,135,15);
  b110 = new YBubble(525,135,15);
  b111 = new YBubble(555,135,15);
  b112 = new YBubble(585,135,15);
  b113 = new YBubble(615,135,15);
  b114 = new YBubble(645,135,15);
  b115 = new YBubble(675,135,15);

  shooter = new Arrow(350,450,5);

  slingshot = new SlingShot(shooter.body,{x:350 , y:450});

  Engine.run(engine);
}

function draw() {
  background(backgroundImg);  

  textSize(30)
  stroke(10)
  fill(0);
  text("Score : "+score,550,530);


  // creating slingshot
  slingshot.display();

// creating arrow   
  shooter.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();
  b41.display();
  b42.display();
  b43.display();
  b44.display();
  b45.display();
  b46.display();

  b47.display();
  b48.display();
  b49.display();
  b50.display();
  b51.display();
  b52.display();
  b53.display();
  b54.display();
  b55.display();
  b56.display();
  b57.display();
  b58.display();
  b59.display();
  b60.display();
  b61.display();
  b62.display();
  b63.display();
  b64.display();
  b65.display();
  b66.display();
  b67.display();
  b68.display();
  b69.display();
  b70.display();
  b71.display();
  b72.display();
  b73.display();
  b74.display();
  b75.display();
  b76.display();
  b77.display();
  b78.display();
  b79.display();
  b80.display();
  b81.display();
  b82.display();
  b83.display();
  b84.display();
  b85.display();
  b86.display();
  b87.display();
  b88.display();
  b89.display();
  b90.display();
  b91.display();
  b92.display();
 
  b93.display();
  b94.display();
  b95.display();
  b96.display();
  b97.display();
  b98.display();
  b99.display();
  b100.display();
  b101.display();
  b102.display();
  b103.display();
  b104.display();
  b105.display();
  b106.display();
  b107.display();
  b108.display();
  b109.display();
  b110.display();
  b111.display();
  b112.display();
  b113.display();
  b114.display();
  b115.display();
 
  detectCollision1(shooter,b1);
  detectCollision1(shooter,b2);
  detectCollision1(shooter,b3);
  detectCollision1(shooter,b4);
  detectCollision1(shooter,b5);
  detectCollision1(shooter,b6);
  detectCollision1(shooter,b7);
  detectCollision1(shooter,b8);
  detectCollision1(shooter,b9);
  detectCollision1(shooter,b10);
  detectCollision1(shooter,b11);
  detectCollision1(shooter,b12);
  detectCollision1(shooter,b13);
  detectCollision1(shooter,b14);
  detectCollision1(shooter,b15);
  detectCollision1(shooter,b16);
  detectCollision1(shooter,b17);
  detectCollision1(shooter,b18);
  detectCollision1(shooter,b19);
  detectCollision1(shooter,b20);
  detectCollision1(shooter,b21);
  detectCollision1(shooter,b22);
  detectCollision1(shooter,b23);

  detectCollision2(shooter,b24);
  detectCollision2(shooter,b25);
  detectCollision2(shooter,b26);
  detectCollision2(shooter,b27);
  detectCollision2(shooter,b28);
  detectCollision2(shooter,b29);
  detectCollision2(shooter,b30);
  detectCollision2(shooter,b31);
  detectCollision2(shooter,b32);
  detectCollision2(shooter,b33);
  detectCollision2(shooter,b34);
  detectCollision2(shooter,b35);
  detectCollision2(shooter,b36);
  detectCollision2(shooter,b37);
  detectCollision2(shooter,b38);
  detectCollision2(shooter,b39);
  detectCollision2(shooter,b40);
  detectCollision2(shooter,b41);
  detectCollision2(shooter,b42);
  detectCollision2(shooter,b43);
  detectCollision2(shooter,b44);
  detectCollision2(shooter,b45);
  detectCollision2(shooter,b46);

  detectCollision3(shooter,b47);
  detectCollision3(shooter,b48);
  detectCollision3(shooter,b49);
  detectCollision3(shooter,b50);
  detectCollision3(shooter,b50);
  detectCollision3(shooter,b51);
  detectCollision3(shooter,b52);
  detectCollision3(shooter,b53);
  detectCollision3(shooter,b54);
  detectCollision3(shooter,b55);
  detectCollision3(shooter,b56);
  detectCollision3(shooter,b57);
  detectCollision3(shooter,b58);
  detectCollision3(shooter,b59);
  detectCollision3(shooter,b60);
  detectCollision3(shooter,b61);
  detectCollision3(shooter,b62);
  detectCollision3(shooter,b63);
  detectCollision3(shooter,b64);
  detectCollision3(shooter,b65);
  detectCollision3(shooter,b66);
  detectCollision3(shooter,b67);
  detectCollision3(shooter,b68);
  detectCollision3(shooter,b69);

  detectCollision4(shooter,b70);
  detectCollision4(shooter,b71);
  detectCollision4(shooter,b72);
  detectCollision4(shooter,b73);
  detectCollision4(shooter,b74);
  detectCollision4(shooter,b75);
  detectCollision4(shooter,b76);
  detectCollision4(shooter,b77);
  detectCollision4(shooter,b78);
  detectCollision4(shooter,b79);
  detectCollision4(shooter,b80);
  detectCollision4(shooter,b81);
  detectCollision4(shooter,b82);
  detectCollision4(shooter,b83);
  detectCollision4(shooter,b84);
  detectCollision4(shooter,b85);
  detectCollision4(shooter,b86);
  detectCollision4(shooter,b87);
  detectCollision4(shooter,b88);
  detectCollision4(shooter,b89);
  detectCollision4(shooter,b90);
  detectCollision4(shooter,b91);
  detectCollision4(shooter,b92);

  detectCollision5(shooter,b93);
  detectCollision5(shooter,b94);
  detectCollision5(shooter,b95);
  detectCollision5(shooter,b96);
  detectCollision5(shooter,b97);
  detectCollision5(shooter,b98);
  detectCollision5(shooter,b99);
  detectCollision5(shooter,b100);
  detectCollision5(shooter,b101);
  detectCollision5(shooter,b102);
  detectCollision5(shooter,b103);
  detectCollision5(shooter,b104);
  detectCollision5(shooter,b105);
  detectCollision5(shooter,b106);
  detectCollision5(shooter,b107);
  detectCollision5(shooter,b108);
  detectCollision5(shooter,b109);
  detectCollision5(shooter,b110);
  detectCollision5(shooter,b111);
  detectCollision5(shooter,b112);
  detectCollision5(shooter,b113);
  detectCollision5(shooter,b114);
  detectCollision5(shooter,b115);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX, y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(shooter.body);
  }
}
function detectCollision1(larrow, lpurple){
  VBubbleBodyPosition = lpurple.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y, VBubbleBodyPosition.x, VBubbleBodyPosition.y)

  if(distance<=lpurple.r+larrow.r)
  {
    Matter.Body.setStatic(lpurple.body, false);
    score += 1;
  }
}
function detectCollision2(larrow, lblue){
  BbubbleBodyPosition = lblue.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y, BbubbleBodyPosition.x, BbubbleBodyPosition.y)

  if(distance<=lblue.r+larrow.r)
  {
    Matter.Body.setStatic(lblue.body, false);
    score += 1;
  }
}

function detectCollision3(larrow, lgreen){
  GbubbleBodyPosition = lgreen.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y , GbubbleBodyPosition.x,  GbubbleBodyPosition.y)

  if(distance<=lgreen.r+larrow.r)
  {
    Matter.Body.setStatic(lgreen.body, false);
    score += 1;
  }
}

function detectCollision4(larrow, lred){
  RBubbleBodyPosition = lred.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y , RBubbleBodyPosition.x,  RBubbleBodyPosition.y)

  if(distance<=lred.r+larrow.r)
  {
    Matter.Body.setStatic(lred.body, false);
    score += 1;
  }
}

function detectCollision5(larrow, lyellow){
  YBubbleBodyPosition = lyellow.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y, YBubbleBodyPosition.x, YBubbleBodyPosition.y)

  if(distance<=lyellow.r+larrow.r)
  {
    Matter.Body.setStatic(lyellow.body, false);
    score += 1;
  }
}