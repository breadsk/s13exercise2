
let botones = document.getElementsByClassName("boton-grande");

for(let i = 0;i < botones.length;i++){
     botones[i].setAttribute("class","btn btn-primary boton-grande btn-block");
     botones[i].setAttribute("type","button");
}
