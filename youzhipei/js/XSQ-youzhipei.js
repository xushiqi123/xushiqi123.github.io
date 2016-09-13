//字体大小-宽度-自适应
			!function(a,b){function c(){var b=f.getBoundingClientRect().width;b/i>540&&(b=540*i);var c=b/10;f.style.fontSize=c+"px",k.rem=a.rem=c}var d,e=a.document,f=e.documentElement,g=e.querySelector('meta[name="viewport"]'),h=e.querySelector('meta[name="flexible"]'),i=0,j=0,k=b.flexible||(b.flexible={});if(g){console.warn("将根据已有的meta标签来设置缩放比例");var l=g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(j=parseFloat(l[1]),i=parseInt(1/j))}else if(h){var m=h.getAttribute("content");if(m){var n=m.match(/initial\-dpr=([\d\.]+)/),o=m.match(/maximum\-dpr=([\d\.]+)/);n&&(i=parseFloat(n[1]),j=parseFloat((1/i).toFixed(2))),o&&(i=parseFloat(o[1]),j=parseFloat((1/i).toFixed(2)))}}if(!i&&!j){var p=a.navigator.userAgent,q=(!!p.match(/android/gi),!!p.match(/iphone/gi)),r=q&&!!p.match(/OS 9_3/),s=a.devicePixelRatio;i=q&&!r?s>=3&&(!i||i>=3)?3:s>=2&&(!i||i>=2)?2:1:1,j=1/i}if(f.setAttribute("data-dpr",i),!g)if(g=e.createElement("meta"),g.setAttribute("name","viewport"),g.setAttribute("content","initial-scale="+j+", maximum-scale="+j+", minimum-scale="+j+", user-scalable=no"),f.firstElementChild)f.firstElementChild.appendChild(g);else{var t=e.createElement("div");t.appendChild(g),e.write(t.innerHTML)}a.addEventListener("resize",function(){clearTimeout(d),d=setTimeout(c,300)},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(d),d=setTimeout(c,300))},!1),"complete"===e.readyState?e.body.style.fontSize=12*i+"px":e.addEventListener("DOMContentLoaded",function(){e.body.style.fontSize=12*i+"px"},!1),c(),k.dpr=a.dpr=i,k.refreshRem=c,k.rem2px=function(a){var b=parseFloat(a)*this.rem;return"string"==typeof a&&a.match(/rem$/)&&(b+="px"),b},k.px2rem=function(a){var b=parseFloat(a)/this.rem;return"string"==typeof a&&a.match(/px$/)&&(b+="rem"),b}}(window,window.lib||(window.lib={}));


$(document).ready(function() {
//		轮播		
		$(".main_visual").hover(function(){
                $("#btn_prev,#btn_next").fadeIn()
            },function(){
                $("#btn_prev,#btn_next").fadeOut()
            });

            $dragBln = false;

            $(".main_image").touchSlider({
                flexible : true,
                speed : 1000,
                btn_prev : $("#btn_prev"),
                btn_next : $("#btn_next"),
                paging : $(".flicking_con a"),
                counter : function (e){
                    $(".flicking_con1 a").removeClass("on").eq(e.current-1).addClass("on");
                    $(".flicking_con2 a").removeClass("on").eq(e.current-1).addClass("on");
                    $(".flicking_con3 a").removeClass("on").eq(e.current-1).addClass("on");
                }
            });

            $(".main_image").bind("mousedown", function() {
                $dragBln = false;
            });

            $(".main_image").bind("dragstart", function() {
                $dragBln = true;
            });

            $(".main_image a").click(function(){
                if($dragBln) {
                    return false;
                }
            });

            timer = setInterval(function(){
                $("#btn_next").click();
            }, 5000);

            $(".main_visual").hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(function(){
                    $("#btn_next").click();
                }, 5000);
            });

            $(".main_image").bind("touchstart",function(){
                clearInterval(timer);
            }).bind("touchend", function(){
                timer = setInterval(function(){
                    $("#btn_next").click();
                }, 5000);
            });


        $(".main_image").css("height",$(document).width()*0.4);
        $(".main_image li span").css("height",$(document).width()*0.4);
        
//      顶部排序下拉
		$('.main>.page-stores-header>div>a').click(function(){
			console.log(  );
					//arrow translate
//					$(this).children('.caret').toggleClass('top');
//			$(this).parent().siblings('div').find('.caret').removeClass('top');
			$(this).toggleClass('active');
			$(this).parent().siblings('div').children('a').removeClass('active');
			
			
			var targetClass=$(this).data('target');
			$(targetClass).siblings('.drop-down-manu').slideUp(200);
			$(targetClass).slideToggle();						//????						
		})
		//下拉处点击变色
		$('.drop-down-manu>li>a').click(function(){
			$(this).parent().addClass('active').siblings('.active').removeClass('active');
		})
        
