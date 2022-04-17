var valorSorteado = 0
var chances = 3

randomGenerator();

function chutar(){
  var chute = document.getElementById("chute").value
  var elementoResposta = document.getElementById("resposta")
  
  if ((parseInt(chute) == valorSorteado) && (chances > 0)){
    elementoResposta.innerHTML = "👏🏻Acertou, este era realmente o número"
  }else if((parseInt(chute) > valorSorteado) && (chances > 0)){
    elementoResposta.innerHTML = "😔Errou, o número é mais baixo"
    chances -= 1
  }else if((parseInt(chute) < valorSorteado) && (chances > 0)){
    elementoResposta.innerHTML = "😔Errou, o número é mais alto"
    chances -= 1
  }else if(parseInt(chances) == 0){
    elementoResposta.innerHTML = "😔Que pena, suas chances acabaram, mais sorte da próxima vez"
  }else if(chute == ""){
    elementoResposta.innerHTML = "Insira algum número"
  }else{
    elementoResposta.innerHTML = "Houve um erro inesperado, por favor recarregue a página"
    console.error("Erro inesperado, nenhuma das condições foi atendida, verificar código")
  }
  
  event.preventDefault();
}

function cleanForm(){
  document.getElementById("form").innerHTML = ""
  
}

function randomGenerator(){
  valorSorteado = Math.floor(Math.random() * 11);
}