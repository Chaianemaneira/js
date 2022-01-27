function progressaoaritmetica(){
    var valor=parseInt(document.getElementById("inicial").value);
    var razão=parseInt(document.getElementById("razão").value);
    var termo=parseInt(document.getElementById("termo").value);
    var progressão="";
    var cont=0;

    for(var cont=1; cont<=termo; cont++){
        progressão+"termo"+cont+"="+valor+"<br>";
        valor+=razão;
    }
    document.write(progressão);
}