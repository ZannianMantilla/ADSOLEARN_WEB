export default function manejarSubmit(form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita el envío tradicional del formulario

        const nombre = document.getElementById('nombre_form')?.value.trim();
        const apellido = document.getElementById('apellido_form')?.value.trim();
        const correo_ins = document.getElementById('correo_ins')?.value.trim(); 
        const password = document.getElementById('password_form')?.value.trim();
        const telefono = document.getElementById('telefono_form')?.value.trim();
        const edad = document.getElementById('edad_form')?.value;


        if (!nombre || !apellido || !correo_ins || !password || !telefono || !edad) {
            Swal.fire("Campos incompletos", "Por favor, completa todos los campos requeridos", "warning");
            return;
        }


        try {
            const response = await fetch('/api/register-aprendiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, apellido, correo_ins, password, telefono, edad })
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire("Registro exitoso", "Tu cuenta ha sido creada correctamente", "success");
                form.reset(); // Reinicia el formulario si todo está bien
            } else {
                Swal.fire("Error", data.message || "Hubo un problema al registrar tu cuenta", "error");
            }

        } catch (error) {
            console.error('Error en el registro:', error);
            Swal.fire("Error", "No se pudo enviar la solicitud", "error");
        }
    });
}
