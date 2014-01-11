'use strict';

describe('Service: Gui', function () {

  // load the service's module
  beforeEach(module('toolApp'));

  // instantiate service
  var Gui;
  beforeEach(inject(function (_Gui_) {
    Gui = _Gui_;
  }));

  //it('should do something', function () {
  //  expect(!!Gui).toBe(true);
  //});
});

describe('test', function(){
  it('should dp something', function(){
    expect(true).toBe(true);
  });
});
