

//alert('key1: ' + myData);
var appUrl = localStorage.getItem("appUrl");

function installApp(){
    window.open(appUrl, '_blank').focus();
}


function moreApps(){
    window.location.href="/index.html";
}

function Init(){
var appName = document.getElementById("appName");
var appText = document.getElementById("appText");
var appImage = document.getElementById("appImage");
var appUrl = document.getElementById("appUrl");

appName.innerHTML = localStorage.getItem("appName");
appText.innerHTML = localStorage.getItem("appText");
appImage.src = localStorage.getItem("appImage");


}