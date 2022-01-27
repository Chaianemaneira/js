function gerarsequenciaFibonacci(n){
    var fibonacci=0, i, n;
    fibonacci(0)=0;
    fibonacci(1)=1;

    for(var i=2; i<n; i++){
        fibonacci(i)=fibonacci(i-2)+fibonacci(i-1);
    }
    return fibonacci;
}
var f=gerarsequenciaFibonacci(10);
console.log(f);