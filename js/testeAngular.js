
    angular.module('app', ['ngMaterial'])
        .run(function(){
        console.log('Funcionando!')
        
      
    }).controller('teste',function($scope){
    	 $scope.login = {
                        usuario: '',
                        senha:''
                        
                        };
                    
    	$scope.metodoTeste = function(teste){
                
                $http.post('', data, config).then(successCallback, errorCallback);
    		console.log(teste.usuario);
    		
    	}

    });
