export default function validarTelefono(input) {
    input.addEventListener('blur', () => {
        const regexTelefono = /^\d{10}$/;
        if (!regexTelefono.test(input.value)) {
            Swal.fire("Teléfono inválido", "El número de teléfono debe tener 10 dígitos", "error");
        }
    });
}
