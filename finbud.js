//////// VARIABLES NECESARIAS

let ingresos = [];

//////////////////FUNCIONES DE AYUDA

function calcularIngresoMensualTotal(){
    const sumaIngresos = ingresos.reduce(
        function(a = 0, b)
        {
            return Number(a) + Number(b);
        }
    );

    return sumaIngresos;

}

function registrarIngresos(){
    
    let nuevoIngreso = document.getElementById("nuevoIngreso");
    let nuevoIngresoValue = nuevoIngreso.value;

    let nuevoIngresoPush = ingresos.push(nuevoIngresoValue);
    
}

function calcularMayorValor(){

    let mayorValor = ingresos[ingresos.length-1]
    return mayorValor

}

////////////FUNCION CON ALGORITMO PARA CALCULO DE FINANZAS

function calcularFinanzas(){
    let ingresosOrdenados = ingresos.sort((a,b)=>a-b);
    console.log(ingresosOrdenados)
///////////////////////////////////////////////////////////
    const sumaTotal = calcularIngresoMensualTotal();
    console.log(sumaTotal);
    const sumaDeIngresos = document.getElementById("sumaDeIngresos");
    sumaDeIngresos.innerText = `El total de ingresos mensual fue: $${sumaTotal}`;
//////////////////////////////////////////////////////////
    const ingresoMayor = calcularMayorValor();
    console.log(ingresoMayor);
    const mayorIngreso = document.getElementById("mayorIngreso");
    mayorIngreso.innerText = `El ingreso mayor del mes fue: $${ingresoMayor}`;
}
