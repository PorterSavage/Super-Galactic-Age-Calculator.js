import userData from '../src/Super-Galactic-Age-Calculator';

describe('userData', function() {

    it('should test if this method returns a users age', function() { 
        let testUserData = new userData("2000", "12", "1", "0");
        expect(testUserData.userAge()).toEqual(18)
    });

    it('should test if this method returns mercury age', function() {
        let testUserData = new userData("2000", "12", "1", "0");
        expect(testUserData.mercAge(18)).toEqual(4);
    });

    it('should test wether this method returns venus age', function() {
        let testUserData = new userData("2000", "12", "1", "0");
        expect(testUserData.venAge(18)).toEqual(11);
    })

    it('should test if this method returns mars age', function() {
        let testUserData = new userData("2000", "12", "1", "0");
        expect(testUserData.marsAge(18)).toEqual(34);
    })

    it('should test if this method returns jupiter age', function() {
        let testUserData = new userData("2000", "12", "1", "0");
        expect(testUserData.jupAge(18)).toEqual(213);
    })

    it('should test if this method returns mercury life expectancy', function() {
        let testUserData = new userData("2000", "12", "1", "80");
        expect(testUserData.mercExpect(80, 18)).toEqual('You have 15 years left to live on Mercury');
    })

    it('should test whether this method returns the correct sentence', function() {
        let testUserData = new userData("1000", "12", "1", "80");
        expect(testUserData.mercExpect(80, 1018)).toEqual('You have lived 225 Mercury years over the life expectancy on Mercury');
    })
});