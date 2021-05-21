import $ from "jquery";

function detectMobile(){
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        return true;


    }else {
        return false;
    }
}

const isMobile = detectMobile();
function setDimenstions(){

    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


    $('body').css("height", h+"px");
    $('body').css("width", w+"px");
}

function setMobileDimensions(){

    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    $('body').css("height", h+"px");
    $('body').css("width", w+"px");

}

export {isMobile, setDimenstions, setMobileDimensions}