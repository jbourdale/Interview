<?php

class Templates {
    
    private $templateDir;
    public $formInformations;
    public $formAddress;
    public $resume;
    
    public function __construct($templateDir){
        $this->templateDir = $templateDir;

        $this->formInformations = $this->loadTemplate("informations");
        $this->formAddress = $this->loadTemplate("address");
        $this->resume = $this->loadTemplate("resume");
    }
    
    private function loadTemplate($fileName){
        $fileName = $this->templateDir."/".$fileName.".html";
        return file_get_contents($fileName);
    }
    
}

?>