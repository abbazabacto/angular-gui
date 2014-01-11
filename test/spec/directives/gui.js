'use strict';

describe('Directive: gui', function () {

  // load the directive's module
  beforeEach(module('toolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  //it('should make hidden element visible', inject(function ($compile) {
  element = angular.element('<gui></gui>');
  //  element = $compile(element)(scope);
  // expect(element.text()).toBe('this is the gui directive');
  //}));
});
