import validarNombreApellido from './modulos/nombreApellido.js';
import validarCorreo_ins from './modulos/correo_ins.js';
import validarCorreo from './modulos/correo.js';
import validarPassword from './modulos/password.js';
import validarTelefono from './modulos/telefono.js';
import validarEdad from './modulos/edad.js';
import manejarSubmit from './modulos/submit.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form_register');

    const nombreInput = document.getElementById('nombre_form');
    const apellidoInput = document.getElementById('apellido_form');
    const correoInsInput = document.getElementById('correo_ins');
    const correoGeneralInput = document.getElementById('correo_general');
    const passwordInput = document.getElementById('password_form');
    const telefonoInput = document.getElementById('telefono_form');
    const edadInput = document.getElementById('edad_form');


    if (nombreInput) validarNombreApellido(nombreInput);
    if (apellidoInput) validarNombreApellido(apellidoInput);
    if (correoInsInput) validarCorreo_ins(correoInsInput);
    if (correoGeneralInput) validarCorreo(correoGeneralInput);
    if (passwordInput) validarPassword(passwordInput);
    if (telefonoInput) validarTelefono(telefonoInput);
    if (edadInput) validarEdad(edadInput);

    manejarSubmit(form);
});
