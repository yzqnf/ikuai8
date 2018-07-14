$(document).ready(function(){
  $(window).scroll(function() {
    var htmlTop=$(document).scrollTop();
    if(htmlTop>0){
      $("#header").addClass("mini");
    } else{
      $("#header").removeClass("mini");
    }
  });
  $("#weixin").click(function(){
    $("#outer-w").show();
  });
  $("#bg-black , #close").click(function(){
    $("#outer-w").hide();
  });
});