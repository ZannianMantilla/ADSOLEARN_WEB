export default function validarCorreoGeneral(input) {
    input.addEventListener('blur', () => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexCorreo.test(input.value)) {
            Swal.fire("Correo inválido", "Por favor, ingresa un correo electrónico válido", "error");
        }
    });
}
