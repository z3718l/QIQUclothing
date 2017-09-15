angular.module('Formlogin',[])
 .controller('loginController',['$scope','$http',function($scope,$http){
     $scope.submit = function(){
         $scope.master = {
             username:$scope.username,
             password:$scope.password
         }
         var config ={
             method:'post',
             url:'api/login',
             data:$scope.master
         }
         $http(config)
         .then(function(data){
             console.log(data)
             if(data.data.code == 1){
                  alert(data.data.message + '')
                 location.href = '/'
             }else{
                 alert(data.data.message + '') 
             }
         })
         .catch(function(err){
             console.log(err)
         })
     }
 }])
 $(function(){
    $('.p3 > span').click(function(){
    $(this).next().slideToggle(800,function(){});  
})
$('.china ul li').click(function(){
    var $index = $(this).text()
     $('.p3').find('span').html($index)
})
 $('.p1 i').click(function(){
      $(this).toggleClass('p1i');
      $('.notes').toggle(function(){})
 })
    $('.flip').hover(function(){
          $('.flip-b').slideToggle()
    })
//   cookie数据
  var cookieName = $.cookie('username')
  if(cookieName){
      $('.loginbar').empty().html('欢迎您' + '-' + cookieName)
  }
})