const URL = 'https://randomuser.me/api/?nat=es';
const tablaUsuarios = document.getElementById('datosUsuarios');
const tablaDatos = document.getElementById('tablaDatos');
let datosUsuarios = [];
let datosUsuariosConImagen = [];
let usuarios = {};

window.onload = () => {
    document.getElementById('generarUsuario').addEventListener('click', generarUsuario);
    document.getElementById('guardar_xml').addEventListener('click', guardar_xml);
    document.getElementById('guardar_fetch').addEventListener('click', guardar_fetch);
    document.getElementById('addDatos').addEventListener('click', addDatos);
}

function generarUsuario() {
    console.log('Generar usuario');

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            const datos = data.results[0];
            usuarios = {
                image: datos.picture.large,
                name: datos.name.first + ' ' + datos.name.last,
                street: datos.location.street.name,
                phone: datos.phone,
                email: datos.email
            }

            usuariosSinImagen = {
                name: datos.name.first + ' ' + datos.name.last,
                street: datos.location.street.name,
                phone: datos.phone,
                email: datos.email
            }

            tablaUsuarios.innerHTML = '';

            let imagen = document.createElement('img');
            imagen.setAttribute('src', usuarios.image);
            tablaUsuarios.appendChild(imagen);

            let resultado = '<br><b>' + usuarios.name + '</b><br> Dirección: ' + usuarios.street + '<br> Teléfono: ' + usuarios.phone + '<br> Email: ' + usuarios.email;
            tablaUsuarios.innerHTML += resultado;
        })
        .catch(error => {
            console.log(error);
        })
}

function addDatos() {
    console.log('Guardar datos');
    datosUsuarios.push(usuariosSinImagen);
    datosUsuariosConImagen.push(usuarios);
    let body = document.getElementById('tablaDatos');
    body.innerHTML = "";
    let tabla = document.createElement('table');
    body.appendChild(tabla);

    titulos = [
        'Nombre',
        'Direccion',
        'Telefono',
        'Email'
    ];

    let tr = document.createElement("tr");
    titulos.forEach((titulo) => {
        th = document.createElement("th");
        th.appendChild(document.createTextNode(titulo));
        tr.appendChild(th);
    });
    tabla.appendChild(tr);

    datosUsuarios.forEach((usuario) => {
        let tr = document.createElement("tr");

        for (const i in usuario) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(usuario[i]));
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    });
}

function guardar_fetch() {
    console.log(datosUsuarios);
    fetch("save_users.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosUsuariosConImagen),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
            document.getElementById("informacion").innerHTML += `${data.resultado}<br>`;
        })
        .catch((err) => console.log(err));
}

function guardar_xml() {
    console.log('Guardar xml');

    xhr = new XMLHttpRequest();
	xhr.open("POST", "save_users.php");
	xhr.setRequestHeader("Content-type", "application/json");
	let usuarios_json = JSON.stringify(datosUsuariosConImagen);
	xhr.onreadystatechange = () => {
		if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === 200) {
			let informacion = document.getElementById('informacion');
            informacion.innerHTML = 'Datos actualizados';
		}
	};
	xhr.send(usuarios_json);
}