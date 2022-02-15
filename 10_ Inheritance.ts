class Parent {
  // protected : 외부에서 접근할 수 없지만, 상속 관계에서는 접근 가능
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고 나이는 ${this._age}입니다.`);
  }
}

const p10 = new Parent("Searchkim", 29);
// p10._name    // Error 발생(프로퍼티가 protected이기 때문에 외부에서 접근 불가)
p10.print();    // public  메서드 이기때문에 가능

/* 자식 클래스 1 */
class Child extends Parent{   // Parent를 상속받음
}

// 자식 클래스에 아무것도 적지 않으면 부모 클래스의 생성자를 그대로 사용할 수 있다.
const ch =  new Child("Anna", 20);  
ch.print();

/* 자식 클래스 2 */
class Child2 extends Parent{
  public _name = "Mark";      // 부모의 프로퍼티 오버라이드
  public gender = "male";     // 프로퍼티 추가

  // 자식 생성자에선 무조건 super를 먼저 호출해야한다.
  constructor(age: number){
    // super : 부모의 생성자 호출
    super("Lee", age);
  }
}

const ch2 = new Child2(3);
ch2.gender      // public이므로 접근 가능
ch2.print();