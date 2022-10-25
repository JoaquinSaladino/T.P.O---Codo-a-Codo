const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const direccion = document.getElementById("direccion");
const codigo_postal = document.getElementById("codigo-postal");
const contraseña = document.getElementById("contraseña");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit",(e)=>{
    let messages =[]

    if(nombre.value === "" || nombre.value === null){
        messages.push("El nombre es requerido")
    }

    if(apellido.value === "" || apellido.value === null){
        messages.push("El apellido es requerido")
    }

    if(direccion.value === "" || direccion.value === null){
        messages.push("La dirección es requerida")
    }

    if(codigo_postal.value === "" || codigo_postal.value === null){
        messages.push("El código postal es requerido")
    }

    if(contraseña.value.lenght <= 6){
        messages.push("La contraseña debería tener mas de 5 caracteres")
    }

    if(contraseña.value.lenght >= 20){
        messages.push("La contraseña debería tener menos de 20 caracteres")
    }

}

)