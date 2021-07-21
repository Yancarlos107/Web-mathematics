const showAndHide1 = () => {
        $('.main_section_buttons').slideUp(2000);
        $('#geometry').slideDown(2000);
}
const showAndHide3 = () => {
    $('.main_section_buttons').slideUp(2000);
    $('#salary').slideDown(2000);
}
const showAndHide4 = () => {
    $('.main_section_buttons').slideUp(2000);
    $('#geometry').slideDown(2000);
}

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
        const semiperimetro = (((Number(lado1) + (Number(lado2))) + (Number(base))) / 2)
    return Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - base))
    }
}
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
    const resultPrice = document.getElementById("resultCube");
    resultPrice.innerText = `El perimetro del cuadrado es: ${perimetro} cm`
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    const resultPrice = document.getElementById("resultCube");
    resultPrice.innerText = `El area del cuadrado es: ${area} cm2`
}

const calcularPerimetroTriangulo = () => {
    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulo3")
    const values = [input1.value, input2.value, input3.value]

    const perimetro = perimetroTriangulo(values[0], values[1], values[2])
    const resultPrice = document.getElementById("resultTriangule");
    resultPrice.innerText = `El perimetro del trinagulo es: ${perimetro} cm`
}

const calcularAreaTriangulo = () => {
    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulo3")
    const value1 = input1.value
    const value2 = input2.value
    const value3 = input3.value
    const areaTriangule = areaTriangulo(value1, value2, value3)
    const resultPrice = document.getElementById("resultTriangule");
    resultPrice.innerText = `El área del trinagulo es: ${areaTriangule.toFixed(3)} cm2`
}

const calcularDiametroCirculo = () => {
    const input = document.getElementById("InputCirculo")
    const value = input.value
    const diametro = diametroCirculo(value)
    const resultPrice = document.getElementById("resultCircle");
    resultPrice.innerText = `El perimetro del circulo es: ${diametro} cm`
}

const calcularCircunferenciaCirculo = () => {
    const input = document.getElementById("InputCirculo")
    const value = input.value
    const circunferencia = circuferenciaCirculo(value)
    const resultPrice = document.getElementById("resultCircle");
    resultPrice.innerText = `La circunferencia del circulo es: ${circunferencia.toFixed(3)} cm`
}

const calcularAreaCirculo = () => {
    const input = document.getElementById("InputCirculo")
    const value = input.value
    const area = areaCirculo(value)
    const resultPrice = document.getElementById("resultCircle");
    resultPrice.innerText = `El area del circulo es: ${area.toFixed(3)} cm2`
}