// Validaciones log-in:

window.addEventListener("load", function(){
    let formulario = document.querySelector("form.log-in");

    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let errors = []

        let campoEmail = document.querySelector("input[name='email']");
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

        if (!regexEmail.test(campoEmail.value)){
            errors.push("Email inválido")   
        }

        let campoContrasenia = document.querySelector("input[name='pass']");
        let regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

        if(!regexPass.test(campoContrasenia)){
            errors.push("Ingresa una contraseña")
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