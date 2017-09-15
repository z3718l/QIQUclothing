$(function() {
      // 头部隐藏出现
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
// demo效果
   $(".demo").hover(function(){
	var width = $(this).innerWidth(); //获取父元素的宽度
	var height = $(this).innerHeight(); //获取父元素的高度 
	$(".line",this).stop().animate({
		// + 1 像素是因为要覆盖父元素的边框线
		"width" : (width + 1) + "px", 
		"height" : (height + 1) + "px"
	   },600)
	   },function(){
		$(".line",this).stop().animate({
		"width":"0",
		"height" : "0"
		  },600)
		});
})