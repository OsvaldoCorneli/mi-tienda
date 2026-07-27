 export const formatearPrecio = (precioString) => {

        const numero = Number(precioString);

        return new Intl.NumberFormat('de-DE').format(numero);

    };

export  function calcularOferta(precio, descuento) {

        const precioConDescuento = parseInt(
            precio - (precio * descuento) / 100
        );

        return String(precioConDescuento);

    }