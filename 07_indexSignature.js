"use strict";
// class -> object를 만들어 냄
// Ex.
// {searchkim : 'female', jade: 'male'}
// {mark : 'male', chloe: 'female', anna: 'female'}
class Students {
}
const a = new Students();
a.searchkim = 'female';
a.jade = 'male';
console.log(a);
const b = new Students();
b.mark = 'male';
b.chloe = 'female';
b.anna = 'female';
console.log(b);
