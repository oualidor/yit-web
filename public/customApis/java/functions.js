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


$(document).ready(function(){
  $('.toAnimate').textillate({
    minDisplayTime: 1500,
    in: { effect: 'flipInX', sync: true },
    out :{  delay: 1, effect: 'tada', sync: true},
    loop: true
  });

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    setMobileDimensions();
    $(window).resize(function(){
      setMobileDimensions();
    });

  }else {
    setDimenstions();
    $(window).resize(function(){
      setDimenstions();
    });
  }
});
