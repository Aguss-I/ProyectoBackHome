export default class Perder extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("perder");
    }
  
  

 create(){
    this.add.image(400,300,"perder");
    let botonP = this.add.image(250,450, "bPerder").setInteractive()
    botonP.on("pointerdown", () => {
       this.scene.start("nivel1");})
        
    
    
 }

}