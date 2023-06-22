import Perder from "./assets/scenes/Perder.js";
import Precarga from "./assets/scenes/Precarga.js";
import nivel1 from "./assets/scenes/nivel1.js";
import Menuprincipal from "./assets/scenes/Menuprincipal.js";
import creditos from"./assets/scenes/creditos.js";
import tutorial from "./assets/scenes/tutorial.js";


// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: true,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Precarga,Menuprincipal,nivel1,Perder,creditos,tutorial],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
