function verificar(){
    var n1, n2, n3, n4, n5, maior;

    n1=prompt("Insira o primeiro número:");
    console.log(n1);
    n2=prompt("Insira o segundo número:");
    console.log(n2);
    n3=prompt("Insira o terceiro número:");
    console.log(n3);
    n4=prompt("Insira o quarto número:");
    console.log(n4);
    n5=prompt("Insira o quinto número:");
    console.log(n5);

    if(n1>=n2 || n1>=n3 || n1>=n4 || n1>=n5)
    {
        alert=("O maior número é:"+maior==n1);
    }
    else if(n2>=n1 || n2>=n3 || n2>=n4 || n2>=n5){
        alert=("O maior número é:"+maior==n2);
    }
    else if(n3>=n1 || n3>=n2 || n3>=n4 || n3>=n5){
        alert=("O maior número é:"+maior==n3);
    }
    else if(n4>=n1 || n4>=n2 || n4>=n3 || n4>=n5){
        alert=("O maior número é:"+maior==n4);
    }
    else if(n5>=n1 || n5>=n2 || n5>=n3 || n5>=n4){
        alert=("O maior número é:"+maior==n5);
    }

    alert("maior número:" +maior);
}
