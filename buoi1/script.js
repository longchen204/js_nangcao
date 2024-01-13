// console.log(100);
// console.log("hello", 100, true);

// //bai 3: khai bao bien
// // $ten_bien PHP

// let firstName = "Long";
// const lastName = "Hoang Huy";

// let age = 19;
// console.log(age);

// let score;
// score = 1;
// console.log(score);

// if (true){
//     score = score + 1;
// }
// console.log(score);

// const x = 100;

// const arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);

// // object ten {}
// //thuoc tinh OOP, class

// const person = {
//     name: "Long",
//     age: 19,
//     subject : "front-end",
// };

// person.name = "Long";
// person.email = "longhhph37523@fpt.edu.vn";
// console.log(person);

// let a,b,c 
// const d = 10,
//     e = 20,
//     f = 30;
// console.log(d);
// console.log(a);

// //bai4
// const name =  "John";
// const tuoi = 23;
// const temp = 98.8;

// const hasKids = true;

// const aptNumber = null;

// const diem = undefined;

// console.log(diem);

// const number = [1,2,3,4];

// const person = {
//     name: "John",
// };

// console.log(typeof hasKids);

// function sayHello(){
//     console.log("Hello Xin Chao");
// }

// const output = "Say Hello";

// console.log(output, typeof output );

// 1 - 05
// const name = "John";
// const age = 30;

// const person = {
//     name: 'Brad',
//     age:40, 
// }
// let newName = name;
// newName.name = 'Jonathan';

// let newPerson = person;
// newPerson.name = 'Bradname';

// console.log(name, newName);
// console.log(person, newPerson);

// 1 - 06
// let amount = 'hello';

// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// amount = amount.toString();
// amount = String(amount);

// amount = parseFloat(amount);

// amount = Boolean(amount);

// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' /3);

// console.log(amount, typeof amount);

// 1 - 07
// let x;
// x = 5 + 5 ;
// x = 5 - 5 ;
// x = 5 * 5 ;
// x = 5 / 5 ;
// x = 7 % 5;

// x = 'Hello' + ' ' + 'World';
// x = 2 ** 3;

// x = 1;
// x++;
// x--;

// x = 10;
// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x %= 5;
// x **= 5;

// x = 2 == '2';
// x = 2 === '2';
// x = 2 != '2';
// x = 2 != 2 ;

// x = 10 > 5;
// x = 10 < 5;
// x = 10 <= 5;
// x = 10 >= 5;

// console.log(x);

// 1 - 08
// let x;
// x = 5 + '5';
// x = 5 + Number('5');
// x = 5 * '5';
// x = 5 + null;
// x = Number(null);
// x = Number(true);
// x = Number(false);
// x = 5 + true;
// x = 5 + false;
// x = 5 + undefined;
// console.log(x, typeof x);


// 1 - 09 
// let x;

// const name = 'John';
// const age = 31;
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
// x = `Hello, my name is ${name} and I am ${age} years old`;
// const s = new String('Hello World');
// x = typeof s;
// x = s.length;
// x = s[0];
// x = s.__proto__;
// x = s.toUpperCase();
// x = s.toLowerCase();
// x = s.charAt(0);
// x = s.indexOf('d');
// x = s.substring(2, 5);
// x = s.substring(7);
// x = s.slice(-11, -6);
// x = '         Hello World';
// x = x.trim();
// x = s.replace('World', 'John');
// x = s.includes('Hell');
// x = s.valueOf();
// x = s.split('');

// console.log(x);

// 1 - 10
// const myString = 'developer';
// let myNewString; 
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// myNewString = myString[0].toUpperCase() + myNewString.substring(1);
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);

// 1 - 11
// let x;
// const num = new Number(5);
// x = num.toString();
// x = num.toString().length;
// x = num.toFixed(2); 
// x = num.toPrecision(3);
// x = num.toExponential(2);
// x = num.toLocaleString('en-US');
// x = num.valueOf();
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;
// console.log(x);

// 1 - 12
// let x;
// x = Math.sqrt(9);
// x = Math.abs(-5);
// x = Math.round(4.2);
// x = Math.ceil(4.2);
// x = Math.floor(4.9);
// x = Math.pow(2, 3);
// x = Math.min(4, 5, 3);
// x = Math.max(4, 5, 3);
// x = Math.random();
// x = Math.floor(Math.random() * 100 + 1);
// console.log(x);

//1- 13
// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// const quot = x / y;
// const quotOutput = `${x} / ${y} = ${quot}`;
// console.log(quotOutput);

// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);

//1-14
// let d;
// d = new Date();
// d = d.toString();
// d = new Date(2021, 0, 10, 12, 30, 0);
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');

// d = Date.now();
// d = new Date();
// d = d.getTime();
// d = d.valueOf();
// d = new Date(1666962049745);
// d = Math.floor(Date.now() / 1000);

// console.log(d);

//1 - 15
let x;
let d = new Date();
x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);
