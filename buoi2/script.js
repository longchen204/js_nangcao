// 2-1
// let x;
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];
// const fruits = new Array('apple', 'grape', 'orange');
// x = numbers[0];
// x = numbers[0] + numbers[3];
// x = `My favorite fruit is an ${fruits[2]}`;
// x = numbers.length;
// fruits[2] = 'pear';
// fruits[3] = 'strawberry';
// fruits[fruits.length] = 'blueberry';
// fruits[fruits.length] = 'peach';
// x = fruits;
// console.log(x);

// 2 - 2
// let x;
// const arr = [28, 38, 44, 29, 109];
// arr.push(100);
// arr.pop();
// arr.unshift(99);
// arr.shift();
// arr.reverse();
// x = arr.includes(445);
// x = arr.indexOf(28);
// x = arr.toString();
// x = arr.join();
// x = arr.slice(1, 4);
// x = arr.splice(1, 4);
// x = arr.splice(4, 1);
// x = arr.slice(1, 4).reverse().toString().charAt(0);
// console.log(x);

// 2-3
// let x;
// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];
// fruits.push(berries);
// x = fruits[3][1];
// const allFruits = [fruits, berries];
// x = allFruits[1][2];
// x = fruits.concat(berries);
// x = [...fruits, ...berries];
// const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// x = arr.flat();
// x = Array.isArray(fruits);
// x = Array.from('12345');
// const a = 1;
// const b = 2;
// const c = 3;
// x = Array.of(a, b, c);
// console.log(x);

// 2 - 4
// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.unshift(0);
// arr.reverse();
// console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// const arr3 = arr1.slice(0, 4).concat(arr2);
// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1);

// console.log(arr4);

// 2 - 5
// let x;
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };
// x = person.name; 
// x = person['age']; 
// x = person.address.state;
// x = person.hobbies[0];
// person.name = 'Jane Doe';
// person['isAdmin'] = false;
// delete person.age;
// person.hasChildren = true;
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// person.greet();

// const person2 = {
//   'first name': 'Brad',
//   'last name': 'Traversy',
// };

// x = person2['first name'];

// console.log(x);

// 2-6
// let x;
// const todo = new Object();
// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;

// x = todo;

// const person = {
//   address: {
//     coords: {
//       lat: 42.9384,
//       lng: -71.3232,
//     },
//   },
// };

// x = person.address.coords.lat;

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { ...obj1, ...obj2 };
// const obj4 = Object.assign({}, obj1, obj2);
// const todos = [
//   { id: 1, name: 'Buy Milk' },
//   { id: 2, name: 'Pickup kids from school' },
//   { id: 3, name: 'Take out trash' },
// ];

// x = todos[0].name;
// x = Object.keys(todo);
// x = Object.keys(todo).length;
// x = Object.values(todo);
// x = Object.entries(todo);
// x = todo.hasOwnProperty('age');
// console.log(x);

// 2 - 7
// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(person.age);

// const todo = {
//   id: 1,
//   title: 'Take out trash',
//   user: {
//     name: 'John',
//   },
// };

// const {
//   id: todoId,
//   title,
//   user: { name }, 
// } = todo;

// console.log(todoId);
// const numbers = [23, 67, 33, 49, 52];
// const [first, second, ...rest] = numbers;
// console.log(first, second, rest);

// 2 - 8
// const post = {
//     id: 1,
//     title: 'Post One',
//     body: 'This is the body',
// };
// const str = JSON.stringify(post);
// console.log(str.id);
// const obj = JSON.parse(str);

// console.log(obj.id);
//     const posts = [
//     {
//         id: 1,
//         title: 'Post One',
//         body: 'This is the body',
//     },
//     {
//         id: 2,
//         title: 'Post Two',
//         body: 'This is the body',
//     },
// ];
// const str2 = JSON.stringify(posts);
// console.log(str2);
  
//2-9
// Step 1
const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
  ];
  
  // Step 2
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  // Step 3
  const { title: firstBook } = library[0];
  
  console.log(firstBook);
  
  // Step 4
  const libraryJSON = JSON.stringify(library);
  
  console.log(libraryJSON);
  
