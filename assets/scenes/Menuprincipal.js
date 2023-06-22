export default class menuPrincipal extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("menuprincipalpantalla");
  }

  init() {}

  create() {
    this.add.image(400, 295, "Menuprincipalpantalla");
    let botonJ = this.add.image(390, 350, "botonjugar").setInteractive();
    botonJ.on("pointerover", () => {
      botonJ.setTint("#ffffff");
    });

    botonJ.on("pointerout", () => {
      botonJ.clearTint();
    });
    botonJ.on("pointerdown", () => {
      this.scene.start("nivel1");
    });

    let botonC = this.add.image(600, 500, "botoncreditos").setInteractive();
    botonC.on("pointerover", () => {
      botonC.setTint("#ffffff");
    });

    botonC.on("pointerout", () => {
      botonC.clearTint();
    });
    botonC.on("pointerdown", () => {
      this.scene.pause("menurincipalpantalla");
      this.scene.launch("creditos");
    });
    let botonT = this.add
      .image(190, 500, "botontutorial")
      .setInteractive()
      .setScale(0.9);
    botonT.on("pointerover", () => {
      botonT.setTint("#ffff33");
    });

    botonT.on("pointerout", () => {
      botonT.clearTint();
    });
    botonT.on("pointerdown", () => {
      this.scene.pause("menuprincipalpantalla");

      this.scene.launch("tutorial");
    });
  }
}
