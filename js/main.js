// task 1
// Создайте переменную num передайте в него число 123 используя циклы вывести пирамиду
// вывод:
// 1
// 12
// 123
// let n = 123;
// n = n.toString();
// for (let i of n) {
//   n[n.length - 1];
//   console.log(n);
//? }

// task 2
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// let str = "";
// for (let i = 1; i <= 7; i++) {
//   str += "#";
//   console.log(str);
// }

// task 3
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ], задача: реализовать рассылку сообщений типа: 'Hello,
// [Здесь должно быть имя клиента], the grand sale has begun,
// prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет
// let arr = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];
// for (let i of arr) {
//   if (i.age > 18) {
//     console.log(
//       `Hello, ${i.name}, the grand sale has begun, prices are reduced by 20%!`
//     );
//   }
// }

// task 4
// Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}],
// задача, отфильтровать массив, оставив только строки и числа
// let arr = [
//   1,
//   10,
//   true,
//   "hello",
//   "JS",
//   null,
//   false,
//   0,
//   { title: "Samsung", price: 1000 },
// ];
// for (let i of arr) {
//   if (typeof i === "number") {
//     console.log(i);
//   } else if (typeof i === "string") {
//     console.log(i);
//   }
// }

// task 5
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
// вывести в консоль символы у которых четный индекс
// let str = "Hello, I'm Jack. I'm 25 years old and I Frontend developer!";
// let str1 = "";
// for (let i in str) {
//   if (i % 2 === 0) {
//     str1 += str[i];
//   }
// }
// console.log(str1);

// task 6
// Дан многомерный массив состоящий из строк:
// const names = [
//   [
//     ['Helen', 'Tom'],
//     ['Jack', 'Peter']
//   ],
//   [
//     ['Jessica', 'Bob'],
//     ['Jimm', 'John']
//   ],
//   [
//     ['Alexa', 'Jessy'],
//     ['David', 'Paul']
//   ]
// ], задача: вывести в консоль только те имена, длинна которых больше 4-х символов
// let names = [
//   [
//     ["Helen", "Tom"],
//     ["Jack", "Peter"],
//   ],
//   [
//     ["Jessica", "Bob"],
//     ["Jimm", "John"],
//   ],
//   [
//     ["Alexa", "Jessy"],
//     ["David", "Paul"],
//   ],
// ];
// for (let i of names) {
//   for (let j of i) {
//     for (let x of j) {
//       if (x.length > 4) {
//         console.log(x);
//       }
//     }
//   }
// }

// task 7
// Проверьте все ли элементы в массиве number
// [1,2,3,4,5] --> true
// [1,"2","3",4,5] --> false
// let arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//   if (typeof i === "number") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// task 8
// найдите разницу в возрасте между самого старшего и самого младшего в семье
// дан массив с возрастами, нужно возвращать новый массив
// [возраст старшего,возраст младшего,разница]
// [12,74,44,28,59] --> [74,12,62]
// let arr = [12, 74, 44, 28, 59];
// let sum = [];
// let count = [];
// sum.push(arr.sort((a, b) => b - a)[0]);
// sum.push(arr.sort((a, b) => a - b)[0]);
// console.log(sum);

// task 9
// Напишите цикл, который за 7 вызовов console.log выводит такой ромбик:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

// task 10
// Вам дан целое число n и строку str и возвращает строку, повторяющуюся ровно n раз.

// let n = 3
// let str "hello"
// вывод:
// "hellohellohello"
// let n = 3;
// let str = "hello";
// let str1 = "";
// for (let i = 1; i <= n; i++) {
//   str1 += str;
// }
// console.log(str1);

// task 11
// Вам дан целое число n и вывести следующий результат
// let n = 10
// 1-2-3-4-5-6-7-8-9-10
// let n = 10;
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i + "-");
// }
// ?console.log(arr.join(""));

// task 12
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
// let arr1 = [];
// for (let i = 1; i <= 10; i++) {
//   arr1.push(i);
// }
// console.log(arr1);

// task 13
// Найдите самый длинный элемент массива и выведите в консоль
// "Hello my name is John"
// let str = "Hello my name is John";
// str = str.split(" ");
// let arr = [];
// for (let i of str) {
//   arr.push(i);
//   arr.sort((a, b) => b.length - a.length);
// }
// console.log(arr[0]);

// task 14
// Так же найдите самый короткий элемент этого же массива

// let str = "Hello my name is John";
// str = str.split(" ");
// let arr = [];
// for (let i of str) {
//   arr.push(i);
//   arr.sort((a, b) => a.length - b.length);
// }
// console.log(arr[0]);
