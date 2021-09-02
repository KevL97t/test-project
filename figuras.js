// CÓDIGO DEL CUADRADO
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) 
{
    return lado*4;

} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) 
{
    return lado*lado;
} 
// console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

// CÓDIGO DEL TRIANGULO
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2= 6;
// const baseTriangulo= 4;
// const alturaTriangulo= 5.5;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm ")

// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base)
{
    return lado1+lado2+base;
}
// console.log ("El perimetro del triángulo es:" + perimetroTriangulo + "cm");

function areaTriangulo (base, altura)
{   
    return (base*altura)/2
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm");

console.groupEnd();

//CÓDIGO DE LOS CIRCULOS

console.group("Circulos");

// const radioCirculo = 4;
function diametroCirculo(radio)
{
    return radio*2;
}

function perimetroCirculo(radio)
{
    let diametro = diametroCirculo(radio);
    return diametro*Math.PI;


}

function areaCirculo(radio)
{
    return (radio*radio)*Math.PI
}

// console.log("El radio del circulo es: " + radioCirculo + "cm");
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
// console.log("El área del circulo es: " + areaCirculo + "cm");

console.groupEnd();