////      底部点击换页面
//      $('.fix_bottom .footer a').click(function(e){
//      	e.preventDefault();	
//      	$(this).parent().addClass('active').siblings('.active').removeClass('active');
//      	console.log() ;
//      	
//      	var targetClass = $(this).data('target') ;
//      	$(targetClass).addClass('active').siblings('.active').removeClass('active')
//      })
//      订单删除按钮
        $('.page-orders .order .btn-order-delete').click(function(){
        	$(this).closest('.order').remove()
        })
        
//      性别选择
		$('.page-change-addr-ing .main .row-out label').click(function(){
			$(this).addClass('checked').siblings('.checked').removeClass('checked');
		})
        
//      支付选择
		$('.page-order-paying .pay-way-specific').click(function(){
			$(this).addClass('active').siblings('.active').removeClass('active');
		})
		
//		退单原因
		$('.page-order-cancel .main-bottom .pay-way-specific').click(function(){
			$(this).addClass('active').siblings('.active').removeClass('active');
		})
		
//		地址修改选择
		$('.page-manage-addr-ing .address-specific').click(function(){
			$(this).toggleClass('active');
		})
	
////			手机号星号显示
//			$('.page-order-paying .custom-telephone').html( 
//				$('.page-order-paying .custom-telephone').html().substring(0,3)+
//				'****'+ 
//				$('.page-order-paying .custom-telephone').html().substring(7)
//			);
//		
		
			
		$('.page-store-specific .main .plus-minus .minus').click(function(){
			var inn = parseInt( $(this).parent().children('span').html() );
			if(inn>1){
				inn--;
				$(this).parent().children('span').html(inn);
			}else if(inn==1){
				inn--;
				$(this).css('display','none');
				$(this).parent().children('span').html(inn).css('display','none');
			}
			
			//		购物车总件数
			var car = $('.page-store-specific .footer-car span');				
			car.html( parseInt(car.html())-1 );
//				购物车数量显示
			if( $('.footer-car span').html()==0 ){
				$('.footer-car span').css('display','none');
			}
//				购物车金钱显示
			var carMoney = $('.page-store-specific .footer .how-mouch span');
			carMoney.html( 
				parseFloat( carMoney.html() ) - parseFloat(  $(this).parents('.commodity-out').find('.price>span').html() )
			);
		})
		$('.page-store-specific .main .plus-minus .plus').click(function(){
			var inn = parseInt( $(this).parent().children('span').html() );
			if(inn==0){
				$(this).parent().children('.minus').css('display','inline-block');
				$(this).parent().children('span').css('display','inline-block');					
			}
			inn++;
			$(this).parent().children('span').html(inn);
			
			//		购物车总件数
			var carCount = $('.page-store-specific .footer-car span');
			carCount.html( parseInt(carCount.html()) 	+ 1 );
//				购物车数量显示
			if( $('.footer-car span').html()>0 ){
				$('.footer-car span').css('display','inline-block');
			}
//				购物车金钱显示
			var carMoney = $('.page-store-specific .footer .how-mouch span');
			carMoney.html( 
				parseFloat( carMoney.html() ) + parseFloat(  $(this).parents('.commodity-out').find('.price>span').html() )
			);
		})
		
		if( $('.footer-car span').html()==0 ){
			$('.footer-car span').css('display','none');
		}else if( $('.footer-car span').html()>0 ){
			$('.footer-car span').css('display','inline-block');
		}
		
//		商店左侧类型下拉
		$('.page-store-specific .nav1 a').click(function(e){
//			e.preventDefault();
			$(this).parent().addClass('active').siblings('.active').removeClass('active');
		})
//		商店左侧类型下拉-楼层点亮
		var zhege=[0];
		$('.page-store-specific .type').each(function(){	 
				 zhege.push($(this).height());
			}) 
		$('.page-store-specific .commodities').scroll( function() {
//			console.log( $('.page-store-specific .commodities').scrollTop() );
			for(var i=0;i<zhege.length;i++){
				if(  (zhege[i] < $('.page-store-specific .commodities').scrollTop() )
				&& ( $('.page-store-specific .commodities').scrollTop() < zhege[i+1] ) ){
//					$('.page-store-specific .nav1 li').addClass('active').siblings('.active').removeClass('active');
					$('.page-store-specific .nav1 li').removeClass('active');
					$('.page-store-specific .nav1 li')[i].className='active';

					return;
				}
			}
			
		})
		
		
	});
	
