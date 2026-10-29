
const formulario = document.getElementById("formularioCliente");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;

    mensaje.textContent =
        "Cliente registrado: " + nombre + " - Teléfono: " + telefono;
});
