let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaqueteOP = 585;
let yRaqueteOP = 150;
let velocidadeyOP;

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOP, yRaqueteOP);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOP();
  movimentaRaqueteOP();
  incluiPlacar();
  marcaPonto(
