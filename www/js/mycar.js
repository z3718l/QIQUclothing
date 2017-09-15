var A = angular.module('myApp', []);
//购物车  加  
A.directive('myAdds', function () {
    return {
        link: function (scope, element, attr) {
            element.click(function () {
                var This = this
                angular.forEach(scope.dataList, function (data, index, array) {
                    if (attr.items == data.items) {
                        data.num = parseInt(data.num) + 1;
                        scope.allPrices();
                        scope.$apply() //刷新视图  
                    }
 
                });
            });
        }
    }
})
//购物车  减  
A.directive('myMinus', function () {
    return {
        link: function (scope, element, attr) {
            element.click(function () {
                var This = this
                angular.forEach(scope.dataList, function (data, index, array) {
                    if (attr.items == data.items) {
                        if (data.num <= 1) {
                            if (confirm('是否删除该产品')) {
                                data.num = 0;
                                $(This).siblings('input').val(0);
                                scope.allPrices();
                                scope.$apply();
                                scope.dataList.splice(index, 1)
                                $(This).parents('tr').remove();
                            }
                        } else {
                            data.num = parseInt(data.num) - 1;
                        };
                        scope.allPrices();
                        scope.$apply();
                    }
                });
            });
        }
    }
})
//全选，全不选  
A.directive('allOrcan', function () {
    return function (scope, element, attr) {
        element.click(function () {
            var isCheck = $(this).find('input').prop('checked');
            if (isCheck) {
                $('input[type=checkbox]').prop('checked', true);
            } else {
                $('input[type=checkbox]').not($('input[type=checkbox]').eq(0)).prop('checked', false);
            }
            angular.forEach(scope.dataList, function (data, index, array) {
                data.Bol = isCheck;
            })
            scope.allPrices();
            scope.$apply();
        })
    }
})
//单选  
A.directive('oneCheck', function () {
    return function (scope, element, attr) {
        element.click(function () {
            var This = this
            angular.forEach(scope.dataList, function (data, index, array) {
                if (attr.items == data.items) {
                    var isCheck = $(This).prop('checked');
                    data.Bol = isCheck;
                    scope.allPrices();
                    scope.$apply();
                }
            })
        });
    }
})
A.controller('myAngular', ['$scope', '$filter', function ($scope, $filter) {
        $scope.dataList = [ //初始化购物车的数据  
            {
                Bol: 'false',
                num: '1',
                items: '0',
                oneprice: '900',
                price: '',
                image: 'image/my.jpg',
                title: 'ENSHADOWER隐蔽者 压胶机能冲锋衣',
                color: '黑色',
                size: 'L'
    }, {
                Bol: 'false',
                num: '1',
                items: '1',
                oneprice: '110',
                price: '',
                image: 'image/my1.jpg',
                title: 'ENSHADOWER隐蔽者 压胶机能冲锋衣',
                color: '白色',
                size: 'M'
    }, {
                Bol: 'false',
                num: '1',
                items: '2',
                oneprice: '116',
                price: '',
                image: 'image/my.jpg',
                title: 'ENSHADOWER隐蔽者 压胶机能冲锋衣',
                color: '黑色',
                size: 'L'
    }, {
                Bol: 'false',
                num: '1',
                items: '3',
                oneprice: '2087',
                price: '',
                image: 'image/my1.jpg',
                title: 'ENSHADOWER隐蔽者 压胶机能冲锋衣',
                color: '白色',
                size: 'M'
    }
        ];
        //总价格的计算  
        $scope.allPrices = function () {
            $scope.allprice = 0;
            angular.forEach($scope.dataList, function (data, index, array) {
                data.price = data.num * data.oneprice;
                if (data.Bol == true) {
                    $scope.allprice += parseInt(data.price);
                }
            })
            //   console.log($scope.allprice)
            return $scope.allprice;
        };
        //按单价排序  
        $scope.CartSort = function (arg) {
            angular.forEach($scope.dataList, function (data, index, array) {
                arguments.callee['CartSort(' + arg + ')'] = !arguments.callee['CartSort(' + arg + ')']
                $scope.dataList = $filter('orderBy')($scope.dataList, arg, arguments.callee['CartSort(' + arg + ')'])
            })
        }
        $(function () {
            $('.flip').hover(function () {
                $('.flip-b').show()
            }, function () {
                $('.flip-b').hide()
            })
            $scope.overs = function(){
                if( confirm('你确定要删除这个商品？')){
                    $scope.dataList.splice($(this).parents('tr').index() - 2, 1)
                     $(this).parents('tr').remove()
				}
                 $scope.allPrices() 
                console.log( $scope.allPrices() )
            }
            $('.over').hover(function () {
                $(this).css('background', '#f00')
            }, function () {
                $(this).css('background', '#ccc')
            })
            //   cookie数据
            var cookieName = $.cookie('username')
            if (cookieName) {
                $('.loginbar').empty().html('欢迎您' + '-' + cookieName)
            }
        })
  }])