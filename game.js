var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400,400,{backgroundColor: 0x000000});
gameport.appendChild(renderer.view);


var stage = new PIXI.Container();
var texture = PIXI.Texture.fromImage("slime_sprite.png");

var sprite = new PIXI.Sprite(texture);

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);

function keydownEventHandler(e){

   if(e.keyCode == 87) //w key
   {
      sprite.position.y -=10;
   }
   if(e.keyCode == 83) //s key
   {
      sprite.position.y +=10;
   }
   if(e.keyCode == 65) //w key
   {
      sprite.position.x -=10;
   }
   if(e.keyCode == 68) //w key
   {
      sprite.position.x +=10;
   }
}

document.addEventListener('keydown', keydownEventHandler);


function animate()
{
   requestAnimationFrame(animate);
   //sprite.rotation +=0.1;
   renderer.render(stage);
}
animate();
