

// alert('¡¡FELIZ DÍA DE REYES!!');

// function enviar(event){
//     event.preventDefault();
//     const A = document.getElementById("formulario").value;
//     console.log(A);
//     console.log("ejemplo");
// } //capturar en la variable 1 el cuadro de texto del formulario


function myFunction() {
    var x = document.getElementById("divdesaparecido");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}