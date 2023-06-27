export default class Perder2 extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("perder2");
    }
  
    create() {
      this.add.image(400, 300, "perder2");
      let botonP = this.add.image(250, 450, "bPerder").setInteractive();
      botonP.on("pointerover", () => {
        botonP.setTint("#ffffff");
      });
  
      botonP.on("pointerout", () => {
        botonP.clearTint();
      });
      botonP.on("pointerdown", () => {
        this.scene.stop("nivel2")
        this.scene.start("nivel1");
       
        
      });
  
      let botonM = this.add.image(500, 450, "menuprincipal").setInteractive();
      botonM.on("pointerover", () => {
        botonM.setTint("#ffffff");
      });
      botonM.on("pointerout", () => {
        botonM.clearTint();
      });
      botonM.on("pointerdown", () => {
        this.scene.stop("nivel2");
        this.scene.start("menuprincipalpantalla");
      });
    }
    
  }
  