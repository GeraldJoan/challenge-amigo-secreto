let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar nombre a la lista
    amigos.push(nombre);
    actualizarLista();

    // Habilitar el boton "Limpiar Lista"
    document.getElementById('limpiar').removeAttribute('disabled'); 

    // Limpiar el input
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</p>`;
}

function limpiarLista() {
    amigos = []; // Vaciar la lista
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar lista en pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado
    document.getElementById("amigo").value = ""; // Limpiar campo de texto

    document.querySelector("#limpiar").setAttribute("disabled","true");
}
