"use strict";
class Person6 {
    // 프로퍼티 선언부, 생성자에선 readonly 프로퍼티에 초기화 가능(접근 제어자 상관 없이)
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'Searchkim';
        this.country = 'Korea';
        this.country = 'USA';
    }
    hello() {
        // this.country = 'USA';    // Error 발생(private readonly : 클래스 내부에서 읽기전용)
    }
}
const p6 = new Person6("Anna", 20);
console.log(p6.name);
// p6.name = "Anna";    // readonly이므로 Error 발생
