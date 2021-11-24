//- Дано натуральное число n. Выведите все числа от 1 до n.
// let inputNumber = (n) => {
//     for (let i = 1; i < n; i++) {
//         console.log(i);
//     }
// }
//
// inputNumber(22);


//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let reverseAB = (a,b) => {
//     for (let i = a; i >= b; i--) {
//         console.log(i);
//     }
// };
//
// let inputNumber = (a, b) => {
//     for (let i = a; i < b; i++) {
//         console.log(i);
//     }
//     if (a>b) {
//         reverseAB(a,b);
//     }
// };
//
// inputNumber(10,5);


//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo = [9,8,0,4]
//
// let newFN = (array,number) => {
//     const result = array[number];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === array[number]) {
//             array[number] = array[number + 1];
//             array[number + 1] = result;
//         }
//     }
// };
//
// newFN(foo,2);// В залежності від введеного числа в аргумент number (0,1,2) буде змінюватись перестановка чисел як на зразку (введено 0 - вивід [ 8, 9, 0, 4 ] і т.д.)
// console.log(foo);


//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let arr_1 = [1, 0, 6, 0, 3];
// let arr_2 = [0, 1, 2, 3, 4];
// let arr_3 = [0, 0, 1, 0];
// let arr_4 = [1, 2, 3, 0, 0, 0, 5, 6, 7, 7, 8, 2, 0, 0, 0];
//
// let emptyArr = [];
//
// let getNumbersMostZero = (array) => {
//     for (let arrayElement of array) {
//         if (arrayElement > 0) {
//             emptyArr.push(arrayElement);
//         }
//     }
// };
//
// let getNumbersZero = (array) => {
//     for (let arrayElement of array) {
//         if (arrayElement === 0) {
//             emptyArr.push(arrayElement);
//         }
//     }
// };
//
// let moveZeroEnd = (array) => {
//     getNumbersMostZero(array);
//     getNumbersZero(array);
// };
//
// moveZeroEnd(arr_1);
// console.log(emptyArr);














