export default class userData {
    constructor(birthYear, birthMonth, birthDay, lifeExpect) {
        this.birthYear = birthYear;
        this.birthMonth = birthMonth;
        this.birthDay = birthDay;
        this.lifeExpect = lifeExpect;
    }

    getUserAge() {
        let birthDay = new Date(this.birthYear, this.birthMonth, this.birthDay);
        let currentDate = new Date();
        let age = (currentDate - birthDay);
        age = Math.round((age / 31536000000));
        return age;
    }

    mercAge(age) {
        this.age = age * .24
        return Math.round(this.age);
    }

    venAge(age) {
        this.age = age * .62
        return Math.round(this.age);
    }

    marsAge(age) {
        this.age = age * 1.88
        return Math.round(this.age);
    }

    jupAge(age) {
        this.age = age * 11.86
        return Math.round(this.age);
    }
}