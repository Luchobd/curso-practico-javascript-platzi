// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
  `Lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();

// Código del Circulo
console.group("Circulo");
const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;

console.log(
  `Radio y Diametro del Circulo miden: ${radio}cm, ${diametro}cm, ${PI}cm`
);

const perimetroCirculo = Math.round(diametro + PI);
console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");

const areaCirculo = Math.round(PI * (radio * radio));
console.log("El área del triangulo es: " + areaCirculo + "cm2");
console.groupEnd();
