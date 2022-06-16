//Constructor
class Burger {
  constructor(rtaTitle, rtaMedallones) {
    this.hamburguesa = rtaTitle;
    this.medallones = rtaMedallones;
    this.salsa = "Sin salsa";
    this.extraCheddar = "Sin Extra Cheddar";
    this.extraBacon = "Sin Extra Bacon";
    this.pepinos = "Sin pepinos";
    this.precio = 0;
  }
  adereso(rtaAderezo) {
    if (rtaAderezo == "SI") {
      this.salsa = "Con salsa";
    } else {
      this.salsa = "Sin salsa";
    }
  }
  cheddar(rtaExtraCheddar) {
    if (rtaExtraCheddar == "SI") {
      this.extraCheddar = "Con Extra Cheddar";
      this.precio += 100;
    } else {
      this.extraCheddar = "Sin Extra Cheddar";
    }
  }
  precioMedallones(rtaMedallones) {
    if (rtaMedallones === 1) {
      this.precio += 700;
    } else if (rtaMedallones === 2) {
      this.precio += 800;
    } else if (rtaMedallones === 3) {
      this.precio += 900;
    }
  }
  pepino(rtaPepinos) {
    if (rtaPepinos == "SI") {
      this.pepinos = "Con Pepinos";
      this.precio += 50;
    } else {
      this.pepinos = "Sin Pepinos";
    }
  }
  bacon(rtaExtraBacon) {
    if (rtaExtraBacon == "SI") {
      this.extraBacon = "Con Extra Bacon";
      this.precio += 100;
    } else {
      this.extraBacon = "Sin Extra Bacon";
    }
  }
}

//Funcion para agrregar los objetos al array

function pedidoBurger(
  rtaTitle,
  rtaMedallones,
  rtaAderezo,
  rtaExtraCheddar,
  rtaPepinos,
  rtaExtraBacon
) {
  let pedido = new Burger(rtaTitle, rtaMedallones);
  pedido.precioMedallones(rtaMedallones);
  pedido.adereso(rtaAderezo);
  pedido.cheddar(rtaExtraCheddar);
  pedido.pepino(rtaPepinos);
  pedido.bacon(rtaExtraBacon);
  carrito.push(pedido);
}

//Funcion de los prompt

function burgerInput() {
  rtaMedallones = Number(prompt("Ingrese la cantidad de medallones"));
  rtaAderezo = prompt(
    "Ingrese (Si) en caso de querer salsa\nIngrese (No) en caso de no querer salsa"
  ).toUpperCase();
  rtaExtraCheddar = prompt(
    "Ingrese (Si) en caso de querer EXTRA CHEDDAR\nIngrese (No) En caso de no querer EXTRA CHEDDAR"
  ).toUpperCase();
}

//Array de los productos comprados
const carrito = [];

// Variables
let rtaTitle;
let rtaMedallones;
let rtaAderezo;
let rtaExtraCheddar;
let rtaPepinos;
let rtaExtraBacon;

//While para elegir hamburguesa y sus agregados
while (true) {
  let pedido = Number(
    prompt(
      "Selecciona tu hamburguesa\n Ingresa 1: Para seleccionar CheeseBurger\n Ingresa 2: Para seleccionar BaconCheeseBurger\n Ingresa -1: Para salir"
    )
  );
  if (pedido == 1) {
    rtaTitle = "CheeseBurger";
    rtaExtraBacon = "NO";
    burgerInput();
    rtaPepinos = prompt(
      "Ingrese (Si) en caso de querer PEPINOS\nIngrese (No) en caso de no querer PEPINOS"
    ).toUpperCase();
    pedidoBurger(
      rtaTitle,
      rtaMedallones,
      rtaAderezo,
      rtaExtraCheddar,
      rtaPepinos,
      rtaExtraBacon
    );
  } else if (pedido == 2) {
    rtaTitle = "BaconCheeseBurger";
    rtaPepinos = "NO";
    burgerInput();
    rtaExtraBacon = prompt(
      "Ingrese (Si) en caso de querer EXTRA BACON\nIngrese (No) en caso de no querer EXTRA BACON"
    ).toUpperCase();
    pedidoBurger(
      rtaTitle,
      rtaMedallones,
      rtaAderezo,
      rtaExtraCheddar,
      rtaPepinos,
      rtaExtraBacon
    );
  } else {
    break;
  }
}

//Recorre los elementos del array y muestra los prodoctus seleccionados en el documento
carrito.forEach((elemento) => {
  document.write(
    `Nombre: ${elemento.hamburguesa} </br> Precio: $${elemento.precio}</br><br>`
  );
  console.log(elemento);
});
//Recorre los elementos del array y calcula el valor total de la compra
const valorTotal = carrito.reduce(
  (acumulador, elemento) => acumulador + elemento.precio,
  0
);
document.write(`El valor total de tu compra es: $${valorTotal}`);
