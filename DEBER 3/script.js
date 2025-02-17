function cargarTabla(url, mostrarBotonLimpiar = false) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar la tabla");
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById("tabla-container");
            container.innerHTML = html;

            
            if (mostrarBotonLimpiar) {
                const botonLimpiar = document.createElement("button");
                botonLimpiar.textContent = "Limpiar";
                botonLimpiar.className = "btn btn-primary mt-3 d-block mx-auto";
                botonLimpiar.id = "boton-limpiar";

                
                botonLimpiar.addEventListener("click", () => {
                    const tabla = container.querySelector("table");
                    if (tabla) {
                        const celdas = tabla.querySelectorAll("tbody td");
                        celdas.forEach(celda => {
                            celda.innerHTML = "&nbsp;";
                        });
                    }
                });

                container.appendChild(botonLimpiar);
            }
        })
        .catch(error => {
            console.error("Hubo un problema al cargar la tabla:", error);
        });
}


document.getElementById("tabla1-link").addEventListener("click", (event) => {
    event.preventDefault();
    cargarTabla("tabla1.html", true);
});

document.getElementById("tabla2-link").addEventListener("click", (event) => {
    event.preventDefault();
    cargarTabla("tabla2.html");
});
