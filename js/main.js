let sum = (a, b) => a+b
let res = sum(2, 3);

console.log(`2+3 = ${res}`);

let firstName = 'John';
let lastName = 'Doe';

let email = 'john.doe@gmail.com';
let employee = {firstName, lastName, email};
console.log("employee: ", employee);

let items = ['one', 'two', 'three', 'four', 'five'];

let [first, second, ...other] = items;
console.log(first); // one
console.log(second); // two
console.log(other); // ['three', 'four', 'five']
