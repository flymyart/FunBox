$(document).ready(function(){

    $(".block-with-btm").mouseleave(function(e){
        var el = $(this).find(".text-up-hover").css('display');
        var elBottom = $(this).find(".text-bottom-default").css('display');
        var elDisabled = $(this).find(".text-bottom-disabled").css('display');
        // console.log(el);
        if( el == 'none'  &&  elBottom != 'none' && elDisabled == 'none' ){
            $(this).find(".text-up-default").css("display", "none");
            $(this).find(".text-up-hover").css("display", "inline");
            $(this).find(".products-part").find(".circle").css("background-color", "#ff3366");
            $(this).find(".products-border").addClass("special");
            $(this).find(".products-part").find(".products-text p").css("color", "#ff3366");
            $(this).find(".text-bottom-default").css("display", "none");
            $(this).find(".text-bottom-hover").css("display", "inline");
            e.preventDefault();
        }
    });

    $(".block-with-btm").click(function(e){
        var el = $(this).find(".text-up-hover").css('display');
        var elBottom = $(this).find(".text-bottom-default").css('display');
        var elDisabled = $(this).find(".text-bottom-disabled").css('display');
        // console.log(elBottom);
        if ( elBottom != 'none' ){
            $(this).find(".products-part").find(".circle").css("background-color", "#ff3366");
            $(this).find(".products-border").addClass("special");
            $(this).find(".text-bottom-default").css("display", "none");
            $(this).find(".text-bottom-hover").css("display", "inline");
        }else if( el != 'none' ){
            $(this).find(".text-up-default").css("display", "inline");
            $(this).find(".text-up-hover").css("display", "none");
            $(this).find(".products-part").find(".products-text p").css("color", "#666666");
        }else if( elDisabled != 'none'){
            e.preventDefault();
        }
        else{
            $(this).find(".products-part").find(".circle").css("background-color", "#0099cc");
            $(this).find(".products-border").removeClass("special");
            $(this).find(".text-bottom-default").css("display", "inline");
            $(this).find(".text-bottom-hover").css("display", "none");
        }
    });

    $(".block-with-btm").find(".text-bottom-default a").click(function(e){
        var elBottom = $(this).find(".text-bottom-default").css('display');
        
        // console.log(elBottom);
        if ( elBottom != 'none' ){
            $(this).find(".products-part").find(".circle").css("background-color", "#ff3366");
            $(this).find(".products-border").addClass("special");
            $(this).find(".text-bottom-default").css("display", "none");
            $(this).find(".text-bottom-hover").css("display", "inline");
        }    
    });

    var block = $(".block");
    var blockItems = block.find(".block-with-btm");
    var numberItem = 0;

    block.each(function(){
        var lengthItem = blockItems.length;
        var random = Math.random();
        var randomIndex = Math.floor(random * lengthItem);

        if( randomIndex < lengthItem - 1){
            blockItems.eq(randomIndex).find(".circle").css("background-color", "#cccccc");
            blockItems.eq(randomIndex).find(".products-border").addClass("special1");
            blockItems.eq(randomIndex).find(".products-text blockquote").css("color", "#cccccc");
            blockItems.eq(randomIndex).find(".products-text blockquote span").css("color", "#cccccc");
            blockItems.eq(randomIndex).find("h2").css("color", "#cccccc");
            blockItems.eq(randomIndex).find("h2 span").css("color", "#cccccc");
            blockItems.eq(randomIndex).find(".text-up-default").css("color", "#cccccc");
            blockItems.eq(randomIndex).find(".products-part img").css("opacity", "0.5");
            blockItems.eq(randomIndex).find(".text-bottom-default").css("display", "none");
            blockItems.eq(randomIndex).find(".text-bottom-disabled").css("display", "inline");
        }else{
            numberItem = 0;
            blockItems.eq(randomIndex).find(".circle").css("background-color", "#cccccc");
            blockItems.eq(randomIndex).find(".products-border").addClass("special1");
            blockItems.eq(randomIndex).find(".products-text blockquote").css("color", "#cccccc");
            blockItems.eq(randomIndex).find(".products-text blockquote span").css("color", "#cccccc");
            blockItems.eq(randomIndex).find("h2").css("color", "#cccccc");
            blockItems.eq(randomIndex).find("h2 span").css("color", "#cccccc");
            blockItems.eq(randomIndex).find(".text-up-default").css("color", "#cccccc");
            blockItems.eq(randomIndex).find(".products-part img").css("opacity", "0.5");
            blockItems.eq(randomIndex).find(".text-bottom-default").css("display", "none");
            blockItems.eq(randomIndex).find(".text-bottom-disabled").css("display", "inline");

        }

        // console.log(randomIndex);

    });
});

