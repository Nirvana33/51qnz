$(function(){

	searchBar();

	//头部选中效果
	$('.head_ation li a').click(function(){
		$(this).parent().siblings().find('a').removeClass('cull').end().end().end().addClass('cull');
	});

	// 文字省略
	var tHs = $('.journalism_w500 p');
	for (var i = 0; i < tHs.length; i++) {
		textHiding(tHs[i]);
	}
	function textHiding(tH){
		var html = tH.innerHTML;
		if( html.length > 75){
			tH.innerHTML = tH.innerHTML.substr(0,75) + '...';
		}	
	}
	
	//获取屏幕宽度设置栏目内容视频高度
	var winW=$(window).width();
	if(winW < 1200){
		var dWidth=$('.qnz_videos_d').width();
		var dWidth2=$('.journalism_rmbd').width();
		$('.journalism_rmbd').height(dWidth2/1.71);
		$('.qnz_videos_d').height(dWidth/1.71);
		$('.videos li .layer').height(dWidth/1.71);
	}	
	
	
	//设置在移动端企业、行业、媒体内容修改
	var winW=$(window).width();
	if(winW < 1200){
		var item=$('.new-ul .pull-left');
		for(var i=0;i<item.length;i++){
			if(i%2==0){
				item[i].style.paddingRight='3%';
			}else{
				item[i].style.paddingLeft='3%';
			}
		}
	}	

	//关于我们 选项卡效果
	$('.com-bcb a').click(function(){
		var name = $(this).text(),
			val  = $(this).parent().find('em').text();
		$(this).addClass('bd-cull').parent().siblings().find('a').removeClass('bd-cull');
		$('.put-com1200 .block').hide().eq($('.com-bcb a').index(this)).show();
		$('.shouye-com i').text(name);
		$('.middle_top h1').text(name);
		$('.middle_top span').text(val);
		if($('.bd-cull').parents('li').index()==1){
			for(i=0;i<$('.team-text').length;i++){
				$($('.team-text')[i]).css('margin-top',(-$($('.team-text')[i]).height()/2)+'px')
			}
		}
	});

	$(window).scroll(function(){

		//头部滑动超过banner出现下划线
		var banner = $(".banner").height();
		var gundogntop = $(window).scrollTop();
	    if( gundogntop > banner){
	    	$(".header").css("border-bottom","1px solid #ccc");
	    }else{
	    	$(".header").css("border-bottom","0px");
	    }
	});
	
	//判断公用头部当前页面的样式
	var hrval = $("#hrefid").val();
	if( hrval == 1){
		$(".head_ation li").eq(0).find("a").addClass("cull");
	}else if( hrval == 2){
		$(".head_ation li").eq(1).find("a").addClass("cull");
	}else if( hrval == 3){
		$(".head_ation li").eq(2).find("a").addClass("cull");
	}else if( hrval == 4){
		$(".head_ation li").eq(3).find("a").addClass("cull");
	}
	
	
	//栏目视频头部选中效果
	/*	$('.video_navigation li a').click(function(){
			$(this).addClass('cull').parent().siblings().find('a').removeClass('cull');
		});
		
		//新闻列表点击切换
		$('.w1200 .clear a').click(function(){
			var xw=$(this).find('span').text();//获取当前a里span的text
				xwem=$(this).find('em').text();//获取当前a里span内的em的text
				gspan=$(this).siblings().find('span').text();
				gem=$(this).siblings().find('em').text();
				h1=$('.qiye-top h1').text();//获取h1的text
				span=$('.qiye-top span').text();	
				
				$('.qiye-top h1').text(xw);
				$('.qiye-top span').text(xwem);
				$(this).siblings().find('span').text(h1);
				$(this).siblings().find('em').text(span);
				$(this).find('span').text(gspan);
				$(this).find('em').text(gem);		
		});*/
	
});

//头部滑动背景渐变效果
window.onload = function(){
    searchBar();
    //百度分享插件
	//'http://www.51qnz.com.cn/', //window.location.href
	window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
};

function searchBar(){	
    var header = document.querySelector('.header'),
        banner = document.querySelector('.banner'),
        height = banner.offsetHeight;
    window.onscroll = function(){
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var opacity = (top > height) ? 1 : 1*(top/height);
        header.style.background = "rgba(255,255,255,"+opacity+")";
    };
}