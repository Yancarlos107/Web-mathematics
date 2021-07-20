const showAndHide2 = () => {
    $('.main_section_buttons').slideUp(2000);
    $('#discount').slideDown(2000);
}

const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioconConDescuento = ((precio * porcentajePrecioConDescuento) / 100);
    return precioconConDescuento;
}

const buttonPriceDiscount = () => {
    const input1 = document.getElementById("Inputprice")
    const input2 = document.getElementById("InputDiscount")
    const value1 = input1.value;
    const value2 = input2.value;

    const precioDescuento = calcularPrecioConDescuento(value1, value2);

    const resultPrice = document.getElementById("resultPrice");
    /* La propiedad .innerText permite ingresar un parrrafo en determinado elemento html */
    resultPrice.innerText = `El precio con descuento son: $${precioDescuento}`
}