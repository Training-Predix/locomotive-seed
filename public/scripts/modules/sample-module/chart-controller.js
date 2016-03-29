define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('ChartCtrl', ['$scope', '$log','$stateParams', 'PredixAssetService', 'PredixViewService','$http','$interval', function ($scope, $log, $stateParams, PredixAssetService, PredixViewService,$http,$interval) {

        PredixAssetService.getAssetsByParentId('root').then(function (initialContext) {

            //pre-select the 1st asset
            initialContext.data[0].selectedAsset = true;
            $scope.initialContexts = initialContext;
            $scope.initialContextName = initialContext.data[0].name;
      
                 
            
            //load view selector
            $scope.openContext($scope.initialContexts.data[0]);
        }, function (message) {
            $log.error(message);
        });

        //--------------------------------------------------------------------------------------------------
        
        $scope.allLatestData=[];
        $scope.allUpdateData=[];
        $scope.entry=0;
        $scope.upentry=0;
        var alldata;
        $scope.dataloco =[];
        var username = document.querySelector('px-login').userInfo.user_name;
        
        
        var xlocaxis=0;
        var ylocaxis=0;
        var xrpmaxis=0;
        var yrpmaxis=0;
        var xtorqaxis=0;
        var ytorqaxis=0;
        var locationdata =[];
        var torquedata =[];
        var rpmdata=[];
        $scope.uplocationdata=[];
        $scope.uprpmdata=[];
        $scope.uptorquedata=[];
       
        var id = "LOCOMOTIVE_1";        
       
        if($stateParams.id != undefined ){
        	id = $stateParams.id;
        }
       // console.log("id ::::"+id);
        	
        $scope.getUpdates=function(){
        	var httpRequest = $http({
                method: 'GET',
    //            url:'https://locomotive-client-service.run.aws-usw02-pr.ice.predix.io/locomotive/latest',
                url:'/api/locomotive/latest',
                params: {"id": id, "username": username},
                
   //             headers: {
   //                  'Content-Type':'application/json'
   //                      }
             
            }).success(function(data) {  
           	 
             
             $scope.allUpdateData=data.tags;
             console.log("DATA TAGS------>"+data.tags[0]);
             console.log("DATA RESULTS------>"+data.tags[0].results[0]);
             console.log("DATA VALUES------>"+data.tags[0].results[0].values[0]);
             
             locationdata =data.tags[0].results[0].values[0];
             console.log(locationdata);    
             
            for (var i=0; i<locationdata.length; i++)
         	{
            	xlocaxis =locationdata[0];
            	ylocaxis =locationdata[1];
            	 
            	 
         	  var obToPush={'x':xlocaxis, 'y': ylocaxis};
         	  $scope.uplocationdata.push(obToPush);
         	}
            
            
            rpmdata =data.tags[1].results[0].values[0];
            console.log(rpmdata); 
            
           for (var i=0; i<rpmdata.length; i++)
        	{
           	xrpmaxis =rpmdata[0];
           	yrpmaxis =rpmdata[1];
           	 
           	 
        	  var obToPushrpm={'x':xrpmaxis, 'y': yrpmaxis};
        	  $scope.uprpmdata.push(obToPushrpm);
        	}
           
           
           torquedata =data.tags[2].results[0].values[0];
           console.log(torquedata);       
           
          for (var i=0; i<torquedata.length; i++)
       	{
          	xtorqaxis =torquedata[0];
          	ytorqaxis =torquedata[1];
          	 
          	 
       	  var obToPushtorque={'x':xtorqaxis, 'y': ytorqaxis};
       	  $scope.uptorquedata.push(obToPushtorque);
       	}          
             
             
             
             }); 
            
            	
            };
            
            
            
            
     //-----------------------------------------------------------------------------------------------------------------------       
        
        $scope.datachart = [
                       {'x': 10, 'y': 30.4403},
                       {'x': 20, 'y': 28.1913},
                       {'x': 30, 'y': 27.8485},
                       {'x': 40, 'y': 18.975},
                       {'x': 50, 'y': 20.9377},
                       {'x': 60, 'y': 34.3795},
                       {'x': 70, 'y': 32.0869},
                       {'x': 80, 'y': 21.3758}
                     ];
        
        
        
        
        
        
     //--------------------------------------------------------------------------------------------   
        
        $scope.getLatest=function (ob)
        {         
           var httpRequest = $http({
             method: 'GET',
            // url:'https://locomotive-client-service.run.aws-usw02-pr.ice.predix.io/locomotive/latest',
             url:'/api/locomotive/latest',
             params: {"id": id , "username": username},
       //      headers: {
       //           'Content-Type':'application/json'
      //                }
          
         }).success(function(data) {  
        	 
          alldata= data;
          $scope.allLatestData=data.tags;
          $scope.entry=$scope.allLatestData.length;  
          

          }); 
         
        };
        
        
        $interval($scope.getLatest, 1000*2);  
        
        $interval($scope.getUpdates, 1000*1);  
        
        
        
        
        
        //------------------------------------------------------------------------------------------------------
        
        
        
        $scope.decks = [];
        $scope.selectedDeckUrl = null;

        // callback for when the Open button is clicked
        $scope.openContext = function (contextDetails) {

            // need to clean up the context details so it doesn't have the infinite parent/children cycle,
            // which causes problems later (can't interpolate: {{context}} TypeError: Converting circular structure to JSON)
            var newContext = angular.copy(contextDetails);
            newContext.children = [];
            newContext.parent = [];

            // url end point can change from context to context
            // so the same card can display different data from different contexts

            var url = {
                'parent': {
                    'datagrid-data': '/sample-data/datagrid-data.json'
                },
                'child': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                },
                'child2': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise0.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                },
                'child3': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise1.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                }
            };

            newContext.urls = url[newContext.id];

            $scope.context = newContext;

            //Tag string can be classification from contextDetails
            PredixViewService.getDecksByTags(newContext.classification) // gets all decks for this context
                .then(function (decks) {
                    $scope.decks = [];

                    if (decks && decks.length > 0) {
                        decks.forEach(function (deck) {
                            $scope.decks.push({name: deck.title, id: deck.id});
                        });
                    }
                });
        };

        $scope.viewServiceBaseUrl = PredixViewService.baseUrl;

        $scope.getChildren = function (parent, options) {
            return PredixAssetService.getAssetsByParentId(parent.id, options);
        };

        $scope.handlers = {
            itemOpenHandler: $scope.openContext,
            getChildren: $scope.getChildren
            // (optional) click handler: itemClickHandler: $scope.clickHandler
        };
    }]);
});
