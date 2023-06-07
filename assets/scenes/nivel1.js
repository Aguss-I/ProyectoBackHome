export default class nivel1 extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("nivel1");
  }

  init() {}
  
  preload() {
    this.load.image("tilesPlataforma","./public/Images/plataforma.png");

    this.load.tilemapTiledJSON("nivel1", "./public/tilemaps/Nivel1.json");
    this.load.image("tilesFondo", "./public/Images/Fondonivel1.png");
    this.load.spritesheet("caja","./public/Images/caja.png",{
      frameWidth: 160,
      frameHeight: 180,
  } )};

  create() {



    const map = this.make.tilemap({ key: "nivel1" });
    //Primero se pone el nombre del conjunto del tile (fondo). Luego, el nombre de la key de la imagen precargada (tilesFondo)
    const capaFondo = map.addTilesetImage("fondo", "tilesFondo");
    const capaPlataformas = map.addTilesetImage("plataforma", "tilesPlataforma");
    const fondoLayer = map.createLayer("fondo", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer(
      "plataforma",
      capaPlataformas,
      0,
      0
    );
    plataformaLayer.setCollisionByProperty({ colision: true });
    
    this.caja = this.physics.add.group();
    const objectosLayer = map.getObjectLayer("objetos");
    objectosLayer.objects.forEach((objData) => {
      //console.log(objData.name, objData.type, objData.x, objData.y);

      const { x = 0, y = 0, name } = objData;
      
      switch (name) {
        case "caja": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          const obstaculo1 = this.caja.create(x, y, "caja");
          break;
          
        }
      }
    });
    this.physics.add.collider(this.caja, plataformaLayer);
    
    
  }
  update() {}
}
