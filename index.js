$(".Burgerpage").hide();
$(".Hookapage").hide();
$(".f6").hide();
$(".f7").hide();
$(".kunafatateli").hide();
$(".creptateli").hide();
$(".coldDrinks").hide();
$(".hotDrinks").hide();
$(".loc").hide();

//                   Hooka page
$(".f1").click(function (){
    $(".hooka").fadeOut();
    $(".allchange").fadeOut();
    $("div.des").fadeOut();
    $(".Hookapage").fadeIn();
    $("div.des").css("color","white");
    $("div.des p").css("color","white");
});
$(".arrow").click(function (){
    $(".Hookapage").hide();
    $(".hooka").slideDown();
    $(".allchange").fadeIn();
    $("div.des").fadeIn();
    $(".Hookapage").fadeOut();
    $("div.des").css("color","black");
    $("div.des p").css("color","black");
});
//                   Bugrger Page
$(".f2").click(function (){
    $(".hooka").fadeOut();
    $(".allchange").fadeOut();
    $("div.des").fadeOut();
    $(".Burgerpage").show();
    $("div.des").css("color","white");
    $("div.des p").css("color","white");
})
//               crep & kunafa Page
$(".f3").click(function (){
    if ($(".f4").css('visibility') === 'visible' && ($(".f5").css('visibility')) === 'visible'){
        $(".f5").css('visibility','hidden').fadeOut();
        $(".f4").css('visibility','hidden').fadeOut();
        $(".f6").fadeIn();
        $(".f7").fadeIn();
    }else if ($(".f4").css('visibility') === 'hidden' && ($(".f5").css('visibility')) === 'hidden'){
        $(".f6").fadeOut();
        $(".f7").fadeOut();
        $(".f4").css('visibility','visible').fadeIn();
        $(".f5").css('visibility','visible').fadeIn();
}})

$(".f4").click(function (){
    $(".hooka").fadeOut();
    $(".allchange").fadeOut();
    $("div.des").fadeOut();
    $(".hotDrinks").show();
    $("d.deshooka").css("color","#ddbb68");
    $("div.deshooka a").css("color","#ddbb68");
})

$(".f5").click(function (){
    $(".hooka").fadeOut();
    $(".allchange").fadeOut();
    $("div.des").fadeOut();
    $(".coldDrinks").show();
    $("d.deshooka").css("color","#ddbb68");
    $("div.deshooka a").css("color","#ddbb68");
})
$(".f6").click(function (){
    $(".hooka").fadeOut();
    $(".allchange").fadeOut();
    $("div.des").fadeOut();
    $(".creptateli").show();
    $("d.deshooka").css("color","black");
    $("div.deshooka a").css("color","black");
})
$(".f7").click(function (){
    $(".hooka").fadeOut();
    $(".allchange").fadeOut();
    $(".kunafatateli").show();
    $("d.deshooka").css("color","black");
    $("div.deshooka a").css("color","black");
    $("div.des").fadeOut();
})

$(".location").click(function(){
    if ($(".loc").css('visibility') === 'hidden'){
        $(".loc").show();
        $(".loc").css('visibility','visible');
        $(".no").css("margin-top","20px");
        $(".no").css("font-size","14px");
    }else if ($(".loc").css('visibility') === 'visible'){
        $(".loc").fadeOut();
        $(".loc").css('visibility','hidden');
    }
})
