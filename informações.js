var i, idade, sexo, qtdemulheres, qtdehomens, maioridadeh, maioridadem, menoridadeh, menoridadem, idadeh, idadem, menoresdeidade, p1, p2, p3, p4, p5;

for(i=1;i<=5;i++){
    idade:parseInt(prompt("Informe sua idade:"));
    sexo=prompt("Sexo: Masculino ou Feminino?");

    if(sexo=="masculino"){
        qtdehomens++;
        idadeh+=idade;
        menoridadeh=menoridadeh;
        maioridadeh=maioridadeh;
    }

    if(sexo=="feminino"){
        qtdemulheres++;
        idadem+=idade;
        menoridadem=menoridadem;
        maioridadem=maioridadem;
    }
}
alert("total de homens:"+qtdehomens);
alert("total de mulheres:"+qtdemulheres);
alert("homem mais novo:"+menoridadeh);
alert("mulher mais nova:"+menoridadem);
alert("homem mais velho:"+maioridadeh);
alert("mulher mais velha:"+maioridadem);

if(idade<=17){
    alert("total de menores de idade:"+menoresdeidade);
}