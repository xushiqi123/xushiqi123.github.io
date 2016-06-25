$('.cup').mouseover(function(){
	//$(this).fadeOut()	
	$(this).css('opacity','0')
})
$('.cup').mouseout(function(){
	$(this).css('opacity','0.7')
})
$('div>.relate .cup_btn').mouseover(function(){
	$(this).addClass('no_cup_btn')
})
$('div>.relate .cup_btn').mouseleave(function(){
	$(this).removeClass('no_cup_btn')
})
$('li>.relate .cup_btn').mouseover(function(){
	$(this).addClass('black_cup_btn')
})
$('li>.relate .cup_btn').mouseleave(function(){
	$(this).removeClass('black_cup_btn')
})
$('#ul_DEMO>li>a').mouseover(function(){
	$( ($(this)[0].querySelector('span') )).addClass('demo')
})
$('#ul_DEMO>li>a').mouseleave(function(){
	$( ($(this)[0].querySelector('span') )).removeClass('demo')
})


	var ctx=canvas1.getContext('2d');
	ctx.translate(15,15);

	var linear=ctx.createLinearGradient(-15,-15,15,15);
	linear.addColorStop(0,'#0099CC');
	linear.addColorStop(0.5,'#FF0');
	linear.addColorStop(1,'#f00');

	var deg=5;
	setInterval(function(){
		ctx.clearRect(-15,-15,30,30);
		ctx.rotate(deg*Math.PI/180);
		ctx.fillStyle=linear;
		ctx.arc(0,0,10,0,4,true)
		ctx.fill()
	},28)
