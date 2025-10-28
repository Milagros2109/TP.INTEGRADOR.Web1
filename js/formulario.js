const error = document.getElementsByClassName('ingreso-erroneo');
console.log(error[2]);
function validarDatos() {
    const form = document.forms['formulario'];
    const inputNombre = form['nombre'];
    const regNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/
    const inputEmail = form['email'];
    const regEmail = /^(\w)+@(\w)+\.com(\.ar)?$/;
    const inputTelefono = form['telefono'];
    const regTelefono = /^[0-9+\-\s]{8,12}$/
    const inputAsunto = form['asunto'];
    const inputMensaje = document.getElementById('mensaje');
    let enviar = true;
    console.log(inputNombre);
    if (!regNombre.test(inputNombre.value)) {
        inputNombre.style.borderColor = '#e74c3c';
        inputNombre.style.boxShadow = '3px 3px 0 rgba(231, 76, 60, 0.5)';
        error[0].style.display = 'block';
        enviar = false;
    } else {
        inputNombre.style.borderColor = '#008584';
        inputNombre.style.boxShadow = '3px 3px 0 rgba(0, 133, 132, 0.5)';
        error[0].style.display = 'none';
    }
    if (!regEmail.test(inputEmail.value)) {
        inputEmail.style.borderColor = '#e74c3c';
        inputEmail.style.boxShadow = '3px 3px 0 rgba(231, 76, 60, 0.5)';
        error[1].style.display = 'block';
        enviar = false;
    } else {
        inputEmail.style.borderColor = '#008584';
        inputEmail.style.boxShadow = '3px 3px 0 rgba(0, 133, 132, 0.5)';
        error[1].style.display = 'none';
    }
    
    if (!regTelefono.test(inputTelefono.value)) {
        inputTelefono.style.borderColor = '#e74c3c';
        inputTelefono.style.boxShadow = '3px 3px 0 rgba(231, 76, 60, 0.5)';
        error[2].style.display = 'block';
        enviar = false;
    } else {
        inputTelefono.style.borderColor = '#008584';
        inputTelefono.style.boxShadow = '3px 3px 0 rgba(0, 133, 132, 0.5)';
        error[2].style.display = 'none';
    }

    if (enviar) {
        datosContacto(inputNombre.value, inputEmail.value, inputTelefono.value, inputAsunto.value, inputMensaje.value)
    }
    return false;
}

function datosContacto(nombre, email, telefono, asunto, mensaje) {
    const divDatos = document.getElementById('informacion-subida');
    divDatos.style.display = 'block';
    divDatos.innerHTML += `
        <div class=info-subida>
            <span>${nombre}</span>
            <span>${email}</span>
            <span>${telefono}</span>
            <span>${asunto}</span>
            <span>${mensaje}</span>
        </div>
    `
}
