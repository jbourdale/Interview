function openTab(event, tabName){
    // hide all
    var tabs = document.getElementsByClassName('tab');
    var tabsLink = document.getElementsByClassName('tablink');
    
    for(var i = 0; i < tabs.length; i++ ){
        tabs[i].className = tabs[i].className.replace(" active", "");
        tabsLink[i].className = tabsLink[i].className.replace(" tabActive", "");
    }
    
    // display the selected
    var tabId = tabName + "_tab";
    var tab = document.getElementById(tabId);
    
    tab.className += " active";
    event.target.className += " tabActive";
}