//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let leastNumber = (number_1, number_2, number_3) => {
//     if (number_1 < number_2 && number_1 < number_3) {
//         console.log(number_1);
//     } else if (number_2 < number_1 && number_2 < number_3) {
//         console.log(number_2);
//     } else if (number_3 < number_2 && number_3 < number_1) {
//         console.log(number_3);
//     }
// };
//
// leastNumber(5,10,15);


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let mostNumber = (number_1, number_2, number_3) => {
//     if (number_1 > number_2 && number_1 > number_3) {
//         console.log(number_1)
//     }
//     else if (number_2 > number_1 && number_2 > number_3) {
//         console.log(number_2)
//     }
//     else if (number_3 > number_2 && number_3 > number_1) {
//         console.log(number_3)
//     }
// }
//
// mostNumber(3,2,1)


//- створити функцію яка повертає найбільше число з масиву
// let arr = [7, 5, 3, 2]
//
// let mostNumberInArray = (array) => {
//     let arrLargestNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (arrLargestNumber < array[i]) {
//             arrLargestNumber = array[i]
//         }
//     }
//     return arrLargestNumber
// }
//
// console.log(mostNumberInArray(arr));


//- створити функцію яка повертає найменьше число з масиву
// let arr = [5,3,8,10];
//
// let leastNumberInArray = (array) => {
//     let leastNumber = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement<leastNumber){
//             leastNumber = arrayElement
//         }
//     }
//     return leastNumber
// }
//
// console.log(leastNumberInArray(arr));


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,10];
//
// let sumInArrayResult = (array) => {
//     let result = 0;
//     for (let arrayElement of array) {
//         result += arrayElement
//     }
//     return result
// }
//
// console.log(sumInArrayResult(arr));


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1, 2, 3];
//
//
// let arithmeticNumberInArray = (array) => {
//     let sumResultInArray = 0;
//     for (let arrayElement of array) {
//         sumResultInArray += arrayElement
//     }
//     return sumResultInArray / array.length;
// }
//
// console.log(arithmeticNumberInArray(arr));


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено)
// let mostAndLeastNumber = (...arg) => {
//     let leastNumber = "Найменше число: "+arg[0];
//     let mostNumber = 0;
//     for (let itemArg of arg) {
//         if (leastNumber>itemArg) {
//             leastNumber = itemArg;
//         }
//         else if (mostNumber<itemArg) {
//             mostNumber  = itemArg;
//         }
//     }
//     console.log(`Найбільше число: ${mostNumber}`);
//     return leastNumber;
//
// }
//
//
// console.log(mostAndLeastNumber(5,10,15));


//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100) та виводить його.
// let arr = [];
//
// let addRandomNumbers = (array) => {
//     for (let i = 0; i<5; i++) {
//         array[i] = Math.round(Math.random()*100);
//     }
//     console.log(array);
// };
//
// addRandomNumbers(arr);


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = [];
//
// let addRandomNumbersInArray = (array,limit) => {
//     for (let i = 0; i < 5; i++) {
//         array[i] = Math.round(Math.random()*limit);
//     }
//     console.log(array)
// }
//
// addRandomNumbersInArray(arr,10)


//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3];
//
// let emptyArr = [];
//
// let reverseArray = (array) => {
//     let plus = 0;
//     for (let i = array.length - 1; i >= 0; plus<array.length, i--, plus++) {
//         emptyArr[plus] = array[i];
//     }
// }
//
// reverseArray(arr);
// console.log(emptyArr);

















