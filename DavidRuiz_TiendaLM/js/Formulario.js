// Cargamos todas las cosas que necesitamos antes de empezar con eventos.
const DOMSubmit = document.querySelector(".botones > button[type='submit']");
DOMSubmit.innerHTML = `Enviar`;
document.querySelector(".botones > button[type='reset']").innerHTML = `Limpiar`;


const pass1 = document.forms.formReg.pass;
const pass2 = document.forms.formReg.confirma;
const usuario = document.forms.formReg.nombre;
const email = document.forms.formReg.mail;
const direccion = document.forms.formReg.dir;

//#region Nav Iniciar sesion (cuando le des click al iniciar sesion del nav que oculte los elementos del registro)
const DOMLogin = document.querySelector('nav > a:nth-child(2)');

DOMLogin.addEventListener("click", () => {
    if (DOMLogin.textContent == "Iniciar sesion") {
    const labels = document.querySelectorAll(".detalles");
    const titulo = document.querySelector(".title");
    titulo.textContent = "Iniciar sesion";
    labels[1].style.display = "none";
    labels[4].style.display = "none";
    email.style.display = "none";
    email.required = "false";
    direccion.style.display = "none";
    DOMLogin.textContent = "Registrarse";
    } else if (DOMLogin.textContent == "Registrarse") {
        const labels = document.querySelectorAll(".detalles");
        const titulo = document.querySelector(".title");
        titulo.textContent = "Registro";
        labels[1].style.display = "block";
        labels[4].style.display = "block";
        email.style.display = "block";
        direccion.style.display = "block";
        DOMLogin.textContent = "Iniciar sesion";
    }
});

//#endregion Nav Iniciar sesion 

// #region Usuario validar usuario. No hace falta corregir esto, lo hice opcionalmente.

usuario.addEventListener("blur", () => {
    if (usuario.value.trim() == "") 
    {
        console.log("Valor del usuario: ", usuario.value, " longitud: " , usuario.value.length);
        usuario.setCustomValidity("Por favor, introduzca su usuario.");
        usuario.reportValidity();
    } else {
        usuario.setCustomValidity("");
    }
});


// #endregion Usuario validar usuario



// #region EMAIL Validar email. No hace falta corregir esto, lo hice opcionalmente.
email.addEventListener("input", () => {

    if(!email.checkValidity()) {
        console.log("El email introducido no es correcto: ", email.checkValidity());
        if (email.validity.patternMismatch) {
            console.log("El pattern esta mal");
            email.setCustomValidity("Direccion de correo incorrecta. Asegurese de que ha escrito algo antes del '@' o que su dominio sea '@educa.madrid.org' o '@gmail.com'.")
            email.reportValidity();
        } else if (email.value.trim() == '') {
            console.log("Email lleno de espacios");
            email.setCustomValidity("Asegurese de que ha escrito algo o de que no hay un espacio invalidando la direccion de correo.")
            email.reportValidity();
        } else {
            console.log("El pattern esta bien!");
            email.setCustomValidity("");
        }
    } else {
        email.setCustomValidity("");
    }

});

email.addEventListener("blur", () => {

    if(!email.checkValidity()) {
        console.log("El email introducido no es correcto: ", email.checkValidity());
        if (email.validity.patternMismatch) {
            console.log("El pattern esta mal");
            email.setCustomValidity("Direccion de correo incorrecta. Asegurese de que ha escrito algo antes del '@' o que su dominio sea '@educa.madrid.org' o '@gmail.com'.")
            email.reportValidity();
        } else if (email.value.trim() == '') {
            console.log("Email lleno de espacios");
            email.setCustomValidity("Asegurese de que ha escrito algo o de que no hay un espacio invalidando la direccion de correo.")
            email.reportValidity();
        } else {
            console.log("El pattern esta bien!");
            email.setCustomValidity("");
        }
    } else {
        email.setCustomValidity("");
    }

});
// #endregion EMAIL Validar email

