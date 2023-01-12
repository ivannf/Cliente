let lista = document.getElementById('lista');

let elemento = document.getElementById('addElemento');
elemento.addEventListener('click',addElemento);

function addElemento(){
    console.info('Estas dentro de la función addElemento()');

    let valor = prompt('Introduce el elemento que desea: ');

    let li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);

    console.info('Saliendo de la función addElemento()');
}

let eliminarPrimero = document.getElementById('borrarPrimerLi');
eliminarPrimero.addEventListener('click',eliminarPrimerLi);

function eliminarPrimerLi(){
    console.info('Estas dentro de la función eliminarPrimerLi()');

    lista.removeChild(lista.children[0]);

    console.info('Saliendo de la función eliminarPrimerLi()');
}

let eliminarUltimo = document.getElementById('borrarUltimoLi');
eliminarUltimo.addEventListener('click', eliminarUltimoLi);

function eliminarUltimoLi(){
    console.info('Estas dentro de la función eliminarUltimoLi()');

    let numLi = document.getElementsByTagName('li').length;

    lista.removeChild(lista.children[numLi-1]);

    console.info('Saliendo de la función eliminarUltimoLi()');
}