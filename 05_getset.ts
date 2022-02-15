class Person5 {
  public constructor(private _name: string, public age: number){}

  get name(){             // get을 하는 함수 : getter
    console.log('get');
    return this._name;
  }
  
  set name(n: string){    // set을 하는 함수 : setter
    console.log('set');
    this._name = n;
  }
}

const p5 = new Person5("Searchkim", 20);

console.log(p5.name);   // get
p5.name = "Anna";       // set
console.log(p5.name);   // get