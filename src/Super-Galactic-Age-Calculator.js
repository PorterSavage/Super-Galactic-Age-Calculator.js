export default class userData {
    constructor(birthYear, birthMonth, birthDay, lifeExpect) {
        this.birthYear = birthYear;
        this.birthMonth = birthMonth;
        this.birthDay = birthDay;
        this.lifeExpect = lifeExpect;
    }

    userAge() {
        let birthDay = new Date(this.birthYear, this.birthMonth, this.birthDay);
        let currentDate = new Date();
        let age = (currentDate - birthDay);
        age = Math.round((age / 31536000000));
        return age;
    }

    mercAge(age) {
        this.age = age * .24;
        return Math.round(this.age);
    }

    venAge(age) {
        this.age = age * .62;
        return Math.round(this.age);
    }

    marsAge(age) {
        this.age = age * 1.88;
        return Math.round(this.age);
    }

    jupAge(age) {
        this.age = age * 11.86;
        return Math.round(this.age);
    }

    mercExpect(life, age) {
        this.life = life * .24;
        this.age = age * .24;
        this.lifeExpect = Math.round(this.life - this.age);
        if(this.lifeExpect < 0) {
            let overLife = Math.abs((this.lifeExpect).toFixed(1));
            return `You have lived ${overLife} Mercury years over the life expectancy on Mercury.`
        }
        return "You have " + Math.abs((this.lifeExpect).toFixed(1)) + " years left to live on Mercury."
    }

    venExpect(life, age) {
        this.life = life * .62;
        this.age = age * .62;
        this.lifeExpect = Math.round(this.life - this.age);
        if(this.lifeExpect < 0) {
            let overLife = Math.abs((this.lifeExpect).toFixed(1));
            return `You have lived ${overLife} Venus years over the life expectancy on Venus.`
        }
        return "You have " + Math.abs((this.lifeExpect).toFixed(1)) +
        " years left to live on Venus."
    }

    marsExpect(life, age) {
        this.life = life * 1.88;
        this.age = age * 1.88;
        this.lifeExpect = Math.round(this.life - this.age);
        if(this.lifeExpect < 0) {
            let overLife = Math.abs((this.lifeExpect).toFixed(1));
            return `You have lived ${overLife} Mars years over the life expectancy on Mars.`
        }
        return "You have " + Math.abs((this.lifeExpect).toFixed(1)) +
        " years left to live on Mars."
    }
}