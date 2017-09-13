function sendMail(){
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://joggosexo-jbourdale.c9users.io/php/submit.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            if(xhr.responseText == "OK"){
                displayMailConfirmation();
            }
        }
    }
    xhr.send(JSON.stringify(localStorage));
    
}

function displayMailConfirmation(){
    var element = document.getElementById("mailConfirmation");
    element.className = "mailConfirmation";
}