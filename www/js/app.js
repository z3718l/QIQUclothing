	angular.module('QIQU',['ngAnimate'])
    .controller('qiquCon',['$scope',function($scope){
        
    }])
    .controller('searchController',['$scope',function(){
        // 查找
    }])
    .controller('demoController',['$scope',function($scope){
        var does = [{url:'image/more1.jpg',name:'PEOPLE'},{url:'image/more2.jpg',name:'THINK'},
         {url:'image/more3.jpg',name:'ABC'},{url:'image/more4.jpg',name:'EVISU'},
         {url:'image/more5.jpg',name:'SHOWS'},{url:'image/more6.jpg',name:'AL203'},
         {url:'image/more7.jpg',name:'IVYBOL'},{url:'image/more8.jpg',name:'VIEWS'},
         {url:'image/more9.jpg',name:'奇趣'},{url:'image/more10.jpg',name:'奇趣'},
         {url:'image/more11.jpg',name:'奇趣·购'},{url:'image/more12.jpg',name:'奇趣'},
         {url:'image/more12.jpg',name:'QIQU!GO'},{url:'image/more14.jpg',name:'QIQU'},
         {url:'image/more15.jpg',name:'QIQU!GO'},{url:'image/more16.jpg',name:'QIQU'},
          {url:'image/more17.jpg',name:'QIQU!GO'},{url:'image/more18.jpg',name:'QIQU'}
         ]
         $scope.demos = does
    }])
    $(function(){
       var cookieName = $.cookie('username')
        if(cookieName){
           $('.loginbar').empty().html('欢迎您' + '-' + cookieName)
           $('.loginbar').css('color','#f00')
       }   
       $(window).scroll(function(){
            if($(window).scrollTop() < 1000){
                // console.log($(window).scrollTop())
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
    //   自动执行动画
      setInterval(function(){
          $('.setinterval').toggle()
          $('.header-m-m').toggle()
      },5000)
    })
  
   
    
    
    