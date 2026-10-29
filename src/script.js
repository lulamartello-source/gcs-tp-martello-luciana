
// Función para validar que el teléfono contenga solamente números
function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

// Código del formulario
if (typeof document !== "undefined") {
    const formulario = document.getElementById("formularioCliente");
    const mensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;

        if (!validarTelefono(telefono)) {
            mensaje.textContent = "Error: el teléfono debe contener solamente números.";
            return;
        }

        mensaje.textContent =
            "Cliente registrado: " + nombre + " - Teléfono: " + telefono;
    });
}

// Permite utilizar la función desde las pruebas con Node.js
if (typeof module !== "undefined") {
    module.exports = { validarTelefono };
}
