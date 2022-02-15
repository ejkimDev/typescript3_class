class Person2 {
  name: string = "Searchkim"; 
  age: number; 

  constructor(age: number){   // 별도의 생성자를 만들면 기본 생성자는 사라짐
    this.age = age;
  }   
}

const p2 = new Person2(29);

console.log(p2);