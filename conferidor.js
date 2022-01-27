function paridade(){
    var n=parseInt(document.getElementById("n").value);
    var mult=parseInt(document.getElementById("mult").value);
    var resposta=document.getElementById('resposta');

    if(n%mult==0){
        resposta.innerHTML=n+ " é múltiplo de "+mult;
    }
    else{
        resposta.innerHTML=n+ " não é múltiplo de "+mult;
    }
}