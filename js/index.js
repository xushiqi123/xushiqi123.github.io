/**
 * Created by ���� on 2016/6/26.
 */

//nav������
$('nav>h1>a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active')
})
//����focus
$('nav>ul>li>a').mouseover(function(){
    $(this).next().css('opacity','1')
        .css('top','-4em')
        .css('display','block').css('zIndex',1000);
})
//����blur
$('nav>ul>li>a').mouseout(function(){
    $(this).next().css('opacity','0')
        .css('top','0').css("display","block").css('zIndex',10);
    ;
})
//nav������
$('nav>ul>li>a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active')
})
//sec0��������
$('#sec0>ul>li>a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active')
})


//
AOS.init({
    easing: 'ease-in-back',
    duration: 1000
});

//
$('.my-accordion').accordion();