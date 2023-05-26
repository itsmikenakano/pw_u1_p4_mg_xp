
const sumar = (num1, num2) => num1 + num2;


const sumarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + sumar(numero1, numero2);
}

const restar = (num1, num2) => num1 - num2;

const restarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + restar(numero1, numero2);
}

const multiplicar = (num1, num2) => num1 * num2;


const multiplicarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + multiplicar(numero1, numero2);
}

const dividir = (num1, num2) => num1 / num2;


const dividirNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + dividir(numero1, numero2);
}


const convertir = (idCampo) => {
    console.log('Convertir' + idCampo)
    return parseInt(document.getElementById(idCampo).value)
}

const eliminarElemento = () => {

    document.getElementById('idEliminar').remove();
    console.log(document.getElementById('idEliminar'))
    console.log('Test')

}

const insertarElemento = () => {

    document.getElementById('elemento').innerHTML = '<strong>Importante</strong>';

}

const conceptosJS = () => {
    //var (ya no es comunmente utilizada)
    //let (es mas eficiente)
    //const (constantes)

    var variable1 = 'Xavi';
    var variable2 = 1;
    let variable3 = 'Xavi';
    let variable4 = 8;
    const variable5 = 'Xavi';
    const variable6 = 8;

    console.log(variable3);

    //Declaracion de Arreglos
    const diasSemana = ['Lunes', 'Martes', 'Miercoles'];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    diasSemana.push('Jueves');
    diasSemana.push('Viernes');
    console.log(diasSemana)

    const diasFinSemana = ['Sabado', 'Domingo'];

    console.log(diasSemana.concat(diasFinSemana));
    console.log(diasSemana);
    const diasCompleto = diasSemana.concat(diasFinSemana);
    console.log(diasCompleto);

    for (const dia of diasCompleto) {
        console.log(dia);
    }

    //Declaracion de Objetos
    const persona = {
        nombre: "Xavi",
        apellido: "Paez",
        edad: 23,
        ciudad: "Quito"
    }

    console.log(persona);

    const persona2 = {
        nombre: "Mike",
        apellido: "Garcia",
        edad: 21,
        ciudad: "Quito",
        vehiculo: {
            marca: "Nissan",
            modelo: "GTR",
            anio: 2005
        }
    }
    console.log(persona2);

    const nombrePrueba = "Prueba";
    //nombrePrueba = "PruebaCambio";

    const arregloPrueba = [1, 2, 3, 4];
    arregloPrueba[1] = 0;
    //arregloPrueba.push(1);
    console.log(arregloPrueba)

    //Desestructuracion de Arreglos
    const dias2 = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    const [dia1, dia2, dia3, dia4] = dias2;
    console.log(dia2);
    console.log(dia3);
    console.log(dia4);

    const [d1, d2, d3, d4, d5] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    console.log(d1);
    console.log(d5);

    //Desestructuracion de Objetos
    const persona3 = {
        nombre: "Xavi",
        apellido: "Paez",
        edad: 23,
        ciudad: "Quito"
    }

    const { nombre, ciudad } = persona3;
    console.log(nombre);
    console.log(ciudad);

    const persona4 = {
        nombre: "Mike",
        apellido: "Garcia",
        edad: 21,
        ciudad: "Quito",
        vehiculo: {
            marca: "Nissan",
            modelo: "GTR",
            anio: 2005
        }
    }

    console.log(persona4.nombre)
    console.log(persona4.apellido)

    const { vehiculo } = persona4;
    console.log(vehiculo);

    const { marca, modelo } = vehiculo;
    console.log(marca, modelo);

}