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


// AQUI INTERACTUAMOS CON EL HTML

function calcularPerimetroCuadrado()
{
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);

}
function calcularAreaCuadrado()
{
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);

}

function calcularPerimetroTriangulo()
{
    const lado1 = document.getElementById("lado1");
    const valorlado1 = lado1.value;
    const valorlado1entero = parseInt(valorlado1);

    const lado2 = document.getElementById("lado2");
    const valorlado2 = lado2.value;
    const valorlado2entero = parseInt(valorlado2);

    const base = document.getElementById("base");
    const valorbase = base.value;
    const valorbaseentero = parseInt(valorbase);
    

    const perimetro = perimetroTriangulo(valorlado1entero, valorlado2entero, valorbaseentero);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const base = document.getElementById("base");
    const valorbase = base.value;
    const valorbaseentero = parseInt(valorbase);

    const altura = document.getElementById("altura");
    const valoraltura = altura.value;
    const valoralturaentero = parseInt(valoraltura);

    const area = areaTriangulo(valorbaseentero, valoralturaentero);
    alert(area);
}

function calcularDiametro()
{
    const radio = document.getElementById("radio");
    const valorradio = radio.value;

    const diametro = diametroCirculo(valorradio);
    alert(diametro);
}

function calcularPerimetroCirculo()
{
    const radio = document.getElementById("radio");
    const valorradio = radio.value;

    const perimetro = perimetroCirculo(valorradio);
    alert(perimetro);
}

function calcularAreaCirculo()
{
    const radio = document.getElementById("radio");
    const valorradio = radio.value;

    const area = areaCirculo(valorradio);
    alert(area);
}

function calcularAlturaTrianguloIsoceles()
{
    const lado1 = document.getElementById("lado1iso");
    const valorlado1 = lado1.value;
    const valorlado1entero = parseInt(valorlado1);

    const lado2 = document.getElementById("lado2iso");
    const valorlado2 = lado2.value;
    const valorlado2entero = parseInt(valorlado2);

    const base = document.getElementById("baseiso");
    const valorbase = base.value;
    const valorbaseentero = parseInt(valorbase);

    if(valorlado1entero == valorlado2entero && valorlado1entero != valorbaseentero || valorlado1entero == valorbaseentero && valorlado1entero != valorlado2entero || valorlado2entero == valorbaseentero && valorlado2entero != valorlado1entero)
    {

        const resultado = Math.sqrt((valorlado1entero**2) - ((valorbaseentero**2)/4) );
        alert("Efectivamente, es un triángulo isóceles y la altura es de: " + resultado);
    }
    else
    {
        alert("Los valores indicados no corresponden a un triángulo isóceles");
    }
}