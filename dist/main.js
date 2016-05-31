'use strict';

var sum = function sum(a, b) {
  return a + b;
};
var res = sum(2, 3);

console.log('2+3 = ' + res);

var firstName = 'John';
var lastName = 'Doe';

var email = 'john.doe@gmail.com';
var employee = { firstName: firstName, lastName: lastName, email: email };
console.log("employee: ", employee);

var items = ['one', 'two', 'three', 'four', 'five'];

var first = items[0];
var second = items[1];
var other = items.slice(2);

console.log(first); // one
console.log(second); // two
console.log(other); // ['three', 'four', 'five']