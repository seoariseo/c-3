$(function(){
    $(".main > li").hover(function(){
        $(this).find(".sub").slideDown();
    }, function(){
        $(".sub").hide();
    })//hover




    // var n = 0;
    // setInterval(function(){
    //     if(n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //     }//if

    //     var i = n*(-800) + "px"
    //     $(".left_move").animate({left : i },500)

    // } , 2500)//setInterval

    setInterval(function(){
        $(".left_move").animate({left : "-800px"},500,function(){

            $(".left_move").eq(0).append($(".left_move li").eq(0))
            $(".left_move").css({left : 0})
        })//animate

    }, 2500)//setInterval


//pop click

$(".p_click").click(function(){
    $(".pop").show();
})

$(".close").click(function(){
    $(".pop").hide();
})





})//