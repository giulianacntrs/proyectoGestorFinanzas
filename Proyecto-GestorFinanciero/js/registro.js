/******************************** Registro ********************************/

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const codigoPais = document.getElementById("codigoPais");
    const codigoArea = document.getElementById("codigoArea");
    const numeroCelular = document.getElementById("numeroCelular");
    const contraseña = document.getElementById("contraseña");
    const confirmarContraseña = document.getElementById("confirmarContraseña");
    const terminos = document.getElementById("terminos");
    const btnEnviar = document.getElementById("btnEnviar");

    const errores = {
        nombre: "El nombre no puede estar vacío.",
        apellido: "El apellido no puede estar vacío.",
        email: "El email debe ser válido (incluye '@' y '.').",
        telefono: "Todos los campos del teléfono deben ser válidos.",
        contraseña: "Las contraseñas no coinciden."

    };

    const validarCampo = (campo, errorId, condicion, mensaje) => {
        const error = document.getElementById(errorId);
        if (condicion) {
            error.innerText = mensaje;
            return false;
        } else {
            error.innerText = "";
            return true;
        }
    };
    const validarTelefono = () => {
        const paisValido = /^\+\d{1,3}$/.test(codigoPais.value);
        const areaValida = /^\d{1,4}$/.test(codigoArea.value);
        const numeroValido = /^\d{6,12}$/.test(numeroCelular.value);

        if (!paisValido || !areaValida || !numeroValido) {
            document.getElementById("errorTelefono").innerText = errores.telefono;
            return false;
        } else {
            document.getElementById("errorTelefono").innerText = "";
            return true;
        }
    };

    const validarContraseña = () => {
        const contraseñaValida = /^\+\d{1,3}$/.test(contraseña.value);

        if (contraseña.value !== confirmarContraseña.value) {
            errorMessage.textContent = 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.';
            return false;
        } else {
            errorMessage.textContent = '';
            return true;
        }
    };

    const validarFormulario = () => {
        const nombreValido = validarCampo(
            nombre,
            "errorNombre",
            nombre.value.trim() === "",
            errores.nombre
        );

        const apellidoValido = validarCampo(
            apellido,
            "errorApellido",
            apellido.value.trim() === "",
            errores.apellido
        );

        const emailValido = validarCampo(
            email,
            "errorEmail",
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
            errores.email
        );
    }

    const telefonoValido = validarTelefono();
    const formularioValido =
        nombreValido &&
        apellidoValido &&
        emailValido &&
        telefonoValido &&
        terminos.checked;

    btnEnviar.disabled = !formularioValido;

    if (formularioValido) {
        btnEnviar.classList.add("active");
    } else {
        btnEnviar.classList.remove("active");
    };

    form.addEventListener("input", validarFormulario);
    terminos.addEventListener("change", validarFormulario);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Formulario enviado con éxito!");
    });
});





