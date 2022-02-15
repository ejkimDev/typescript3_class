class Person4 {
  public constructor(public name: string, public age: number){}
  // this.name = name; 과 같이 쓸 필요없이 해당 방식 사용 가능   
}

const p4 = new Person4("Searchkim", 20);

console.log(p4);