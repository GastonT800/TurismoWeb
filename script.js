document.addEventListener("DOMContentLoaded", () => {

    const incluirLayout = async (idElemento, rutaArchivo) => {
        try {
            const respuesta = await fetch(rutaArchivo);
            if (!respuesta.ok) throw new Error(`Error al cargar ${rutaArchivo}`);

            const html = await respuesta.text();
            const contenedor = document.getElementById(idElemento);

            if (contenedor) {
                contenedor.innerHTML = html;
            }

        } catch (error) {
            console.error("Error al cargar componente:", error);
        }
    };

    //Para cargar el header y el footer en cada página
    incluirLayout("main-header", "layout/header.html");
    incluirLayout("main-footer", "layout/footer.html");

});

//Para el modo oscuro
function toggleMode() {
    document.body.classList.toggle('light-mode');
}