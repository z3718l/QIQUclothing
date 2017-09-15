$(function(){
    var i =0
	var timer
	function show(index){
		i = index || i
		if(index ==0) i=0
	$('#icon span').eq(i).addClass('red-color').siblings().removeClass('red-color')
	$('#box li').eq(i).fadeIn().siblings().fadeOut()		
	    i++
		if(i<0) i=6
		if(i >$('#box li').length -1) i=0
	}
	show(i)
	function play(){
		timer = setInterval(show,3000)
	}
	play()
	$('#icon span').hover(function(){
		clearInterval(timer)
		var index = $(this).index()
		show(index)
	},function(){
		play()
	})  
$('#box').hover(function(){
		clearInterval(timer)
	 $('.prev').show()
     $('.next').show()
	},function(){
		play()
     $('.prev').hide()
     $('.next').hide()
	})
$('#box').find('.prev').click(function(){
	i=i-2
	show(i)
})
$('#box').find('.next').click(function(){
	show(i)
})
// tab切换
$('.nav-ul ul li').filter(':lt(3)').clone().appendTo('.nav-ul>ul')
	var left = ['-980px','-1960px','-2940px']
	var index = 0
function slide(){
	if(index >=2 ){
		$('.nav-ul>ul').finish().animate({'marginLeft': left[index]},500,function(){
			$('.nav-ul>ul').css({'marginLeft': 0})
		})
		index =0
		}else{
			 $('.nav-ul>ul').finish().animate({'marginLeft': left[index]},500)
			 index ++ 
		}
     }
	function plays(){
		timers = setInterval(slide,3000)
	}
      plays()
  $('.nav').hover(function(){
		clearInterval(timers)
	    $('.lefts').show()
        $('.rights').show()
	},function(){
		plays()
        $('.lefts').hide()
        $('.rights').hide()
	})
  $('.nav').find('.lefts').click(function(){
	slide()
     })
  $('.nav').find('.rights').click(function(){
	slide()
   })
})