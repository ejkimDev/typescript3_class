abstract class AbstractPerson {
  protected _name: string = 'Searchkim';

  // abtract 키워드를 사용했기 때문에 메서드의 몸체를 구현하지 않음
  // -> abtract 키워드를 사용하면 class 앞에 abstract를 붙여야 함
  abstract setName(name: string): void;
}

// abstract class는 기능이 완전하지 않기 때문에 new 키워드 사용 불가
// new AbstractPerson();    // Error 발생

class Person11 extends AbstractPerson{
  
  // 완전하지 않은 부모 클래스에서 구현되지 않은 메서드를 자식 클래스에서 구현
  setName(name: string): void {
    this._name = name;
  }  
}

const p11 = new Person11();
p11.setName('Anna');