import userData from '../src/Super-Galactic-Age-Calculator';

describe('userData', function() {

    it('should test whether this method returns a users age', function() { 
        let testUserData = new userData("2000", "12", "1", "0")
        expect(testUserData.getUserAge()).toEqual(18)
    });

    it('should test whether this method returns mercury age', function() {
        let testUserData = new userData("2000", "12", "1", "0")
        expect(testUserData.mercAge(18)).toEqual(4);
    });
});