let info = document.getElementById('info');

// El número de párrafos de la página.
let numParrafos = document.getElementsByTagName('p').length;
console.log(numParrafos);

info.innerHTML += '<b>El número de párrafos de la página:</b> '+numParrafos;

// El texto del segundo párrafo.
let segundoParrafo = document.getElementsByTagName('p')[1].textContent;
console.log(segundoParrafo);

info.innerHTML += '<br><b>El texto del segundo párrafo:</b> '+segundoParrafo;

// El número de enlaces de la página.
let numEnlaces = document.getElementsByTagName('a').length;
console.log(numEnlaces);

info.innerHTML += '<br><b>El número de enlaces de la pagina:</b> '+numEnlaces;

// La dirección del primer enlace.
let direccionPrimerEnlace = document.getElementsByTagName('a')[0].getAttribute('href');
console.log(direccionPrimerEnlace);

info.innerHTML += '<br><b>La dirección del primer enlace:</b> '+direccionPrimerEnlace;

// La dirección del penúltimo enlace.
let penultimaDireccion = document.getElementsByTagName('a').length-2;
let contenidoDireccionPenultimo = document.getElementsByTagName('a')[penultimaDireccion].getAttribute('href');
console.log(contenidoDireccionPenultimo);

info.innerHTML += '<br><b>La dirección del penúltimo enlace:</b> '+contenidoDireccionPenultimo;

// El número de enlaces que apuntan a /wiki/Municipio.
let enlaces = document.getElementsByTagName('a');
let cont = 0;

wiki_municipio(enlaces);

function wiki_municipio(enlaces){
    for (const i of enlaces) {
        if(i.href.includes("https://educacionadistancia.juntadeandalucia.es/wiki/Municipio")){
            cont++;
        }
    }
    console.log(cont);
}

info.innerHTML += '<br><b>El número de enlaces que apuntan a /wiki/Municipio:</b> '+cont;

// El número de enlaces del primer párrafo.
let primerParrafo = document.getElementsByTagName('p')[0];
let numEnlacesPrimerP = primerParrafo.getElementsByTagName('a').length;
console.log(numEnlacesPrimerP);

info.innerHTML += '<br><b>El número de enlaces del primer párrafo:</b> '+numEnlacesPrimerP;
