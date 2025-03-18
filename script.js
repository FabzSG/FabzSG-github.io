
function mostrarSeccion(id) {
    var seccion = document.getElementById(id);
    if (!seccion) {
        console.error("La sección con ID '" + id + "' no existe.");
        return;
    }
    var secciones = ["info-section", "vales-section", "ciegas-section", "comodines-section"];
    secciones.forEach(function(sec) {
        var elemento = document.getElementById(sec);
        if (elemento) {
            elemento.style.display = "none";
        }
    });
    seccion.style.display = "block";
}

