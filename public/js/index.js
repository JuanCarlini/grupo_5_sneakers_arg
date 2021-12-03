// Validaciones register:

window.addEventListener("load", function(){
    let formulario = document.querySelector("form.register");

    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let errors = []
        
        let campoNombre = document.querySelector("input[name='name']");
        console.log(campoNombre)

        if(campoNombre.value == ""){
            errors.push("El campo de nombre tiene que estar completo");
        } else if(campoNombre.value.length < 3){
            errors.push("El campo de nombre debe tener al menos 3 caracteres")
       }

       let campoApellido = document.querySelector("input[name='surname']");

        if(campoApellido.value == ""){
            errors.push("El campo de apellido tiene que estar completo");
        }

        let campoEmail = document.querySelector("input[name='email']");
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

        if (!regexEmail.test(campoEmail.value)){
            errors.push("Email inválido")   
        }

        let campoUsuario = document.querySelector("input[name='user']");

        if(campoUsuario.value == ""){
            errors.push("El campo de usuario tiene que estar completo");
        }

        let campoContrasenia = document.querySelector("input[name='name']");

        if(campoContrasenia.value == ""){
            errors.push("El campo de contraseña tiene que estar completo");
        }

        

        if (errors.length > 0) {
            
            
            let ulErrors = document.querySelector("div.errors ul")
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
                
            }

        }else{
            this.submit()
        }
    })
})