/*
File: cena5.js
Author: Bruna Silveira (IFSC)
Date: 10 / 04 / 2021
Brief: fourth import archive.
*/

// [Bruna] importando a cena seguinte do arquivo;
import { cena6 } from "./cena6.js";

// Adicionando variáveis ao código para execução da transição de cena.
var cena5 = new Phaser.Scene("Cena 5");

// [Bruna] Iniciando a função Preload, para carregar os arquivos iniciais da cena;
cena5.preload = function () {
  // [Bruna] Carregando imagens para a cena.
  this.load.image("sky", "./assets/win3.png");

  // [Bruna] Incluindo a imagem de fundo a cena.
  this.add.image(400, 300, "sky");
};

// [Bruna] Criando função para executar o comando de troca de cena.
cena5.create = function () {
  var button = this.add.image(400, 300, "sky", 0).setInteractive();
  button.on(
    "pointerdown",

    // [Bruna] Ao executar a função abaixo, a cena atual inicia a cena1.
    function () {
      this.scene.start(cena6);
    },
    this
  );
};

export { cena5 };