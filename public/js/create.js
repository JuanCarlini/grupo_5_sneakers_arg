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

       let campoDescripcion = document.querySelector("input[name='surname']");

        if(campoDescripcion.value == ""){
            errors.push("El campo de descripcion tiene que estar completo");
        }

        let campoCategoria = document.querySelector("input[name='category']");

        if(campoCategoria.value == ""){
            errors.push("El campo de categoría tiene que estar completo");
        }

        let campoColor = document.querySelector("input[name='color']")

        if(campoColor.value == ""){
            errors.push("El campo de color tiene que estar completo")
        }

        let campoPrecio = document.querySelector("input[name='price']")

        if(campoPrecio.value == ""){
            errors.push("El campo de precio tiene que estar completo")
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