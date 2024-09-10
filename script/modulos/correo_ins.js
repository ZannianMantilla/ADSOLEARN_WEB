export default function validarCorreo_ins(input) {
    input.addEventListener('blur', () => {
        const regexCorreo = /^[^\s@]+@soy\.sena\.edu\.co$/; // Ajusta el dominio según sea necesario
        if (!regexCorreo.test(input.value)) {
            Swal.fire("Correo inválido", "Por favor, ingresa un correo institucional válido (ej: usuario@soy.sena.edu.co)", "error");
        }
    });
}

