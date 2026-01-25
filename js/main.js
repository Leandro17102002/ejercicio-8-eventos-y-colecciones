document.addEventListener('DOMContentLoaded', function(){
    console.log('Contenido del DOM cargado');

    const textarea = document.querySelector("textarea");

    textarea.value = "Este contenido esta listo para ser editado y pasado abajo"

    const inputs = document.getElementsByTagName('input');

    textarea.addEventListener('input', function(){
        for (let i = 0; i < inputs.length; i++){
            inputs[i].disabled = false;
        }

        const boton = document.getElementsByTagName('button');
        boton[0].disabled = false;
    });

    destino = document.getElementById('destino');

    destino.innerHTML = "<ul></ul>";

    const botonReemplazar = document.getElementById('reemplazar');
    const botones = document.querySelectorAll('.btn-agregar');
    
    botonReemplazar.addEventListener('click', function(){
        // Aca ira el codigo para reemplazar el texto destino por el de origen
    });

    botones[0].addEventListener('click', function(){
        // Codigo para agregar 1 vez el texto al origen
    });

    botones[1].addEventListener('click', function(){
        // Codigo para agregar 5 veces el texto al origen
    });

    botones[2].addEventListener('click', function(){
        // Codigo para agregar 10 veces el texto al origen
    });

    botones[3].addEventListener('click', function(){
        
        // Codigo para agregar n veces el texto al origen

        let n = prompt("Ingrese la cantidad de veces a agregar el texto:");
        n = parseInt(n);
    });
});