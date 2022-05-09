var app = angular.module("myApp", []);
app.controller("myController", function($scope){
    $scope.hocSinh = [
        {hoTen: "Nam", tuoi: "16", lop: "10"},
        {hoTen: "Bede", tuoi: "17", lop: "11"},
        {hoTen: "Hoho", tuoi: "17", lop: "11"},
        {hoTen: "Kaka", tuoi: "18", lop: "12"},
        {hoTen: "Benben", tuoi: "16", lop: "10"},
        {hoTen: "Lunu", tuoi: "18", lop: "12"}
    ];

    $scope.change_Main_Add = true;
    $scope.change_Main_Edit = false;

    $scope.edit = function(hs){
        $scope.change_Main_Edit = true;
        $scope.hs = hs;
    };

    $scope.saveEdit = function(){
        $scope.change_Main_Edit = false;
    };

    $scope.add = function(){
        $scope.change_Main_Add = false;
    };

    $scope.saveAdd = function(hoTen, tuoi, lop){
        $scope.hocSinh.push({hoTen: hoTen, tuoi: tuoi, lop: lop});
        $scope.change_Main_Add = true;
    };

    $scope.delete = function(i){
        $scope.hocSinh.splice(i, 1);
    };

    // $scope.search = function(hoTen, tuoi, lop){
    //     if (hoTen != '' || tuoi != '' || lop != '') {
	// 		$scope.search_HoTen = hoTen;
	// 		$scope.search_Tuoi = tuoi;
    //         $scope.search_Lop = lop;
	// 	}
    // };
    $scope.search = {};
    $scope.userInput = {};
    $scope.applySearch = function() {
        for(prop in $scope.userInput) {
            $scope.search[prop] = $scope.userInput[prop];
        }
    };
});