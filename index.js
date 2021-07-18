/* Codigo del cuadrado */
console.group("Cuadrados")
/* const ladoCuadrado = 7;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);
 */

const perimetroCuadrado = (lado) => {
    return lado * 4;
}
/* console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`); */

const areaCuadrado = (lado) => {
    return lado ** 2;
}
/* console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`); */
console.groupEnd("Cuadrados")
/* Codigo del cuadrado */

/* Codigo del triangulo */
console.group("Triangulos")
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, y ${baseTriangulo} cm`); */

/* const alturaTriangulo = 5.5;
console.log(`La altura del triangulo es: ${alturaTriangulo} cm`); */

const perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;    
}

/* console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`); */

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}
/* console.log(`El área del triangulo es: ${areaTriangulo} cm^2`); */
console.groupEnd("Triangulos")
/* Codigo del triangulo */

/* Codigo del circulo */
console.group("Circulos")
/* const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo} cm`); */

const diametroCirculo = (radio) => {
    return radio * 2;
}
/* console.log(`El diametro del circulo es: ${diametroCirculo} cm`); */

const PI = Math.PI;
/* console.log(`PI es: ${PI} cm`); */

const circuferenciaCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
/* console.log(`La circunferencia del circulo es: ${circuferenciaCirculo} cm`); */

const areaCirculo = (radio) => {
    return (radio ** 2) * PI;
}
/* console.log(`El area del circulo es: ${areaCirculo} cm`); */

console.groupEnd("Circulos")
/* Codigo del circulo */