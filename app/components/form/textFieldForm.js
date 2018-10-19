(function () {
    angular.module('testeWooza').component('textFieldForm', {
        bindings: {
            label: '@',
            compId: '@',
            type: '@',
            placeholder: '@',
            model: '='
        },
        template:`
        <div class="form-group">
            <label for="{{::$ctrl.compId}}">{{::$ctrl.label}}</label>
            <input type="{{::$ctrl.type}}" class="form-control" id="{{::$ctrl.compId}}"
            ng-model="$ctrl.model" placeholder="{{::$ctrl.placeholder}}" />
        </div>
        `
    })
})()