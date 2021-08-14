  var spaceBackground; 
  var manImage;
  var zombieImage;
  var manHoldingCamera;
  var spaceRocket;
  var spaceImage;
  var zombieWorld;
  var rocket;
  var man;
  
  function preload(){
    spaceBackground = loadImage("SpaceArea.JPG");
    manImage = loadImage("man.png");
    zombieImage = loadImage("zombie.png");
    manHoldingCamera =loadImage("camera.png");
    spaceRocket =loadImage("rocket.png");
    spaceImage = loadImage("space.jpg");
    zombieWorld = loadImage("world.jpg");



  }
  
  function setup() 
  {
    createCanvas(800, 800);

    man = createSprite(400,550,1,1);
    man.addImage(manImage);
  }

  function draw() {
    // background("black");
    background(spaceBackground);
  

    if(keyDown("SPACE"))
    {
    //  image(spaceImage,0,0,800,800);
    background(spaceImage)
   
      //rocket = createSprite(680,100,10,10);
      image(spaceRocket,10,10,10,10);
      //createImage(10,10);

      //spaceBackground.hide; 
    }
      if(rocket && rocket.isTouching(anyEdge)){
      image(zombieWorld,0,0,800,800);
      image(manHoldingCamera,0,0,20,20);
    }
  
    drawSprites();
  }