export default class tutorial extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("tutorial");
  }
  create(){
    this.add.image(400,300,"pantallatutorial");
    let botonS= this.add.image(190,460,"flechasalir").setInteractive().setScale(0.6)
    botonS.on("pointerover", () => {
        botonS.setTint("#ffffff");
    });
  
    botonS.on("pointerout", () => {
        botonS.clearTint();
    });
      botonS.on("pointerdown", () => {
        
         this.scene.start("menuprincipalpantalla");})
  }
}
