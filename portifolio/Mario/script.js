// querySelector = puxa por classe e acessa estilizações
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

//Adiciona jump, mas quando cessar a ação, a classe é removida
//arrow function = (propriedades) => {escopo func}
const jump = () => {
    //classList = pega a lista de casses que tem (só .mario)
    //add = adiciona ao mario a classe jump (.mario .jump)
    mario.classList.add("jump");
    //a cada tempo 500ms = mesmo tempo da animação, roda a função (remove .jump)
    setTimeout(()=>{
        mario.classList.remove("jump");
    }, 500);
};

const loop = setInterval(() => {
    //offsetLeft = quando a posição for fora da tela
    const pipePosition = pipe.offsetLeft;
    //na estilização bottom, pega a posição do Mario. .replace remove px para conseguir só o nº
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 112) //&& = E
    {
        pipe.style.animation = "none";
        //Se isso acontecer, para a animação
        pipe.style.left = `${pipePosition}px`;
        //Posição do cano quando parar a animação -- se não volta pro inicio ou continua rodando

        mario.style.animation = "none";
        //Se isso acontecer, para a animação
        mario.style.bottom = `${marioPosition}px`;
        //Posição do Mario quando parar a animação -- se não volta pro inicio

        mario.src = "images/game-over.png";
        //Troca imagem do Mario, dele correndo pro Game Over
        mario.style.width = "75px";
        mario.style.marginLeft="50px";

        clouds.style.animation = "none";
        //Se isso acontecer, para a animação
        clouds.style.left = `${cloudsPosition}px`;
        //Posição da núvem quando parar a animação -- se não volta pro inicio ou continua rodando
    }

},10);

//Executa ação quando uma tecla for acionada
document.addEventListener("keydown", jump);