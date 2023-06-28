export default class precarga extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("precarga");
    }


init(){
  
}


preload() {
  
    this.load.image("tilesPlataforma", "./public/Images/plataforma.png");
    this.load.image("tacho", "./public/Images/Tacho.png");
    this.load.image("caja", "./public/Images/Caja.png");

    this.load.tilemapTiledJSON("nivel1", "./public/tilemaps/Nivel1.json");
    this.load.tilemapTiledJSON("nivel2", "./public/tilemaps/nivel2.json");
    this.load.image("tilesFondo", "./public/Images/Fondonivel1.png");
    
      
    this.load.spritesheet("jugador", "./public/Images/perrito.png", {
      frameWidth: 152,
      frameHeight: 149,
    });
    this.load.image("perder","./public/Images/pantallaperder.png");
    this.load.image("bPerder","./public/Images/Reintentar.png");
    this.load.image("salida","./public/Images/Letrero.png");
    this.load.image("corazon","./public/Images/corazon.png");
    this.load.image("corazon2","./public/Images/corazon2.png");
    this.load.image("corazon3","./public/Images/corazon3.png");
    this.load.image("menuprincipal","./public/Images/MenúPrincipalB.png");
    this.load.image("Menuprincipalpantalla","./public/Images/MenúPrincipal.png");
    this.load.image("botonjugar","./public/Images/BotonJugar.png");
    this.load.image("botoncreditos","./public/Images/BotonCreditos.png");
    this.load.image("pantallacreditos","./public/Images/Pantallacreditos.png");
    this.load.image("flechasalir","./public/Images/flechasalir.png");
    this.load.image("botontutorial","./public/Images/BotonTutorial.png");
    this.load.image("pantallatutorial","./public/Images/Tutorial.png");
    this.load.image("Carteles","./public/Images/carteles.png");
    this.load.image("tilesFondo2","./public/Images/nivel 2.png");
    this.load.image("Siguientenivel","./public/Images/Pantallaganar.png");
    this.load.image("Bsiguientenivel","./public/Images/BotonSiguienteNivel.png");
    this.load.image("hidrante","./public/Images/Hidrante.png");
    this.load.image("perder2","./public/Images/pantallaperder2.png");
    this.load.image("final","./public/Images/casa.png");
    this.load.video("presentacion","./public/Images/Videoprecarga.mp4");
    this.load.image("pantallafinal","./public/Images/Final.png");
   
    
}
create(){
  
  
  

  
    this.anims.create({
        key: "caminata",
        frames: this.anims.generateFrameNumbers("jugador", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      });
      this.anims.create({
        key: "salto",
        frames: [{ key: "jugador", frame: 2 }],
        frameRate: 10,
      });
     
      this.anims.create({
        key: "choque",
        frames: [{ key: "jugador", frame: 3 }],
        frameRate: 10,
        
        
      });
      let preloaderCutscene = this.add.video(400, 300, "presentacion").setInteractive();

    const scaleWidth = this.cameras.main.width / preloaderCutscene.width;
    const scaleHeight = this.cameras.main.height / preloaderCutscene.height;
    const scaleFactor = Math.min(scaleWidth, scaleHeight);

    preloaderCutscene.setScale(scaleFactor);

    preloaderCutscene.play() 

    preloaderCutscene.on('complete', () => {
      this.scene.start("menuprincipalpantalla");
    });

    preloaderCutscene.on('pointerdown', () => {
      this.scene.start("menuprincipalpantalla");
    });
      
    
      
    
      
      
}
}