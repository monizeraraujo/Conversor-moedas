

const botao =
document.querySelector('button')

botao.onclick = () => {

var valorEmDolar =
Number(document.querySelector('input').
 value.replace(',','.'))
       

document.querySelector('h2').innerHTML = 'R$ '+(valorEmDolar * 5.52).toFixed(2)

}


// Revisão
// variaveis var int - float - string
// alert - parseInt -  parseFloat - prompt
// operações + somar * multiplicar
// comentario final