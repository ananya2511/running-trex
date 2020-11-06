var trex, trex_img, ground,ground_img,invisible_ground,clouds_img,clouds_group,obstacle1_img,obstacle2_img,obstacle3_img,obstacle4_img,obstacle5_img,obstacle6_img,obstacle_group
function preload() {
  trex_img=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_img=loadImage("ground2.png")
  clouds_img=loadImage("cloud.png")
  obstacle1_img=loadImage("obstacle1.png")
  obstacle2_img=loadImage("obstacle2.png")
  obstacle3_img=loadImage("obstacle3.png")
  obstacle4_img=loadImage("obstacle4.png")
  obstacle5_img=loadImage("obstacle5.png")
  obstacle6_img=loadImage("obstacle6.png")

}

function setup() {
  createCanvas(600, 200);
  trex=createSprite(20,160,30,20);
  trex.addAnimation("run",trex_img);
  trex.scale=0.5;
  ground=createSprite(300,160,600,10);
  ground.addImage("go",ground_img);
  invisble_ground=createSprite(300,170,600,20);
  invisble_ground.visible=false;
  clouds_group=new Group();
  obstacle_group=new Group();
}

function draw() {
  background(0);
  drawSprites();
  if(keyDown("space")){trex.velocityY=-10}
 trex.velocityY=trex.velocityY+0.9;
  trex.collide(invisble_ground);
ground.velocityX=-5;
  if(ground.x<0){ground.x=ground.width/2}
  spawnClouds();
  spawnObstacles();
}
function spawnClouds(){
 
  if(frameCount%60==0){
  var clouds= createSprite(600,100,10,10)
clouds.velocityX=-2;  
 clouds.addImage("cloud",clouds_img)
  clouds.scale=0.5;
    clouds.y=random(80,120);
    trex.depth=clouds.depth;
    trex.depth=trex.depth+1;
    clouds.lifetime=300;
    clouds_group.add(clouds) 
  }
  
 }
function spawnObstacles(){
  
  if(frameCount%80==0){
    var obstacles= createSprite(600,140,10,10)
obstacles.velocityX=-5;
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1:obstacles.addImage("O1",obstacle1_img)
        break;
        case 2:obstacles.addImage("O2",obstacle2_img)
        break;
        case 3:obstacles.addImage("O3",obstacle3_img)
        break;
        case 4:obstacles.addImage("O4",obstacle4_img)
        break;
        case 5:obstacles.addImage("O5",obstacle5_img)
        break;
        case 6:obstacles.addImage("O6",obstacle6_img)
        break;
        default:break;
        
    }
    obstacles.scale=0.5;  
  }
  }
  


