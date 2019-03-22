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

    it('should test if this method returns life expectancy on Mercury', function() {
        let testUserData = new userData("2000", "12", "1", "80");
        expect(testUserData.mercExpect(80, 18)).toEqual('You have 15 years left to live on Mercury.');
    })

    it('should test if this method returns the correct sentence', function() {
        let testUserData = new userData("1000", "12", "1", "80");
        expect(testUserData.mercExpect(80, 1018)).toEqual('You have lived 225 Mercury years over the life expectancy on Mercury.');
    })

    it('should test if this method returns life expectancy on Venus', function() {
        let testUserData = new userData("2000", "12", "1", "80");
        expect(testUserData.venExpect(80, 18)).toEqual('You have 38 years left to live on Venus.');
    })

    it('should test if this method returns the correct sentence', function() {
        let testUserData = new userData("1000", "12", "1", "80");
        expect(testUserData.venExpect(80, 1018)).toEqual('You have lived 582 Venus years over the life expectancy on Venus.');
    })

    it('should test if this method returns life expectancy on Mars', function() {
        let testUserData = new userData("2000", "12", "1", "80");
        expect(testUserData.marsExpect(80, 18)).toEqual('You have 117 years left to live on Mars.');
    })

    it('should test if this method returns the correct sentence', function() {
        let testUserData = new userData("1000", "12", "1", "80");
        expect(testUserData.marsExpect(80, 1018)).toEqual('You have lived 1763 Mars years over the life expectancy on Mars.');
    })

    it('should test if this method returns life expectancy on Jupiter', function() {
        let testUserData = new userData("2000", "12", "1", "80");
        expect(testUserData.jupExpect(80, 18)).toEqual("You have 735 years left to live on Jupiter.");
    })

    it('should test if this method returns the correct sentence', function() {
        let testUserData = new userData("1000", "12", "1", "80");
        expect(testUserData.jupExpect(80, 1018)).toEqual("You have lived 11145 Jupiter years over the life expectancy on Jupiter.")
    })
});