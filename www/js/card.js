 $(function(){
        $('.header-left-hover').hover(function(){
            $('.header-left-b').show()
        },function(){
        $('.header-left-b').hide()
        })  
        $('.header-left-b').hover(function(){
            $('.header-left-b').show()
        },function(){
            $('.header-left-b').hide()
        })  
        $('.header-left-b ul li').hover(function(){
            $(this).find('i').css('z-index','10')
        },function(){
            $(this).find('i').css('z-index','-1')
        })
    // 购物车
        $('.cart').hover(function(){
            $('.cart-big').show()
        },function(){
            $('.cart-big').hide()  
        })
        $('.cart-big').hover(function(){
            $('.cart-big').show() 
        },function(){
            $('.cart-big').hide()  
        })
    // 二级导航栏
        $('.licloths').hover(function(){
            $(this).find('.cloths').show()
        },function(){
            $(this).find('.cloths').hide()
        })
        $('.cloths').hover(function(){
            $(this).show()
        },function(){
            $(this).hide()
        })
// 先保留
     var cookieName = $.cookie('username')
        if(cookieName){
           $('.loginbar').empty().html('欢迎您' + '-' + cookieName)
           $('.loginbar').css('color','#f00')
       }  
     $('.goCar').click(function(){
         if(!cookieName){
             location.href = '/login.html'
         }else{
             location.href = '/mycar.html'
         }
     })
    //   自动执行动画
      setInterval(function(){
          $('.setinterval').toggle()
          $('.header-m-m').toggle()
      },5000)
// 选择尺码
$('.back a').click(function(){
    $(this).addClass('click-b').siblings().removeClass('click-b')
})
    $('.addtail').click(function(){
        $('.apply').show();
        $('.cart-show').show()
        $('.bigs').empty().html('<h1>购物车中已有一件商品，欢迎继续购物</h1>').css('color','#f00')
    })
   $('.collect').click(function(){
      $(this).css({'background-image':'url(../image/gs.png)','color':'#f00'})
   })
// 显示大图
 $('.pictures img').mouseover(function(){
    //  console.log($(this).index())
     $('.picture img').attr('src','image/car' + $(this).index()  +'.jpg')
 })
// 底部轮播图
 $('.carous').hover(function(){
      $('.menleft').show()
      $('.menright').show()
   },function(){
     $('.menleft').hide()
      $('.menright').hide()
   })
  $('.man-one').clone().appendTo('.man')
	$('.man-one').eq(1).css('left','2300px')
function carous(){
	var i = 0
	$('.menleft').click(function(){
		if(i>=2){
			$('.carous').find('.man').finish().animate({'left': '0px'},1000)
			i = 0
		}
		i++
		$('.carous').find('.man').finish().animate({'left': - i*1150 + 'px'},1000)
	})
	$('.menright').click(function(){
		if(i <= 0){
			$('.carous').find('.man').finish().animate({'left': '-2300px'},1000)
			i = 2
		}
		i--
		$('.carous').find('.man').finish().animate({'left': - i*1150 + 'px'},1000)
	})
}
carous()
  window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    },
    "share": {
        "bdSize": 16
    },
    "image": {
        "viewList": ["qzone", "tsina", "tqq", "renren", "weixin"],
        "viewText": "分享到：",
        "viewSize": "16"
    },
    "selectShare": {
        "bdContainerClass": null,
        "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
    }
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~ ( - new Date() / 36e5)];

    $(window).scroll(function(){
            if($(window).scrollTop() < 1000){
                console.log($(window).scrollTop())
                $('.foot-top').hide()
            }else{
                $('.foot-top').show()
            }
            })
     $('.foot-top').click(function () {
             $('html').animate(
                { scrollTop: '0px' }, 1000
                );
             });


})