//#region PASSWORD

 // Validar que lo escrito en las dos contraseñas sea idéntico.
 const validarContrasenya = (e) => {
       
    let sw = false;
    if (pass1.value == "") {
        pass1.setCustomValidity("El campo de contraseña esta vacio. Por favor introduzca su contraseña.");
        pass1.reportValidity();
        e.preventDefault();
    } else if (pass2.value == "") {
        pass2.setCustomValidity("La confirmación de contraseña esta vacia. Por favor introduzca la misma contraseña que en el campo de 'Contraseña'");
        pass2.reportValidity();
        e.preventDefault();
    } else if (pass1.value == pass2.value) {
        alert("La contraseña coincide con la confirmacion de contraseña");
        pass1.setCustomValidity("");
        pass2.setCustomValidity("");
        sw = true;
        if (pass1.value !== datosLS.contrasenya && sw == true && DOMLogin.textContent == "Registrarse") {
            pass1.setCustomValidity("Contraseña incorrecta. No te has registrado con esa contraseña, para recuperarla pulse en el botón de recuperar contraseña");
            pass1.reportValidity();
            alert("Como no es la misma contraseña que la del localstorage, no se hace nada..");
            e.preventDefault(); // Asegúrate de pasar el evento e aquí
        } else {
            pass1.setCustomValidity("");
        }
    }
    else {
        pass2.setCustomValidity("Las contraseñas no coinciden. Asegurese de escribir la misma que en el anterior campo.");
        pass2.reportValidity();
        e.preventDefault();

    }
    
};


    
    // Que exista una forma de mostrar la contraseña, que sea visible para ver lo que has escrito.
  const ojo = document.querySelector(".ojo");
  const ojoC = document.querySelector(".ojoConf")

    ojo.addEventListener("click", () => {
        if (pass1.type == "text") {
         pass1.type = "password"
         
         } else {
        pass1.type = "text";
        
        }
    });
    ojoC.addEventListener("click", () => {
        if (pass2.type == "text") {
         pass2.type = "password"
         
         } else {
        pass2.type = "text";
        
        }
    });

//#endregion PASSWORD


//#region Direccion
    // En el caso de que al hacer el submit el campo "dirección completa" tenga una longitud inferior a 10, debe salir un mensaje personalizado diciendo:
    // : "Dirección demasiado corta. No has escrito la dirección de envío completa"
    
    direccion.addEventListener("input", () => {
        const caracteres =  direccion.value.length;
        if (direccion.value.trim() === '') {
            direccion.setCustomValidity("Dirección demasiado corta. No has escrito la dirección de envío completa");
        } else if (direccion.value.length < 10) {
            direccion.setCustomValidity(`Dirección demasiado corta. Debe tener al menos 10 caracteres.  Has introducido: ''' ${caracteres} ''' caracter(es).`);
        } else {
            direccion.setCustomValidity(""); // Restablecer la validez personalizada si no hay problemas
        }
    });

    
  
//#endregion Direccion


