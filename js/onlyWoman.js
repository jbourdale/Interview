function checkIfWomanSelected(){
    var select = document.getElementById("sexeSelect");
    var sexe = select.options[select.selectedIndex].value;
        
    var inputs = document.getElementsByClassName("womanOnly");
    
    if(sexe == "F") {
    // enable woman only fields
        for(var i = 0; i<inputs.length; i++){
            inputs[i].className += " enabled";
        }
    }else{
    // disabled them
        for(var i = 0; i<inputs.length; i++){
            inputs[i].className = inputs[i].className.replace(" enabled", "");
        }   
    }
}