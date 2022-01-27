function calcularmedia(){
    var media, n1, n2, n3, n4;

n1=prompt("Informe a primeira nota:");
console.log(n1);
n2=prompt("Informe a segunda nota:");
console.log(n2);
n3=prompt("Informe a terceira nota:");
console.log(n3);
n4=prompt("Informe a quarta nota:");
console.log(n4);

media=(n1+n2+n3+n4)/3;

if(media<7){
    alert=("Conceito D. Recuperação"+media);
}
else if(media>=7){
    alert=("Conceito C. Aprovado"+media);
}
else if(media>=8){
    alert=("Conceito B. Aprovado"+media);
}
else if(media>=10){
    alert=("Conceito A. Aprovado. Parabéns!");
}
}