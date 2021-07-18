/* Codigo del cuadrado */
const perimetroCuadrado = (lado) => {
    return lado * 4;
}

const areaCuadrado = (lado) => {
    return lado ** 2;
}
/* Codigo del cuadrado */

/* Codigo del triangulo */
const perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;    
}

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

console.groupEnd("Triangulos")
/* Codigo del triangulo */

/* Codigo del circulo */
const diametroCirculo = (radio) => {
    return radio * 2;
}

const PI = Math.PI;

const circuferenciaCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

const areaCirculo = (radio) => {
    return (radio ** 2) * PI;
}
/* Codigo del circulo */

/* Aqui se interactura con el html */

const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
     alert(perimetro)
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
     alert(area)
}