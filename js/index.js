/**
 * Created by 世奇 on 2016/6/26.
 */

//nav标题点击
$('nav>h1>a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active')
})
//三项focus
$('nav>ul>li>a').mouseover(function(){
    $(this).next().css('opacity','1')
        .css('top','-4em')
        .css('display','block').css('zIndex',1000);
})
//三项blur
$('nav>ul>li>a').mouseout(function(){
    $(this).next().css('opacity','0')
        .css('top','0').css("display","block").css('zIndex',10);
    ;
})
//nav三项点击
$('nav>ul>li>a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active')
})
//sec0的三项点击
$('#sec0>ul>li>a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active')
})
//sec2的hobby点击
//$('#sec2>div>ul>li>a').click(function (e) {                   ???id
$('#sec2>div>ul>li>a').click(function (e) {
    e.preventDefault();
    var class1=$(this).attr('href');
    $(class1).addClass('active').siblings('.active').removeClass('active')
})
$('.btn1').click(function(){
    $(this).parent().removeClass('active')
})

//hobby1的图片
var hobby1=['a1.jpg','a2.jpg','a3.jpg','a4.jpg','a5.jpg','a6.jpg','a7.jpg','a8.jpg','a9.jpg'];
//轮播按钮before
$('#carousel1>h6:first-child').click(function(){
    //console.log($(this).next().attr('src'))
    var i=parseInt($(this).next().attr('alt'));
    if(i==1){i=9};
    i--;
    $(this).next().attr('alt',i);
    i--;
    $(this).next().attr('src','img/'+hobby1[i]);
})
//轮播按钮after
$('#carousel1>h6:last-child').click(function(){
    //console.log($(this).next().attr('src'))
    var i=parseInt($(this).prev().attr('alt'));
    if(i==9){i=0};
    $(this).prev().attr('src','img/'+hobby1[i]);
    //console.log($(this).prev().attr('src'))
    i++;
    $(this).prev().attr('alt',i);
    //console.log($(this).prev().attr('alt'))
})

//自制图片轮播
var timer=setInterval(function(){
    var j=$('#carousel1>img').attr('alt');
    if(j>=9){j=0}

        $('#carousel1>img').attr('src','img/'+hobby1[j]);
        j++;
        $('#carousel1>img').attr('alt',j);
},5000);

//后退动态
var direction=1;
var timer2=setInterval(function(){
    var lf=parseInt($('.hobby>h5').css('left'));
    if(lf>30){direction=-1}
    if(lf<0){direction=1}
    lf+=10*direction;
    $('.hobby>h5').css('left',lf)
},160)