function CalcularEdad(){
    const date_input = document.getElementById("calculatorage").value;
    if(date_input.length == 0){
        swal.fire(
            "Error", 
            "Porfavor ingrese una fecha", 
            "error"
        );
        return
    }else{
        var date = new Date(date_input);
        var today = new Date();
        let edad = today.getFullYear() - date.getFullYear();
        if(edad < 0 || (edad === 0 && today.getDate() < date.getDate())){
            edad--;
        }
        swal.fire(
            "Correct", 
            "Tu edad es "+ edad, 
            "success"
        );

    }
   
    
}