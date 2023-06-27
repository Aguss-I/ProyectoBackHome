export default class nivel2 extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("nivel2");
  }

  init() {
    this.vida = 3;
    this.vida3 = true;
    this.vida2 = true;
    this.vida1 = true;
    this.cuentaRegresiva = 5;
  }

  create() {
    const map = this.make.tilemap({ key: "nivel2" });
    //Primero se pone el nombre del conjunto del tile (fondo). Luego, el nombre de la key de la imagen precargada (tilesFondo)

    const capaFondo = map.addTilesetImage("fondo2", "tilesFondo2");
    const capaCarteles = map.addTilesetImage("carteles", "Carteles");
    const capaPlataformas = map.addTilesetImage(
      "plataforma",
      "tilesPlataforma"
    );

    const fondoLayer = map.createLayer("fondo2", capaFondo, 0, 0);
    const cartelLayer = map.createLayer("carteles", capaCarteles, 0, 0);
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
          const obstaculo1 = this.obstaculos
            .create(x, y, "Caja")
            .setScale(0.7)
            .setSize(120, 120);
          break;
        }
      }
      switch (name) {
        case "tacho": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          const obstaculo1 = this.obstaculos
            .create(x, y, "tacho")
            .setScale(0.7)
            .setSize(120, 150);
          break;
        }
      }
      switch (name) {
        case "hidrante": {
          const obstaculo1 = this.obstaculos
            .create(x, y, "hidrante")
            .setScale(0.8)
            .setSize(110, 130);
          break;
        }
      }
    });

    this.physics.add.collider(this.obstaculos, plataformaLayer);
    let spawnPoint = map.findObject("objetos", (obj) => obj.name === "jugador");
    console.log(spawnPoint);
    // The player and its settings
    this.jugador = this.physics.add.sprite(
      spawnPoint.x,
      spawnPoint.y,
      "jugador"
    );
    this.jugador.body.setSize(130, 145);
    spawnPoint = map.findObject("objetos", (obj) => obj.name === "letrero");
    console.log(spawnPoint);

    this.salida = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "salida");
    spawnPoint = map.findObject("objetos", (obj) => obj.name === "casa");
    this.final = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "final");

    this.physics.add.collider(this.final, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      this.final,
      this.juegoGanado,
      null,
      this
    );

    this.physics.add.collider(this.salida, plataformaLayer);

    this.jugador.setCollideWorldBounds(true);

    this.physics.add.collider(this.jugador, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      this.obstaculos,
      this.vidamenos,
      null,
      this
    );

    this.physics.add.overlap(
      this.jugador,
      this.salida,
      this.nivelSuperado,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.startFollow(this.jugador);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.vida1 = this.add.image(400, 25, "corazon");
    this.vida2 = this.add.image(385, 25, "corazon2");
    this.vida3 = this.add.image(372, 25, "corazon3");
    this.vida3.setScrollFactor(0);
    this.vida2.setScrollFactor(0);
    this.vida1.setScrollFactor(0);
    this.isJumping = false;
    this.cuentaRegresivaTexto = this.add.text(300, 180, "5", {
      fontSize: "300px",
    });
    this.time.addEvent({
      delay: 1000,
      callback: this.timmer,
      callbackScope: this,
      loop: true,
    });
  }
  update() {
    if (this.cursors.space.isDown && this.jugador.body.blocked.down) {
      this.jugador.anims.stop(true);
      this.jugador.anims.play("salto");
      this.jugador.setVelocityY(-700);
      this.isJumping = true;
      if (this.isJumping && this.jugador.body.blocked.down) {
        this.jugador.anims.stop("salto");
        this.isJumping = false;
      }
    }
  }

  vidamenos(jugador, obstaculos) {
    obstaculos.disableBody(true, true);

    this.vida--;
    this.jugador.anims.stop(true);
    this.jugador.anims.play("choque", true);
    if (this.vida == 2) {
      this.vida1.setVisible(false);
    } else if (this.vida == 1) {
      this.vida2.setVisible(false);
    }

    if (this.vida <= 0) {
      this.vida3 = false;
      this.scene.pause("nivel2");
      this.scene.launch("perder2");
    }
    setTimeout(() => {
      this.jugador.anims.stop();
      this.jugador.anims.play("caminata", true);
    }, 100);

    this.isJumping = false;
  }
  timmer() {
    this.cuentaRegresiva--;
    this.cuentaRegresivaTexto.setText(+this.cuentaRegresiva);
    if (this.cuentaRegresiva <= 0) {
      this.jugador.anims.play("caminata", true);
      this.jugador.setVelocityX(500);

      this.cuentaRegresivaTexto.setVisible(false);
    }
  }
  juegoGanado(){
    this.scene.start("final");
  }
}
