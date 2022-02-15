// class -> object를 만들어 냄
// Ex.
// {searchkim : 'female', jade: 'male'}
// {mark : 'male', chloe: 'female', anna: 'female'}

class Students {
  [index: string] : 'male' | 'female';
  // [index: string] : string이면 무조건 올 수 있다. 
  //                  (프로퍼티를 동적으로 구현할 때 사용)
}

const  a = new Students();
a.searchkim = 'female';
a.jade = 'male';

console.log(a);

const  b = new Students();
b.mark = 'male';
b.chloe = 'female';
b.anna = 'female';

console.log(b);