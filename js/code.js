function calculo() {
    // alert("hellow");
    let totalCuenta = document.getElementById("total").value;
    let servicio = document.getElementById("servicio").value;
    let personas = document.getElementById("personas").value;

    let resultado = (servicio * totalCuenta) / personas;

    //Si no se rellenan los campos saltaran avisos
    if (isNaN(resultado)) {
        alert('Rellene los datos.');
    } else if (personas == '' || personas == 0) {
        alert('Introduce el numero de personas que van a pagar.')
    } else if (servicio == '') {
        alert('Seleccione un servicio.')
    } else if (totalCuenta == '' || totalCuenta == 0) {
        alert('Introduce el total de la cuenta.')
    } else {
        console.log('resultado: ' + resultado)
        console.log(resultado)
        document.getElementById("res").innerHTML = "<p>Total a pagar</p><h3>" + resultado + " por persona</h3>"
    }

    /*
        let servicio = document.getElementsByName('servicio')[0].value;
        let personas = document.getElementsByClassName('personas')[0].value;
*/
}

//boton limpiar
function limpiar() {
    document.getElementById("res").innerHTML = ""
    document.getElementById('form').reset()
}