$(function(){
    var i =0
	var timer
	function show(index){
		i = index || i
		if(index ==0) i=0
	$('#icon a').eq(i).addClass('red-color').siblings().removeClass('red-color')
	$('#box li').eq(i).fadeIn().siblings().fadeOut()		
	    i++
		if(i<0) i=5
		if(i >$('#box li').length -1) i=0
	}
	show(i)
	function play(){
		timer = setInterval(show,10000)
	}
	play()
	$('#icon a').hover(function(){
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
 $('.move').clone().appendTo('.mmm')
 $('.move').eq(1).css('left','3450px')
function slide(){
	var i = 0
	$('.hidenext').click(function(){
		if(i>=3){
			$('.sameTo3').find('.mmm').finish().animate({'left': '0px'},500)
			i = 0
		}
		i++
		$('.sameTo3').find('.mmm').finish().animate({'left': - i*1150 + 'px'},500)
	})
	$('.moveon').click(function(){
		if(i <= 0){
			$('.sameTo3').find('.mmm').finish().animate({'left': '-3450px'},500)
			i = 3
		}
		i--
		$('.sameTo3').find('.mmm').finish().animate({'left': - i*1150 + 'px'},500)
	})
}
slide()

})