function generarComprobante() {
  const nombre = document.getElementById("nombre").value;
  const numero = document.getElementById("numero").value;
  const cantidad = document.getElementById("cantidad").value;
  const fechaActual = new Date().toLocaleString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  if (!nombre || !numero || !cantidad) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Actualiza los datos del comprobante
  document.getElementById("compNombre").textContent = nombre;
  document.getElementById("compNumero").textContent = numero;
  document.getElementById("compMonto").textContent = `$${parseFloat(cantidad).toLocaleString("es-CO")}`;
  document.getElementById("compDisponible").textContent = `$${parseFloat(cantidad).toLocaleString("es-CO")}`;
  document.getElementById("compFecha").textContent = fechaActual;

  // Muestra el comprobante y oculta el panel inicial
  document.getElementById("panel").classList.add("oculto");
  document.getElementById("comprobante").classList.remove("oculto");
}

function volver() {
  // Regresa al panel inicial
  document.getElementById("panel").classList.remove("oculto");
  document.getElementById("comprobante").classList.add("oculto");
}
