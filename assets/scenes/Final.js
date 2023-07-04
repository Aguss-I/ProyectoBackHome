export default class final extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("final");
  }

  init() {}

  create() {
    this.add.image(400, 300, "pantallafinal");
    let botonM = this.add.image(390, 500, "menuprincipal").setInteractive().setSize(4)
    botonM.on("pointerover", () => {
      botonM.setTint("#ffffff");
    });
    botonM.on("pointerout", () => {
      botonM.clearTint();
    });
    botonM.on("pointerdown", () => {
      this.sound.play("sonidoboton");
      this.musicaFinal.stop()
      this.scene.start("menuprincipalpantalla");
    });
    
  }
}
