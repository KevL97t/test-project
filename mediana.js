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

function calcularMediana(lista)
{

    const listaordenada = lista.sort((a,b)=>a-b);

    const mitadLista = parseInt(lista.length / 2);

    function esPar(numerito)
    {
        if(numerito%2 === 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    console.log("La lista ordenada es: " + listaordenada)
    
    if(esPar(lista.length))
    {
        const elemento1 = listaordenada[mitadLista];
        const elemento2 = listaordenada[mitadLista-1];
    
        const promedioElemento1y2 = calcularMediaArtimetica([elemento1, elemento2]);
    
        return promedioElemento1y2;
    }
    
    else 
    {
        return listaordenada[mitadLista];
    }
    
}