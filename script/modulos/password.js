export default function validarPassword(input) {
    input.addEventListener('blur', () => {
        if (input.value.length < 6) {
            Swal.fire("Contraseña inválida", "La contraseña debe tener al menos 6 caracteres", "error");
        }
    });
}
