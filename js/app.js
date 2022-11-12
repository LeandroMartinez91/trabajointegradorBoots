form.addEventListener("submit", e => {
    e.preventDefault();
    let total;
    let porcentaje_estudiante = 80;
    let porcentaje_trainee = 50;
    let porcentaje_junior = 15;
    const cantidad = document.getElementById("numero").value;
    const categoria = document.getElementById("categoria").value;
    switch (categoria) {
        case '1':
            total = (200 * cantidad);
            porcentaje_estudiante = (total * porcentaje_estudiante) / 100;
            total = total - porcentaje_estudiante;
            break;
        case '2':
            total = (200 * cantidad);
            porcentaje_trainee = (total * porcentaje_trainee) / 100;
            total = total - porcentaje_trainee;
            break;
        case '3':
            total = (200 * cantidad);
            porcentaje_junior = (total * porcentaje_junior) / 100;
            total = total - porcentaje_junior;
            break;
        default:
            total='';
            break;  
    }
    document.getElementById('Resultado').innerHTML = total;
})


function borrar() {
    

    document.getElementById('Resultado').innerHTML = '';
}

