//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
// let emptyArr = [];
//
// let number = 0;
//
// while (number < 50) {
//     emptyArr[number] = number += 2;
// }
//
// console.log(emptyArr);


//        b. заповнити його 50 непарними числами за допомоги циклу.
// let emptyArr = [];
//
// for (let i = 0; i < 50; i++) {
//     emptyArr[i] = i += 1;
// }
//
// console.log(emptyArr);


//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 50);
// }
//
// console.log(arr);


//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = [];
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8) + 8)
// }
//
// console.log(arr);


//  2. Вивести за допомогою console.log кожен третій елемен
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i += 2]);
// }


//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+=2] % 2 === 0) {
//         console.log(arr[i])
//     }
// }


//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+=2] % 2 === 0) {
//         newArr.push(arr[i])
//     }
// }
//
// console.log(newArr);


//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i += 1] % 2 === 0) {
//         console.log(arr[i-=1]);
//     }
// }


//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100, 250, 50, 168, 120, 345, 188];
//
// let sum = 0;
//
// for (let number of arr) {
//     sum = sum + number / arr.length
// }
//
// console.log(sum);


//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrRandomNumbers = [];
//
// for (let i = 0; i < 5; i++) {
//     arrRandomNumbers.push(Math.floor(Math.random() * 50));
// }
//
// let newArr = [];
//
// for (let arrRandomNumber of arrRandomNumbers) {
//     newArr.push(arrRandomNumber * 5);
// }
//
// console.log(newArr);


//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = [1, 2, "three", "four", true, false, 45, 5];
//
// let newArr = [];
//
// for (let arrElement of arr) {
//     if (typeof arrElement === "number") {
//         newArr.push(arrElement)
//     }
// }
//
// console.log(newArr);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let newArr = [];
//
// for (let userItem of usersWithId) {
//     // console.log(userItem);
//     for (let citiesItem of citiesWithId) {
//         if (userItem.id === citiesItem.user_id) {
//             userItem.city = citiesItem
//         }
//     }
//     newArr.push(userItem)
// }
//
// console.log(newArr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [5, 2, 3, 4, 6, 8, 2, 0, 7];
//
// for (let number of arr) {
//     if (number % 2 === 0) {
//         if (number === 0) {
//         }
//         else {
//             console.log(number);
//         }
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [1, 2, 3, 4, 5, 9, 8, 7, 6];
//
// let emptyArr = [];
//
// let i = 0;
//
// while (i<arr.length) {
//     emptyArr.push(arr[i]);
//     i++
// }
//
// console.log(emptyArr);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
//
// let result = "";
//
// for (let i = 0; i < arr.length; i++) {
//     result = result + arr[i];
// }
//
// console.log(result);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
//
// let i = 0;
//
// let result = "";
//
// while (i<arr.length) {
//     result = result + arr[i];
//     i++;
// }
//
// console.log(result);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
//
// let result = "";
//
// for (let string of arr) {
//     result = result + string;
// }
//
// console.log(result);
























