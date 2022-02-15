"use strict";
// 싱글톤 : 어플리케이션이 실행되는 중간에 클래스로부터 단 하나의 객체만 생성해서 사용
class ClassName {
    constructor() { } // private를 사용하여 클래스 내부에서만 생성할 수 있다.
    // 매개체 -> 이 함수를 이용해서 클래스 밖에서 객체 사용
    static getInstance() {
        // ClassName으로부터 만든 객체가 있으면 리턴, 없으면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    ;
}
ClassName.instance = null;
const c = ClassName.getInstance(); // getInstance 함수를 통해 객체 생성
const d = ClassName.getInstance();
console.log(c === d);
