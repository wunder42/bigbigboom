'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('TestCtl', function(){

    it('test it', function() {
      var scope = {},
          ctrl = new TestCtl(scope);

      expect(scope.name.length).toBe(5);
    });
  });
});
