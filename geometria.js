const calcularPromedioList = (lista) => {
    /* let sumaList = 0;
        for (let i = 0; i < lista.length; i++) {
        sumaList = sumaList + lista[i];
} */

    /* Metodo para sumer los valares de un array con el metodo .reduce */
    const sumaList =lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
)
    const promedioList = sumaList / lista.length;
    return promedioList;
}

const comparar = (a, b) => {
    return a - b;
}

const compararModa = (a, b) => {
    return a[1] - b[1];
}

function esPar (numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false;
    }
}

const calcularMediana = (listaMediana) => {
    /* el metodo .sort es usado para organizar los elementos de un array o un objeto */
    listaMediana.sort(comparar);
    const mitadListaMediana = parseInt(listaMediana.length / 2);
    let mediana;
    if (esPar(listaMediana.length)) {
        const elemento1 = listaMediana[mitadListaMediana - 1];
        const elemento2 = listaMediana[mitadListaMediana];
        const mediana = calcularPromedioList([elemento1, elemento2])
        return mediana;
    
    } else {
        return mediana =listaMediana[mitadListaMediana]
    }   
}

const calcularModa = (lista) => {
    const listaCount ={}; 
    /* Esta linea de codigo me sirve para contar las veces que un elemento de un array se repite, guardando el valor en un objeto */
    lista.map(
        (elemento) => {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
    /* El metodo object.entries me ayuda a convertir un objeto en un array */
    listaModaArray = Object.entries(listaCount).sort(compararModa);

    const moda = Number(listaModaArray[listaModaArray.length - 1][0]);

    return moda
}