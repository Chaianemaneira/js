function convertertemperatura(direction)
{
    var f=document.convert.ftemperatura, c=document.convert.ctemperatura, k=document.convert.ktemperatura;

    c=prompt("Digite uma temperatura em Celsius:");
    console.log(c);
    f=prompt("Digite uma temperatura em Fahrenheit:");
    console.log(f);
    k=prompt("Digite uma temperatura em Kelvin:")
    console.log(k);

    if(direction=="fpc")
    {
        c.value=Math.round((f.value-32)*(5/9));
        k.value=Math.round((parseInt(c.value)+ 459.67)*(5/9));
    }
    else if(direction=="kpf")
    {
        f.value=Math.round((parseInt(c.value)*(9/5))-459.67);
        c.value=Math.round((f.value-32)*(5/9));
    }
    else{
        f.value=Math.round((parseInt(c.value)*(9/5))+32);
        k.value=Math.round((parseInt(c.value)*273));
    }
}