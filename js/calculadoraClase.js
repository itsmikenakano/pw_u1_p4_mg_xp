const agregarCaracter = (caracter) =>{
    var resultado = document.getElementById('resultado');
    resultado.textContent += caracter;
}

const calcular = () => {
    var resultado = document.getElementById('resultado');
    var expresion = resultado.textContent;
    var resultadoFinal = eval(expresion);
    resultado.textContent = resultadoFinal;
}
