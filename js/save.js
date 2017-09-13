function bindInputs(){
    
    var inputs = Array.from(document.getElementsByTagName("input"));
    var select = document.getElementById("sexeSelect");
    inputs.push(select);
    
    for(var i=0; i<inputs.length; i++){
        inputs[i].addEventListener("change", saveToLocalStorage, false);
    }
}

function saveToLocalStorage(event){
    var element = event.target;
    var id = element.name;
    var value = element.value;
    
    localStorage.setItem(id, value);
    
    updateResume(id, value);
}

function updateResume(id, value){
    var resumeElementId = "resume_"+id;
    var resumeElement = document.getElementById(resumeElementId);
    
    resumeElement.innerHTML = value;
}

bindInputs();