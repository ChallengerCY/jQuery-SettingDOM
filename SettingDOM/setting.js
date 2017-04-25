/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("#b1").click(function(){
        $("#p1").text("ChallengerCY");
    })
    $("#b2").click(function(){
        $("#p1").html("<a href='http://www.baidu.com'>百度</a>");
    })
    $("#b3").click(function(){
        $("#i1").val("ChallengerCY");
    })
    $("#b4").click(function(){
        $("#a1").attr("href","http://www.qq.com");
    })
    $("#b5").click(function(){
        $("#a1").attr({"href":"http://www.qq.com","title":"hello"});
    })
    $("#b6").click(function(){
        $("#p2").text(function(i,old){
            return "old;"+old+"new:ChallengerCY";
        })
    })
})