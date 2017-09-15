angular.module('Formregister',[])
.controller('registerController',['$scope','$http',function($scope,$http){
    $scope.submit = function(){
        $scope.master = {
            username:$scope.username,
            password:$scope.password,
            repassword:$scope.repassword
        }
        var config = {
            method:'post',
            url:'api/regis',
            data:$scope.master
        }
        $http(config)
        .then(function(data){
            if(data.data.code == 1){
                alert('注册成功')
                location.href = '/login.html'
                
            }else{
              alert('注册失败')
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }
    // 账号验证
    angular.element(document.querySelector('input[name="username"]')).on('blur',function(){
        var val = this.value
        $http({
            url:'/verify/register',
            method:'post',
            data:{
                username:val
            }
        })
        .then(function(data){
            if(data.data.code == 0){
                $scope.FormRegister.username.$valid = false
                $scope.FormRegister.username.$invalid = true
                $scope.checkusername = true 
                alert('账户已存在')
            }else{
                $scope.FormRegister.$invalid = false
                $scope.FormRegister.username.$invalid = false
                $scope.checkusername = false
            }
        })
    })
}])