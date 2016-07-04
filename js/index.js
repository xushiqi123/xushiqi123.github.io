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
        .css('display','block').css('zIndex',11000);
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
    $(this).parent().addClass('active').siblings('.active').removeClass('active');
    $(id).addClass('active').siblings('.active').removeClass('active');
})
//sec0��������
$('#sec0>ul>li>a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    console.log($(this).attr('class'))
    var class1='.'+$(this).attr('class')+'act';
    $(class1).addClass('active').siblings('.active').removeClass('active');
    $(id).addClass('active').siblings('.active').removeClass('active')
})


//
AOS.init({
    easing: 'ease-in-back',
    duration: 1000
});

//canvas绘图1
var deg=0;
var ctx1=canv1.getContext('2d');
var test1=function(deg){
    ctx1.clearRect(0,0,200,200);
    ctx1.beginPath();
    ctx1.arc(100,100,80,-Math.PI/2,deg*Math.PI/180,false);
    ctx1.lineWidth=14;
    ctx1.strokeStyle='red';
    ctx1.stroke();
    ctx1.font='2.4em SimHei'
    ctx1.fillText('HTML',64,80)
    ctx1.font='4em SimHei'
    ctx1.fillText('86%',56,140)
}
var timer1=setInterval(function(){
    deg+=10;
    test1(deg);
    if(deg>=200){
        clearInterval(timer1)
    }
})

//canvas绘图2
var deg=0;
var ctx2=canv2.getContext('2d');
var test2=function(deg){
    ctx2.clearRect(0,0,200,200);
    ctx2.beginPath();
    ctx2.arc(100,100,80,-Math.PI/2,deg*Math.PI/180,false);
    ctx2.lineWidth=14;
    ctx2.strokeStyle='yellow';
    ctx2.stroke();
    ctx2.font='2.4em SimHei'
    ctx2.fillText('CSS',72,80)
    ctx2.font='4em SimHei'
    ctx2.fillText('90%',58,140)
}
var timer2=setInterval(function(){
    deg+=10;
    test2(deg);
    if(deg>=206){
        clearInterval(timer2)
    }
})

//canvas绘图3
var deg=0;
var ctx3=canv3.getContext('2d');
var test3=function(deg){
    ctx3.clearRect(0,0,200,200);
    ctx3.beginPath();
    ctx3.arc(100,100,80,-Math.PI/2,deg*Math.PI/180,false);
    ctx3.lineWidth=14;
    ctx3.strokeStyle='blue';
    ctx3.stroke();
    ctx3.font='2.4em SimHei'
    ctx3.fillText('JQUERY',48,80)
    ctx3.font='4em SimHei'
    ctx3.fillText('84%',56,140)
}
var timer3=setInterval(function(){
    deg+=10;
    test3(deg);
    if(deg>=200){
        clearInterval(timer3)
    }
})