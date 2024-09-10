export default function validarEdad(input) {
    input.addEventListener('blur', () => {
        const fechaNacimiento = new Date(input.value);
        const hoy = new Date();

        // Validar si la fecha es válida
        if (isNaN(fechaNacimiento.getTime())) {
            Swal.fire("Fecha inválida", "Por favor, ingresa una fecha válida", "error");
            return;
        }

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();
        const dia = hoy.getDate() - fechaNacimiento.getDate();

        // Ajustar la edad si el mes o el día aún no han llegado
        if (mes < 0 || (mes === 0 && dia < 0)) {
            edad--;
        }

        // Verificar si la edad está en el rango permitido
        if (edad < 15 || edad > 90) {
            Swal.fire("Edad no válida", "Debes tener entre 15 y 90 años", "error");
        }
    });
}
