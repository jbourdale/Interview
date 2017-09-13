function setResumeFromLocalStorage(){
    
    var names = [
        "name",
        "firstname",
        "date",
        "sexeSelect",
        "ladyname",
        "nbChild",
        "address",
        "typeaddr",
        "numaddr",
        "nameaddr",
        "postcode",
        "city",
        "country"
    ]
    
    for(var i=0; i<names.length; i++){
        var value = localStorage.getItem(names[i]);
        
        updateResume(names[i], value); // from save.js
        updateFields(names[i], value);
    }
}

function updateFields(name, value){
    var field = document.getElementsByName(name)[0];
    if(value) field.value = value;
    
    if(name == "sexeSelect"){ checkIfWomanSelected(); }
}

function clearLocalStorage(){
    localStorage.clear();
    setResumeFromLocalStorage();
}

setResumeFromLocalStorage();