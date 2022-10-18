//PASSO 1 CRIAR AS VARIÁVEIS
var trex_correndo, trex;
var solo, soloImagem, soloInvisivel;
var nuvem, nuvemImagem;
var cactoimg1, cactoimg2,cactoimg3, cactoimg4, cactoimg5, cactoimg6;

//criar as variáveis para o grupo

//criar as variáveis para os estados de jogo
var JOGAR = 1;
var FIM = 0;
var estadoJogo = JOGAR;

//CARREGAR ARQUIVOS DE MÍDIA
function preload() {
    soloImagem = loadImage("solo.png");
    nuvemImagem = loadImage("nuvem.png");

    cactoimg1 = loadImage("obs1.png");
    cactoimg2 = loadImage("obs2.png");
    cactoimg3 = loadImage("obs3.png");
    cactoimg4 = loadImage("obs4.png");
    cactoimg5 = loadImage("obs5.png");
    cactoimg6 = loadImage("obs6.png"); 

    trex_correndo = loadAnimation("trex1.png", "trex2.png", "trex3.png");
}

function setup() {
    createCanvas(600, 200);
    //trex
    trex = createSprite(50, 180, 50, 50);
    trex.addAnimation("correndo", trex_correndo);
    trex.scale = 0.5;
  
    //solo
    solo = createSprite(300, 190, 600, 20);
    solo.addImage(soloImagem);
    solo.velocityX = -3;

    soloInvisivel = createSprite(300, 199, 600, 2);
    soloInvisivel.visible = false;

    //criar os grupos


}

function draw() {
    background("black");
    

    if(estadoJogo === JOGAR){
        //códigos a serem executados durante o jogo


        
    }
    if(estadoJogo === FIM){ 
        //códigos a serem executados no fim do jogo



    }

    if (solo.x < 0) {
        solo.x = solo.width / 1.99;
    }

    if (keyDown("space") && trex.y > 140) {
        trex.velocityY = -10;
    }

    trex.velocityY += 0.8;

    trex.collide(soloInvisivel);

    gerarNuvens();
    gerarCactos();
  
    drawSprites();

}

function gerarNuvens() {
    if (frameCount % 60 == 0) {
        var y = Math.round(random(1, 100));
        var nuvem = createSprite(600, y, 50, 20);
        nuvem.addImage(nuvemImagem);
        nuvem.velocityX = -3;
        //o tamanho da nuvem é 0.5
        nuvem.scale = 0.5;
        //a nuvem permanece na tela por 206 quadros
        nuvem.lifetime = 206;
        //a profundidade do trex é mais alta que a da nuvem
        trex.depth = nuvem.depth + 1;

        //adicionar a nuvem no grupo de nuvens


    }
}
//código para criar os cactos
function gerarCactos(){
    if(frameCount % 80 == 0){
        var cacto = createSprite(600,170,50,20);
        cacto.velocityX = -3;
        var aleatorio = Math.round(random(1, 6));

        switch(aleatorio){
            case 1:
                cacto.addImage(cactoimg1);
                break;
            case 2:
                cacto.addImage(cactoimg2);
                break;
            case 3:
                cacto.addImage(cactoimg3);
                break;
            case 4:
                cacto.addImage(cactoimg4);
                break;
            case 5:
                cacto.addImage(cactoimg5);
                break;
            case 6:
                cacto.addImage(cactoimg6);
                break;
        }
        cacto.scale = 0.5;

        //adicionar o cacto no grupo de cactos
    }
}