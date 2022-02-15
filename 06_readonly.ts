class Person6 {
  public readonly name = 'Searchkim';
  private readonly country: string = 'Korea';

  // 프로퍼티 선언부, 생성자에선 readonly 프로퍼티에 초기화 가능(접근 제어자 상관 없이)
  public constructor(private _name: string, public age: number){
    this.country = 'USA';   
  }

  hello(){
    // this.country = 'USA';    // Error 발생(private readonly : 클래스 내부에서 읽기전용)
  }
}

const p6 = new Person6("Anna", 20);

console.log(p6.name);
// p6.name = "Anna";    // readonly이므로 Error 발생