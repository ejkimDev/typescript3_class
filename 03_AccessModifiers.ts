class Person3 {
  public name: string = "Searchkim"; 
  public age: number; 

  public constructor(age: number){   // 별도의 생성자를 만들면 기본 생성자는 사라짐
    this.age = age;
  }   
}

const p3 = new Person3(29);

console.log(p3);