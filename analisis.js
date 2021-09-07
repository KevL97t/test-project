// HELPER FUNCTIONS 


function esPar(numero)
{
    return (numero % 2 === 0 );
}

function calcularMediaArtimetica(lista)
{
const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento)
    {
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;

}

//CALCULADORA DE MEDIANA


function calcularMedianaSalarios(lista)
{

    const mitad = parseInt(lista.length)/2;

    if ( esPar(lista.length))
    {
        const personaMitad = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        
        // const mediana = (personaMitad + personaMitad2) / 2;
        const mediana = calcularMediaArtimetica([personaMitad, personaMitad2]);

        return mediana;

    }
    else
    {
        const personaMitad = lista[mitad];
        return personaMitad;
    }

}

// MEDIANA GENERAL


const salariosCol = colombia.map(
    function(persona)
    {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort((a,b)=>a-b);

const medianaGeneralCol = calcularMedianaSalarios(salariosColSorted);


//MEDIANA DEL TOP 10%

const spliceStart = (salariosColSorted.length*(100-10)/100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount
);

const medianaTop10Col = calcularMedianaSalarios(salariosColTop10);




console.log(

    medianaGeneralCol,

    salariosColTop10,

    medianaTop10Col,

)