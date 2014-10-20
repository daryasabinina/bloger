('NewPosting', function ($http, $scope, Posts) {

    $scope.wantWritePost = '';
    $scope.wantWrite = function () {
        if ( $scope.wantWritePost === $scope.wantWritePost ) {
            $scope.wantWritePost = !$scope.wantWritePost; }
        else {
            $scope.wantWritePost = $scope.wantWritePost;}
    };

    $scope.texts = [];
    $scope.addPost = function () {
        $scope.text.date = {};
        $scope.text.date = Date.now();
        $scope.texts.push($scope.text);
        $scope.text='';
        $scope.wantWritePost = $scope.wantWritePost;
        if (this.text._id) {
            Posts.update({ id: this.text._id}, this.text);
            $scope.resetForm();
        } else {
            this.text.$save().then(function(response){
                $scope.texts.push(response);
                $scope.resetForm();
            });
        }
        this.text = new Posts();
    };
    $scope.deletePost = function(text) {
        Posts.delete({id: text._id },
            function() {
                $scope.texts = Posts.query();
            });
    };

    $scope.editPost = function(text) {
        $scope.text = text;
        $scope.editingArticle = true;
        $scope.wantWrite();
    };

    $scope.resetForm = function () {
        $scope.editingArticle = false;
        $scope.text = {};
    };

    this.text = new Posts();
    $scope.texts = Posts.query();
});

angular.module('blogerApp').controller('postController', function($scope, $http, $routeParams, Posts){
    Posts.get({id: $routeParams.artId}).$promise.then(function(data){
        $scope.text = data;
    });
});