var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x000033});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var planet_a = new PIXI.Sprite(PIXI.Texture.fromImage("planet_a.png"));
var planet_b = new PIXI.Sprite(PIXI.Texture.fromImage("planet_b.png"));
var moon_a = new PIXI.Sprite(PIXI.Texture.fromImage("moon_a.png"));
var sun = new PIXI.Sprite(PIXI.Texture.fromImage("sun.png"));

// Create the Solar system and add it to the stage
var solar_system = new PIXI.Container();
solar_system.position.x = 200;
solar_system.position.y = 200;
stage.addChild(solar_system);

// Add the Sun to the solar system
solar_system.addChild(sun);
sun.anchor.x = 0.5;
sun.anchor.y = 0.5;
sun.position.x = 0;
sun.position.y = 0;

// Create the first planet system and add it to the stage
var planet_a_system = new PIXI.Container();
planet_a_system.position.x = 100;
planet_a_system.position.y = 75;
solar_system.addChild(planet_a_system);

// Add planet_a to the planet_a_system
planet_a_system.addChild(planet_a);
planet_a.anchor.x = 0.5;
planet_a.anchor.y = 0.5;
planet_a.position.x = 0;
planet_a.position.y = 0;

// Add a moon to planet_a
planet_a_system.addChild(moon_a);
moon_a.anchor.x = 0.5;
moon_a.anchor.y = 0.5;
moon_a.position.x = 40;
moon_a.position.y = 30;

// Add planet_b to the solar system
solar_system.addChild(planet_b);
planet_b.anchor.x = 0.5;
planet_b.anchor.y = 0.5;
planet_b.position.x = 35;
planet_b.position.y = -45;

function animate() {
  requestAnimationFrame(animate);

  // Rotate the planets
  planet_a_system.rotation += 0.025;
  planet_b.rotation += 0.05;
  moon_a.rotation += 0.05;

  // Rotate the Solar system
  solar_system.rotation += 0.01;

  renderer.render(stage);
}
animate();
