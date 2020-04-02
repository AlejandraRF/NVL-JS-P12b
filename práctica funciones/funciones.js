Function obtenerNumeros (cantidad_numeros){
    var numeros = [];
    var pares = [];
    var impares = [];
    var resultado = [];

    for (var i=0; i<cantidad_numeros;i++){
        var num = Math.floor ((Math.random()*100)+1)
        numeros.push(num);
        if (num%2===0){
            pares.push(num);
        }
        else{
            impares.push(num);
        }
    }

    resultado ["pares"] = pares;
    resultado ["impares"] = impares;
    resultado ["todos"] = numeros;

    return resultado;
}

var misnumeros= obtenerNumeros(100);
console.log(misnumeros["todos"].join());

document.getElementById("todos").innerHTML = misnumeros["todos"].join(",");
document.getElementsByClassName("impares")[0].innerHTML = misnumeros["impares"].join(",");
document.getElementsByClassName("pares") [0]. innerHTML = misnumeros["pares"].join(",");
