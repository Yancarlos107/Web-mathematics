let listOfSalary = colombia.map(
    function (persona) {
        return persona.salary;
})

const comparar = (a, b) => a - b;

function esPar (numero) {
    (numero % 2 === 0)
    ? true
    : false
}

const calcularPromedio = (lista) => {
    const sumaList =lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
)
    const promedioList = sumaList / lista.length;
    return promedioList;
}

const listaOrder = listOfSalary.sort(comparar)

const medianaSalary = (listaOrder) => {
    listaOrder.sort(comparar);
    const mitad = parseInt(listaOrder.length / 2);
    let mediana;
    if (esPar(listaOrder.length)) {
        const personamitad1 = listaOrder[mitad - 1];
        const personamitad2 = listaOrder[mitad];
        const mediana = calcularPromedio([personamitad1, personamitad2])
        return mediana;
    } else {
        const personamitad = listaOrder[mitad]
        return personamitad;
    } 

}

const spliceStart = (listaOrder.length * 90) /100;
const spliceCount = listaOrder.length - spliceStart;
const salaryTop10 = listaOrder.splice(spliceStart, spliceCount);

const medianaGeneral = medianaSalary(listaOrder)
const medianaTop10 = medianaSalary(salaryTop10)
 



console.log({
    medianaGeneral,
    medianaTop10,
})