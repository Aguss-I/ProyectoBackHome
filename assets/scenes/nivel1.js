export default class nivel1 extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("nivel1");
  }

  init() {
    this.vida= 3
  }

  preload() {
    this.load.image("tilesPlataforma", "./public/Images/plataforma.png");
    this.load.image("tacho", "./public/Images/Tacho.png");

    this.load.tilemapTiledJSON("nivel1", "./public/tilemaps/Nivel1.json");
    this.load.image("tilesFondo", "./public/Images/Fondonivel1.png");
    this.load.spritesheet("caja", "./public/Images/caja.png", {
      frameWidth: 160,
      frameHeight: 180,
    });
    this.load.spritesheet("jugador","./public/Images/perrito.png",{
      frameWidth: 160,
      frameHeight: 180,
  } )};
  

  create() {
    const map = this.make.tilemap({ key: "nivel1" });
    //Primero se pone el nombre del conjunto del tile (fondo). Luego, el nombre de la key de la imagen precargada (tilesFondo)
    const capaFondo = map.addTilesetImage("fondo", "tilesFondo");
    const capaPlataformas = map.addTilesetImage(
      "plataforma",
      "tilesPlataforma"
    );
    const fondoLayer = map.createLayer("fondo", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer(
      "plataforma",
      capaPlataformas,
      0,
      0
    );
    plataformaLayer.setCollisionByProperty({ colision: true });

    this.obstaculos = this.physics.add.group();
    const objectosLayer = map.getObjectLayer("objetos");
    objectosLayer.objects.forEach((objData) => {
      //console.log(objData.name, objData.type, objData.x, objData.y);

      const { x = 0, y = 0, name } = objData;

      switch (name) {
        case "caja": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          const obstaculo1 = this.obstaculos.create(x, y, "caja", "tacho");
          break;
        }
      }
      switch (name) {
        case "tacho": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          const obstaculo1 = this.obstaculos.create(x, y, "tacho");
          break;
        }
      }
    });

    this.physics.add.collider(this.obstaculos, plataformaLayer);
    let spawnPoint = map.findObject("objetos", (obj) => obj.name === "jugador");
    console.log(spawnPoint);
    // The player and its settings
    this.jugador = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "jugador");
    this.jugador.setCollideWorldBounds(true);
    this.physics.add.collider(this.jugador, plataformaLayer)
    this.physics.add.overlap(this.jugador, this.obstaculos,this.vidamenos,null,this);
    this.cursors = this.input.keyboard.createCursorKeys();
    
    
    this.vidaTexto=this.add.text(40,30,"Vidas:3",{
      fill:"#111111"
    })
    this.cameras.main.startFollow(this.jugador);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.vidaTexto.setScrollFactor(0);
    
    

  }
  update() {
    if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(160);
      this.jugador.anims.play("right", true);
    }
    else if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-160);
      this.jugador.anims.play("left", true);
    }
    else{
      this.jugador.setVelocityX(0);
    } 
    if (this.cursors.space.isDown && this.jugador.body.blocked.down) {
      this.jugador.setVelocityY(-360);
    }
    
  }
  
   vidamenos(jugador,obstaculos){
    obstaculos.disableBody(true,true)
    this.vida--
    this.vidaTexto.setText(
      "Vidas:"+ this.vida
    );
   }
}
