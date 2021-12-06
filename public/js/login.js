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
        let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

        console.log(campoContrasenia.value)
        if(!regexPass.test(campoContrasenia.value)){
            errors.push("La contraseña debe tener mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número");
        }else if(campoContrasenia.value == ""){
            errors.push("El campo de contaseña tiene que estar completo")
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