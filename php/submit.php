<?php

class Form {
    
    const MAIL_ADDR = "mail@jbourdale.fr";
    
    public function __construct(){}
    
    public function sendMail($informations){
        $to = self::MAIL_ADDR;
        $subject = "Nouvel enregistrement";
        $content = $this->templateMail($informations);
        
        mail($to, $subject, $content);
    }
    
    public function templateMail($informations){
        
        $mailContent = "
            Bonjour,\n
            Un utilisateur à completer le formulaire avec les informations suivantes :\n
        ";
        foreach($informations as $key => $info){
            $line = $key." : ".$info."\n";
            $mailContent += $line;
        }
        
        $mailContent += "\nMail auto-generé le ".date("d.m.y")."\n";
     
        return $mailContent;   
    }
    
}

$form = new Form();
$json = file_get_contents('php://input');
$json = json_decode($json);

$form->sendMail($json);
echo "OK";

//get resume informations from ajax call
//send mail with $form->sendMail();
?>