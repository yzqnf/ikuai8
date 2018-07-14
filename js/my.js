try {
	var urlhash = window.location.hash;
	if (!urlhash.match("fromapp")){
		if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) && window.location.href.indexOf('m.ikuai8.com')<1){
			window.location.href=window.location.href.replace(/www./,'m.');
		}
	}
}catch(err){}
/*导航滚动效果*/
function navClarity(){
	var ground = $("#nav-background");
	var nav = $(".nav");
	var logo = $(".brand");
	
	var winWid = document.documentElement.clientWidth;
	if($(window).scrollTop()>30 || winWid < 960 ){
		ground.removeClass("nav-clarity");
		ground.addClass("nav-solid");

	
	}else {
		ground.removeClass("nav-solid");
		ground.addClass("nav-clarity");
	
	}
}



/*下载移入效果*/
function downloadImg(o){
	$(o).hover(
		function() {
			$(this).find("img").stop().fadeIn();
		},  
		function() { 
			$(this).find("img").stop().hide();
		} 
	)

}

/*返回顶部*/
function toTop(){
	var to01=$(".toTop01");
	var to02=$(".toTop02");
	var to=$(".toTop");
	var toB=$(".footer");
	
	to.hover(
		function() {
			$(this).find("div").fadeIn();
		},  
		function() { 
			$(this).find("div").hide();
		} 
	)

	$(window).scroll(function(){
		var st = $(window).scrollTop();
		if( st >document.documentElement.clientHeight){
			to01.show();
			var toT = parseInt(to01.offset().top);
			var toB1 = parseInt(toB.offset().top);
			var toSH = document.body.scrollHeight-380;
			//console.log(toT>toSH,toT,toSH,toB1);
			if(toT>toSH){
				//to01.hide();
				to02.show().css({"top":toB1-80+"px"});
			}else{
				//to01.show();
				to02.hide()
			}
		}else{
			to01.hide();
		}
		if(to02.is(":hidden")){to01.show();}else{to01.hide();}
		if(st<document.documentElement.clientHeight){to01.hide();}
	});
	
	
	
	
}

/*锚点*/
function goto(s){
	
	$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');					   
		$(s).click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top - 100;
					$('html,body').animate({
						scrollTop: targetOffset
					},
					1000);
					return false;
				}
			}
	});
	
}

//搜索获得焦点
function searchC(){
	$(".search-help-text").focus(function(){
           $(this).animate({"width":"460px"});
      }).blur(function(){
           $(this).animate({"width":"260px"});
      });
}

//硬件购买
function purchase(){
	$(".purchaseJDXB").on( "click", function( e ) {
			//window.open("https://mall.jd.com/view_page-69180337.html");
			//window.open("http://mall.jd.com/index-216595.html");
			window.open("http://ikuai.jd.com/");
	})
	
	$(".purchaseJDA120").on( "click", function( e ) {
			//window.open("https://item.jd.com/11160105656.html");
			//window.open("http://item.jd.com/12399838081.html");
			//window.open("https://item.jd.com/11160105656.html");
			//window.open("https://item.jd.com/12399838081.html");
	})
	
	$(".purchaseTBA120").on( "click", function( e ) {
		
			
			window.open("https://s.taobao.com/search?q=IK-A120&imgfile=&ie=utf8&app=detailproduct&through=1");
	})
	
	$(".purchaseJDH1").on( "click", function( e ) {
			window.open("https://search.jd.com/Search?keyword=%E7%88%B1%E5%BF%ABH1&enc=utf-8&wq=%E7%88%B1%E5%BF%ABH1&pvid=c183e619ec924c58acf1da23128000e7");
			//window.open("https://item.jd.com/11699601735.html#crumb-wrap");
			//window.open("https://item.jd.com/12081948331.html");
			//window.open("https://item.jd.com/11699601735.html");
			//window.open("https://item.jd.com/12081948331.html");
			//window.open("http://item.jd.com/10397253454.html");
			
	})
	
	$(".purchaseJDH3").on( "click", function( e ) {
			window.open("https://search.jd.com/Search?keyword=%E7%88%B1%E5%BF%ABH3&enc=utf-8&wq=%E7%88%B1%E5%BF%ABH3&pvid=156145b16b7746bdb0f19ea41cef91e6");
			//window.open("https://item.jd.com/12295667982.html#crumb-wrap");
			//window.open("https://item.jd.com/12082157079.html");
			//window.open("https://item.jd.com/10624042147.html");
			//window.open("https://item.jd.com/12082157079.html");
	})
	
	$(".purchaseJDA320").on( "click", function( e ) {
			window.open("https://item.jd.com/7253556.html");
			//window.open("https://item.jd.com/11896593713.html");
			//window.open("https://item.jd.com/12079046876.html");
			//window.open("https://item.jd.com/11896593713.html");
			//window.open("https://item.jd.com/12079046876.html");
	})
	
	$(".purchaseJDA520").on( "click", function( e ) {
			window.open("https://item.jd.com/7253566.html");
			//window.open("https://item.jd.com/11905610091.html");
			//window.open("https://item.jd.com/12079174967.html");
			//window.open("https://item.jd.com/11905610091.html");
			//window.open("https://item.jd.com/12079174967.html");
	})
	
	$(".purchaseJDA620").on( "click", function( e ) {
			window.open("https://item.jd.com/7253578.html");
			//window.open("https://item.jd.com/11905505283.html");
			//window.open("https://item.jd.com/12079697776.html");
			//window.open("https://item.jd.com/11905505283.html");
			//window.open("https://item.jd.com/12079697776.html");
	})
	
	$(".purchaseJDN1").on( "click", function( e ) {
			window.open("https://search.jd.com/Search?keyword=%E7%88%B1%E5%BF%ABN1&enc=utf-8&wq=%E7%88%B1%E5%BF%ABN1&pvid=9406b299417b43649b9b31e251219985");
			//window.open("https://item.jd.com/11895748885.html#crumb-wrap");
			//window.open("https://item.jd.com/12084262388.html#crumb-wrap");
			//window.open("https://item.jd.com/11895748884.html");
			//window.open("https://item.jd.com/12084262388.html");
			//window.open("http://mall.jd.com/index-216595.html");
	})

}
		
		
$(document).ready(function(){
	navClarity();/*导航滚动效果*/
	/*downloadImg(".download-list");下载移入效果*/
	downloadImg(".Download_hp p");
	
	toTop();/*返回顶部*/
	
	searchC();/*搜索获得焦点*/
	
	goto(".toTop");
	goto(".explainGo");
	
	purchase();/*硬件购买*/
})

$(window).resize(function(){
	navClarity();/*导航滚动效果*/
});	

$(window).scroll(function(){
	navClarity();/*导航滚动效果*/
});
			