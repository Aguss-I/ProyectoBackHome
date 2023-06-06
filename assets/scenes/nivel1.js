export default class nivel1 extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("nivel1");
  }

  init() {}

  preload() {
    this.load.tilemapTiledJSON("nivel1", "./public/tilemaps/nivel1.json");
    this.load.image("tilesFondo", "./public/Images/Fondonivel1.png");
  }

  create() {
    const map = this.make.tilemap({ key: "nivel1" });
    //Primero se pone el nombre del conjunto del tile (fondo). Luego, el nombre de la key de la imagen precargada (tilesFondo)
    const capaFondo = map.addTilesetImage("fondo", "tilesFondo");
    const fondoLayer = map.createLayer("fondo", capaFondo, 0, 0);
  }

  update() {}
}
