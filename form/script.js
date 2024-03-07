var btn = document.querySelectorAll('.botao')[0]
btn.addEventListener('click', calcular)

function calcular(){

  var cx1 = document.querySelectorAll('.numero')[0]
  var cx2 = document.querySelectorAll('.numero')[1]
  // var do paragrafo
  var parag0 = document.querySelectorAll('p')[0]
  var parag1 = document.querySelectorAll('p')[1]
  var parag2 = document.querySelectorAll('p')[2]
  var parag3 = document.querySelectorAll('p')[3]

  var valor1 = Number(cx1.value)
  var valor2 = Number(cx2.value)

  var rsoma= valor1 + valor2
  parag0.innerHTML = rsoma
 
  var rsub = valor1 - valor2
  parag1.innerHTML = rsub

  var rmult = valor1 * valor2
  parag2.innerHTML = rmult

  var rdiv = valor1 / valor2
  parag3.innerHTML = rdiv
  
//  innerHTML  serve para inserir um texto na pagina
  
}