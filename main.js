
let form = window.document.getElementById('fr1');


let resp = window. document.getElementById('resp1');


form.addEventListener("submit",(e)=>{
    e.preventDefault();
let vitorias = Number(form.Vitorias.value);
let derrotas = Number(form.Derrotas.value);
let resultado = vitorias - derrotas
let nivel = "";
     if (resultado <= 0  ){
         alert('erro, o numeros de vitorias tem que ser positivo');
         nivel = "morto"
         }else if (resultado <=10){
          nivel = "Ferro"
         }else if (resultado <=20){
            nivel = "Bronze"
         }else if (resultado <=50){
            nivel = "Prata"
         }else if (resultado <= 80){
            nivel = "Ouro"
         }else if (resultado <= 90){
            nivel = "Diamante"
         }else if(resultado <= 100) {
            nivel ="Lendário"
         }else if (resultado >=101){
            nivel = "Imortal"
         }
         
         
         
         


         resp.innerText = "o heroi tem de saldo de vitorias de " + resultado + " está no nivel " + nivel;
})

