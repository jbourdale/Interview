<head>
    <meta charset="utf-8">
    <title>Joggos exo</title>
    <link rel="stylesheet" type="text/css" href="./css/main.css">
    
    <?php
        include './php/templates.php';
        $templates = new Templates("./templates");
    ?>
</head>

<body>
    <div class="tabs">
        <ul class="buttons">
            <li><button onclick="openTab(event, 'information')" class="tablink">Informations</button></li>
            <li><button onclick="openTab(event, 'address')" class="tablink">Adresse</button></li>
            <li><button onclick="openTab(event, 'resume')" class="tablink">Resume</button></li>
        </ul>
        <ul>
            <li class="tab" id="information_tab">
                <?php echo $templates->formInformations;?>
            </li>
            <li class="tab" id="address_tab">
                <?php echo $templates->formAddress;?>
            </li>
            <li class="tab" id="resume_tab">
                <?php echo $templates->resume;?>
            </li>
        </ul>
    </div>
    
    <script src="./js/tabs.js"></script>
    <script src="./js/save.js"></script>
    <script src="./js/load.js"></script>
    <script src="./js/ajax.js"></script>
</body>