const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioconConDescuento = ((precio * porcentajePrecioConDescuento) / 100);
    return precioconConDescuento;
}
