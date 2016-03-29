define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('DashboardsCtrl', ['$scope', '$log', 'PredixAssetService', 'PredixViewService','$http','$interval', function ($scope, $log, PredixAssetService, PredixViewService,$http,$interval) {

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

        //start here Romit--------------------------------------------------------------------------------------------------
        
        $scope.allTorqueDetails=[];
        $scope.entry=0;  
        var alldata; 
        $scope.locdata=[];
        $scope.rpmdata=[];
        $scope.tordata=[];
        $scope.locname = null;
        $scope.rpmname = null;
        $scope.torname = null;
        
        
        

        
        $scope.getAllEntries=function (ob)
        {         
           var httpRequest = $http({
             method: 'GET',
             url:'/api/locomotive/datapoints'
             //url:'https://locomotive-client-service-Asha.run.aws-usw02-pr.ice.predix.io/locomotive/datapoints',
             //headers: {
             //     'Content-Type':'application/json'
             //         }
          
         }).success(function(data) {  
        	 
          alldata= data;
          $scope.allTorqueDetails=data.tags;
          
          $scope.locdata=data.tags[0].results[0].values[0];
          $scope.rpmdata=data.tags[1].results[0].values[0];
          $scope.tordata=data.tags[2].results[0].values[0];
          
          $scope.locname=data.tags[0].name;
          $scope.rpmname=data.tags[1].name;
          $scope.torname=data.tags[2].name;
          
          
          console.log($scope.locdata);
          console.log($scope.rpmdata);
          console.log($scope.tordata);
          
          $scope.entry=$scope.allTorqueDetails.length;    
         
          

          }); 
         
        };
        
        
        $interval($scope.getAllEntries, 1000*2);      
        
        //end here Romit------------------------------------------------------------------------------------------------------
        
        
        
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
