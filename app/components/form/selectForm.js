(function () {
    angular.module('testeWooza').component('selectForm', {
        bindings: {
            label: '@',
            compId: '@',
            list: '<',
            model: '=',
            value: '@',
            text: '@',
            change: '&'
        },
        template:`
        <div class="form-group">
            <label for="{{::$ctrl.compId}}">{{::$ctrl.label}}</label>
            <select id="{{::$ctrl.compId}}" ng-model="$ctrl.model" class="form-control" 
            ng-change="$ctrl.change()">
                <option ng-repeat="item in $ctrl.list"
                value="{{::item[$ctrl.value]}}">{{::item[$ctrl.text]}}</option>
            </select>
        </div>
        `
    })
})()