//#region LOCALSTORAGE Guardar el usuario dentro del LS y mostrar el el login o el formulario
// Haz que apareza y desaparezca una vez que el usuario se ha registrado o iniciado sesión.
// El formulario que vas a mostrar es el mismo, pero dependiendo de si el json con la información del usuario está guardado en el localStorage, saldrá con unos campos u otros.
// LocalStorage:
    document.forms.formReg.addEventListener("submit", (e) => {
        const datos = {
            usuario: usuario.value,
            email: email.value,
            contrasenya: pass1.value,
            confirmacionContrasenya: pass2.value,
            direccion: direccion.value
        };
       
        // Guarda en el LocalStorage un json con un objeto con toda la información de registro del usuario (todos los datos obligatorios del formulario).
        window.localStorage.setItem("datosUser", JSON.stringify(datos));
    });

    

    // De esta forma simulamos que el usuario está dado de alta en el sistema (en una base de datos).
        // Si al cargar el formulario el usuario está guardado en el LocalStorage, debes modificar el formulario (usando JS) para mostrar solo la siguiente información:
            // Usuario:
            // .......
            // Contraseña:
            // .......

            let datosLS;
            if(window.localStorage.getItem("datosUser")) {
                datosLS = JSON.parse(window.localStorage.getItem("datosUser")); 
            };
        
            if (datosLS && datosLS.usuario) {
               const botonSubmit = 
               DOMSubmit.addEventListener("click", (e) => {
                 // Verificar usuario y correo dentro de LS
               
                 if ( DOMLogin.textContent == "Registrarse") {
                   // Verificamos en el INICIAR SESION si el usuario y contraseña son correcto
                    if (usuario.value == datosLS.usuario && DOMLogin.textContent == "Registrarse") { 
                        alert("Usuario correcto")
                        if (pass1.value !== datosLS.contrasenya) {
                            alert("La contraseña introducida no coincide con la del LocalStorage. Verifica las mayusculas")
                        } else if(pass1.value == pass2.value) {
                            alert("Ha iniciado sesion correctamente!")
                        }
                    } else {
                        alert("Ese usuario no esta en el LocalStorage. No se hace nada.")
                        e.preventDefault()
                    }
                    // Verificamos en el REGISTRO si el usuario está registrado en el LS
                 } else if(DOMLogin.textContent == "Iniciar sesion") {
                    if (usuario.value == datosLS.usuario && DOMLogin.textContent == "Iniciar sesion") {
                        alert("Ese usuario ya ha sido registrado en el LocalStorage. No se hara el SUBMIT.");
                        e.preventDefault();
                    } 
                    // Verificamos si el correo electronico esta en el LS
                    if (email.value == datosLS.email) {
                        alert("Ese correo ya ha sido registrado en el LocalStorage. No se hace el SUBMIT.");
                        e.preventDefault();
                    }
                };
                 
               
                
             });
        
                // Cambiar password dentro de LS
                const recuperarPass = document.querySelector(".botones > button[type='reset']");
                recuperarPass.textContent = "Recuperar contraseña";
                recuperarPass.addEventListener("click", () => {
                   const ver1= confirm("Vas a sobreescribir la contraseña del LocalStorage.. ESTAS SEGURO?");
                    if (ver1) {
                    const nuevaPass = prompt("Introduzca nueva contraseña");
                        if (nuevaPass == null) {
                            alert("No se ingreso nueva contraseña");
                            } else {
                            const ver2 = confirm("Seguro que quieres esa contraseña?");
                                if (ver2){
                                    
                                    datosLS.contrasenya = nuevaPass;
                                    datosLS.confirmacionContrasenya = nuevaPass;
                                    window.localStorage.setItem("datosUser", JSON.stringify(datosLS));
                                    alert("Contraseña cambiada correctamente.");
                                } else {
                                    alert("Operacion cancelada");
                                } 
                            }
                    } else {
                        alert("Operacion cancelada");
                    }
                    
                });
                const labels = document.querySelectorAll(".detalles");
                const titulo = document.querySelector(".title");
                titulo.textContent = "Iniciar sesion";
                labels[1].style.display = "none";
                labels[4].style.display = "none";
                email.style.display = "none";
                email.required = "false";
                direccion.style.display = "none";
                DOMLogin.textContent = "Registrarse";
            }

         
            // AUTENTICACION
                // Usuario
                // Contraseña

                // Event listener para verificar la contraseña
           

            //  Submit
            DOMSubmit.addEventListener("click", validarContrasenya);

    // Al hacer submit comprobad que el login y pwd introducido coincidan con el usuario guardado en el localStorage.
    // En caso correcto, que desaparezca el formulario como que ya se ha logado y se muestre un mensaje de bienvenida.

    // En caso contrario que salga un mensaje avisando. Total libertad con el formato para mostrar el mensaje.
    //#endregion  LOCALSTORAGE Guardar el usuario dentro del LS y mostrar el el login o el formulario