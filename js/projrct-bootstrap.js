/**
 * Created by 世奇 on 2016/7/10.
 */


//技能hover数字变换：
$('.skill-li').hover(function(){
    var h1 = $(this).children('h1');
    var num = parseInt( $(this).data("percent") );
    var timer;
    var i = 0;
    var s = 0;

    timer=setInterval(function(){
        if(i<10){
            s+=num/10;
            h1.html( Math.round(s) + '%') ;
            i++;
        }else{
            clearInterval(timer);
        }
    },36);
})


//nav三张图切换
var numb=0;
var timer = setInterval(function(){
    $('[data-num='+numb+']').fadeOut(1000,function(){
        numb++;
        if(numb>=3){numb=0}
        $('[data-num='+numb+']').fadeIn(1000)
    });
},8000)


//页脚赞助商滚动
window.onload = function() {
    linksInit();
}

function linksInit() {
    var current = 0;
    var length = $('.link-brand').length;
    var duration = 3000;
    var direction = 1;
    var linksCount = 5;
    var linksWidth = $('.links').width();
    var eachWidth = linksWidth / linksCount;
    var timer;

    $('.link-brand').each(function() {
        $(this).css('width', eachWidth + 'px');
    })

    function moveTo(num) {
        $('.links-outter').css('left', (-num * eachWidth) + 'px');
    }

    function moveStart() {
        timer = setInterval(function() {
            if (current <= 0) {
                direction = 1;
            } else if (current >= (length - linksCount)) {
                direction = -1;
            }
            current = current + direction;
            moveTo(current);
        }, duration);
    }
    moveStart();

    $('.link-brand').hover(function() {
        clearInterval(timer);
    }, function() {
        moveStart()
    })
}



//图片滚动移入
function scrollFunction(class1, to1) {
    if (document.body.scrollTop > to1) {
        $('.' + class1).addClass('scrollTo');
    } else {
        $('.' + class1).removeClass('scrollTo');
    }
}

$(window).on('scroll', function() {
    scrollFunction('navbar-default', 200);
    scrollFunction('MacBook-header-txt', 300);
    scrollFunction('MacBook-pic-outer', 300);
    scrollFunction('MacBook-footer-txt', 400);
    scrollFunction('fixed', 400);
    scrollFunction('eight-pic-group .same-txt', 1100);
    scrollFunction('six-ul', 1760);
    scrollFunction('skill2', 2000);
    scrollFunction('iphone-group .same-txt', 2600);
    scrollFunction('iphone-pic-out', 2700);
    scrollFunction('iphone-footer-txt', 2800);
    scrollFunction('four-pic-header-txt', 3500);
    scrollFunction('four-pic-ul', 3600);
    scrollFunction('three-pic-header-txt', 4500);
    scrollFunction('three-pic-ul', 4700);
    scrollFunction('three-pic-footer-btn', 5100);
    scrollFunction('links', 5300);
})
