"use strict";
class AbstractPerson {
    constructor() {
        this._name = 'Searchkim';
    }
}
// abstract class는 기능이 완전하지 않기 때문에 new 키워드 사용 불가
// new AbstractPerson();    // Error 발생
class Person11 extends AbstractPerson {
    // 완전하지 않은 부모 클래스에서 구현되지 않은 메서드를 자식 클래스에서 구현
    setName(name) {
        this._name = name;
    }
}
const p11 = new Person11();
p11.setName('Anna');
