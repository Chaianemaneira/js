var n1, n2, frase, soma
frase = "Exemplo de uma soma"
n1=9
n2=14.5
alert(frase)
alert(soma)
document.write("<h2>" +soma+ "/h2")

/* Soma com valores reais */
n1=prompt("Escreva um número:")
n2=prompt("Escreva outro número:")
soma= parseFloat(n1)+parseFloat(n2)
alert("O resultado da adição é "+soma)
document.write("<h2>"+soma+"/h2")

/* Soma com valores inteiros */
n1=prompt("Escreva um número:")
n2=prompt("Escreva outro número:")
soma= parseInt(n1)+parseInt(n2)
alert("O resultado da adição é "+soma)
document.write("<h2>"+soma+"/h2")