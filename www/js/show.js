$(function(){
    // 头部隐藏
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

     $(".ul-li > h3").click(function(){  
          $(this).find('span').toggleClass('border-line');
           $(this).next().slideToggle(800,function(){        //滑动  
         });  
        }); 
	$('li .intro a').click(function(){
		var $liIndex = $(this).parents('li').index()
		var $choose = $('.choose')
		var $text = $(this).text() + '<em>x</em>'
		$(this).siblings().removeClass('selected').end().addClass('selected')
		$choose.find('.intro span').eq($liIndex).html($text).css('display','inline-block')
$('.choose .intro  em').click(function(){
	var $index = $(this).parent().index()
	if($index + 1){
	$('li').not('.choose').eq($index).find('.intro a').removeClass('selected')
    $(this).parent().empty().hide()
     if($len <2){
    	$('.cl').detach()
    }
	}
	
})
	var $len = $choose.find('.intro span').not(':empty').length
	if($len > 2){
		var $clear = '<a href="#" class="cl">清除筛选条件</a>'
		$('.cl').detach()
		$('.choose .intro').append($clear)
	}
	$('.cl').click(function(){
		$('li').not('.choose').find('a').removeClass('selected')
	    $(this).detach()
	    $('.choose .intro span').empty().hide()
	})
	})
   
   $('.vip ul li').hover(function(){
        $(this).find('.vip-big').show()
   },function(){
        $(this).find('.vip-big').hide()
   })
 $('.vip-big>img').click(function(){
    location.href = '/card.html'
 })
})