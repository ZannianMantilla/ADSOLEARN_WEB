export default function validarNombreApellido(input) {
    input.addEventListener('blur', () => {
        if (input.value.trim() === "") {
            Swal.fire("Campo obligatorio", "El campo no puede estar vacío", "warning");
        }
    });
}
