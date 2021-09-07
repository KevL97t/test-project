function calcularMediaArmonica(lista)
{

    const listaOrdenada = lista.sort((a,b)=>a-b);

    let valorInverso = 0;
    
    for (let i = 0; i<listaOrdenada.length; i++)
    {
         valorInverso = (1 / listaOrdenada[i]) + valorInverso;
    }
    
    return  listaOrdenada.length - valorInverso;

}


// const sumaLista = listaOrdenada.reduce(
//     function (a = 0, b)
//     {
//         return a + b;
//     }
// );