let numero1: number = Number(prompt("Ingrese el primer número"));
let numero2: number = Number(prompt("Ingrese el segungo número"));

let operacion: number = Number(
  prompt("Ingrese el tipo de operación que va a realizar")
);

function suma() {
  if (operacion === 1) {
    let suma: Number = numero1 + numero2;

    console.log(numero1);
    console.log("+");
    console.log(numero2);
    console.log("El resultado de la suma es " + suma);
  }
}

function resta() {
  if (operacion === 2) {
    let resta: number = numero1 - numero2;

    console.log(numero1);
    console.log("-");
    console.log(numero2);
    console.log("El resultado de la resta es " + resta);
  }
}

function multiplicar() {
  if (operacion === 3) {
    let multiplicar: number = numero1 * -numero2;

    console.log(numero1);
    console.log("*");
    console.log(numero2);
    console.log("El resultado de la multiplicación es " + multiplicar);
  }
}

function dividir() {
  if (operacion === 4) {
    let dividir = numero1 / numero2;

    console.log(numero1);
    console.log("/");
    console.log(numero2);
    console.log("El resultado de la división es " + dividir);
  }
}

suma();
resta();
multiplicar();
dividir();
