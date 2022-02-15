"use strict";
class Person {
    constructor(name) {
        this.name = name; // this : 생성된 object 자신
    }
}
const p1 = new Person("Searchkim"); // new Person의 결과는 object -> p1에 할당
console.log(p1);
