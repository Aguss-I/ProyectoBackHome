export default class Siguientenivel extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("siguientenivel");
    }
  
  

 create(){
    this.add.image(400,300,"Siguientenivel");
    let botonP = this.add.image(500,450, "Bsiguientenivel").setInteractive().setScale(1.5)
    botonP.on("pointerover", () => {
      botonP.setTint("#ffffff");
  });

  botonP.on("pointerout", () => {
      botonP.clearTint();
  });
    botonP.on("pointerdown", () => {
      this.scene.stop("nivel1")
      
       this.scene.start("nivel2");})
        
    
    let botonM = this.add.image(250,450,"menuprincipal").setInteractive()
    botonM.on("pointerover", () => {
      botonM.setTint("#ffffff");
  });
    botonM.on("pointerout",() => {
      botonM.clearTint();
   });
   botonM.on("pointerdown",()=> {
      this.scene.stop("nivel1")
      this.scene.start("menuprincipalpantalla");
   });
    
 }
 
 

}