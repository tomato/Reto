angular.module('pages').controller('PagesController',['$scope', 'Socket', 
    function($scope, Socket){
        $scope.pages = [];
        
        $scope.start = function() { 
            Socket.emit('crawl', $scope.url);
        };
        
        Socket.on('connected',function(){ alert('Connected'); })
        
        Socket.on('pageFound', function(queueItem){
           $scope.pages.push(queueItem); 
        });
        
        Socket.on('complete', function(){
            alert('Complete');
        });
        
        $scope.$on('$destroy', function() {
            Socket.removeListener('pageFound','complete');
        });
        
        
    }
]);