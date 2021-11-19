//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function func(){
//     if (arguments.length === 1){
//         console.log(arguments[0]);
//     }
//     else if (arguments.length === 2){
//         return (arguments[0] + arguments[1]);
//     }
// }
//
// func(6);
// console.log(func(2,5));


//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// let arr_1 = [1,2,3,4];
// let arr_2 = [2,3,4,5];
// let arr_3 = [];
//
// function concatenationArray(array_1,array_2){
//     for (let item = 0; item<array_1.length; item++){
//         arr_3[item] = array_1[item] + array_2[item];
//     }
// }
//
// concatenationArray(arr_1,arr_2);
// console.log(arr_3);


//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let arrKey = [];
//
// function getArrayKey(array) {
//     for (let item of array){
//         for (let key in item){
//             arrKey.push(key);
//         }
//     }
// }
//
// getArrayKey(arr);
// console.log(arrKey);


//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// let arrValue = [];
//
// function getArrValue(array){
//     for (let item of array){
//         for (let key in item){
//             arrValue.push(item[key]);
//         }
//     }
// }
//
// getArrValue(arr);
// console.log(arrValue);

