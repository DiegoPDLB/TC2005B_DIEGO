function validarFormulario(event) {
    event.preventDefault(); 
    var email = document.querySelector('.input[type="email"]').value;
    var password = document.querySelector('.input[type="password"]').value;

    if (email === "") {
        alert("El campo de Email no puede estar vacío.");
        return false;
    }

    if (password === "") {
        alert("El campo de Password no puede estar vacío.");
        return false;
    }

    document.getElementById("storeContainer").style.display = "block";
    document.querySelector('.box').style.display = "none";
}

function calculateTotal() {
    var precio1 = 169;
    var precio2 = 770;
    var precio3 = 56;

    var cantidad1 = parseInt(document.getElementById("quantity1").value) || 0;
    var cantidad2 = parseInt(document.getElementById("quantity2").value) || 0;
    var cantidad3 = parseInt(document.getElementById("quantity3").value) || 0;

    var total = (cantidad1 * precio1) + (cantidad2 * precio2) + (cantidad3 * precio3);

    document.getElementById("storeResult").innerHTML = "Total a pagar: $" + total + " mxn";
}

window.onload = function() {
    var form = document.querySelector('.box');
    form.addEventListener('submit', validarFormulario);
};
