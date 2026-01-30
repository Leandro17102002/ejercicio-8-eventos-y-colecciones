document.addEventListener("DOMContentLoaded", () => {
    console.log("Contenido del DOM cargado");

    const textarea = document.getElementById("origen");
    const destino = document.getElementById("destino");

    const inputs = document.getElementsByTagName("input");
    const botonMin = document.getElementsByTagName("button")[0];

    const btnReemplazar = document.getElementById("btn-reemplazar");
    const btnAgregar = document.getElementsByClassName("btn-agregar");
    const btnVaciar = document.getElementsByClassName("btn-vaciar")[0];
    const btnMayus = document.getElementsByClassName("btn-convertir-a-mayusculas")[0];

    // Cargar contenido inicial en el textarea
    textarea.value = "Este contenido está listo para ser editado y pasarlo abajo.";

    // Habilitar inputs y botón al escribir
    textarea.addEventListener("input", () => {
        for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
        }
        botonMin.disabled = false;
    });

    // Reemplazar
    btnReemplazar.addEventListener("click", () => {
        // Codigo para reemplazar
         btnReemplazar.addEventListener("click", () => {
         destino.innerHTML = textarea.value;
            });

    });

    // Agregar 1 vez
    btnAgregar[0].addEventListener("click", () => {
        // Codigo para agregar 1 vez
        btnAgregar[0].addEventListener("click", () => {
        destino.innerHTML += textarea.value;
            });

    });

    // Agregar 5 veces
    btnAgregar[1].addEventListener("click", () => {
        // Codigo para agregar 5 veces
        btnAgregar[1].addEventListener("click", () => {
            for (let i = 0; i < 5; i++) {
                 destino.innerHTML += textarea.value;
                    }
                });

    });

    // Agregar 10 veces
    btnAgregar[2].addEventListener("click", () => {
        // Codigo para agregar 10 veces
        btnAgregar[2].addEventListener("click", () => {
             for (let i = 0; i < 10; i++) {
                    destino.innerHTML += textarea.value;
                 }
            });

    });

    // Agregar n veces
    btnAgregar[3].addEventListener("click", () => {
        // Codigo para agregar n veces
    });

    // Vaciar
    btnVaciar.addEventListener("click", () => {
        //Codigo para vaciar
    });
  
    // Convertir a mayúsculas   
    btnMayus.addEventListener("click", () => {
        // Codigo para convertir a mayusculas (destino)
    });

    // Convertir a minúsculas
    botonMin.addEventListener("click", () => {
        // Codigo para convertir a minusculas (destino)
    });
});