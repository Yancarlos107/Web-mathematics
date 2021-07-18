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
    return Number(lado1) + Number(lado2) + Number(base);    
}

const areaTriangulo = (lado1, lado2, base) => {
    if (lado1 === lado2 && lado2 === base) {
        altura = Math.sqrt((lado1 ** 2) - ((base/2) ** 2))
        return ((base * altura) / 2)
    } if (lado1 === lado2 && lado1 != base) {
        altura = Math.sqrt((lado1**2) - ((base / 2)** 2) )
        return ((base * altura) / 2) 
    } else {
        const semiperimetro = ((lado1 + lado2 + base) / 2)
        return Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - base))
    }
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

const calcularPerimetroTriangulo = () => {
    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulo3")
    const values = [input1.value, input2.value, input3.value]

    const perimetro = perimetroTriangulo(values[0], values[1], values[2])
    alert(perimetro)
}

const calcularAreaTriangulo = () => {
    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulo3")
    const value1 = input1.value
    const value2 = input2.value
    debugger
    const value3 = input3.value
    console.log(value1, value2, value3)
    const area = areaTriangulo(value1, value2, value3)
    alert(area)
}