"use strict";
class Person5 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('get');
        return this._name;
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const p5 = new Person5("Searchkim", 20);
console.log(p5.name); // get
p5.name = "Anna"; // set
console.log(p5.name); // get
