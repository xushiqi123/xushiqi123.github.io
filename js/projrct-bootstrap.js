/**
 * Created by  ¿∆Ê on 2016/7/10.
 */
//“≥Ω≈‘ﬁ÷˙…Ãπˆ∂Ø
function linksInit(){
    var current=0;
    var length=$('.link-brand').length;
    var duration=3000;
    var direction=1;
    var linksCount=6;
    var linksWidth=$('.links').width();
    var eachWidth=linksWidth/linksCount;
    var timer;

    $('.link-brand').each(function(){
        $(this).css('width',eachWidth+'px');
    })

    function moveTo(num){
        $('.links-outter').css('left',(-num*eachWidth)+'px');
    }
    function moveStart(){
        timer=setInterval(function(){
            if( current<=0 ){
                direction=1;
            }
            else if( current >= ( length-linksCount) ){
                direction=-1;
            }
            current=current+direction;
            moveTo(current);
        },duration);
    }
    moveStart();

    $('.link-brand').hover(function(){
        clearInterval(timer);
    },function(){
        moveStart()
    })
}

window.onload=function(){
    linksInit();
}



//Õº∆¨πˆ∂Ø“∆»Î
function scrollFunction(class1,to1){
    if(document.body.scrollTop>to1){
        $('.'+class1).addClass('scrollTo');
    }else{
        $('.'+class1).removeClass('scrollTo');
    }
}

$(window).on('scroll',function(){
    scrollFunction('navbar-default',200);
    scrollFunction('MacBook-pic-outer',300);
    scrollFunction('eight-pic',1400);
    scrollFunction('six-ul',1760);
    scrollFunction('iphone-pic-out',2700);
    scrollFunction('iphone-footer-txt',3100);
    scrollFunction('four-pic-ul',3600);
    scrollFunction('three-pic-ul',4800);
    scrollFunction('three-pic-txt',5000);
    scrollFunction('MacBook-header-txt',200);
    scrollFunction('MacBook-footer-txt',800);
    scrollFunction('eight-pic-group .same-txt',1200);
    scrollFunction('eight-pic-group-title',1300);
    scrollFunction('iphone-group .same-txt',2600);
    scrollFunction('four-pic-header-txt',3400);
    scrollFunction('three-pic-header-txt',4700);
    scrollFunction('three-pic-footer-btn',5400);
    scrollFunction('links',5800);
})


$('.eight-pic-group-title>li').click(function(){
    var name = $(this).attr('data-name') ;
      $('.'+name).addClass('active').siblings('.active').removeClass('active');
})