//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function least_number(number_1, number_2, number_3) {
//     if (number_1<number_2 && number_1<number_3){
//         console.log(number_1)
//     }
//     else if (number_2<number_1 && number_2<number_3){
//         console.log(number_2)
//     }
//     else if (number_3<number_1 && number_3<number_2){
//         console.log(number_3)
//     }
// }
//
// least_number(2,1,3)


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function most_number(number_1,number_2,number_3){
//     if (number_1>number_2 && number_1>number_3){
//         console.log(number_1)
//     }
//     else if (number_2>number_1 && number_2>number_3){
//         console.log(number_2)
//     }
//     else if (number_3>number_1 && number_3>number_2){
//         console.log(number_3)
//     }
//     else{
//         console.log("error")
//     }
// }
//
// most_number(5,10,15)


//- створити функцію яка повертає найбільше число з масиву
// let arr = [5,10,15]
//
// let largest = arr[0]
//
// function most_number(array) {
//     for (let i = 0; i<array.length; i++){
//         if (largest<array[i]){
//             largest = array[i]
//         }
//     }
// }
//
// most_number(arr)
// console.log(largest)


//- створити функцію яка повертає найменьше число з масиву
// let arr = [10, 20, 30]
//
// let least = arr[0]
//
// function least_number(array) {
//     for (let i = 0; i<array.length; i++) {
//         if (least>array[i]) {
//             least = array[i]
//         }
//     }
// }
//
// least_number(arr)
// console.log(least)


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,3]
//
// let result = 0
//
// function sum(array) {
//     for (let i = 0; i<array.length; i++){
//         result += array[i]
//     }
// }
//
// sum(arr)
// console.log(result)


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1,2,3]
//
// let arithmetic_result = 0
//
// function arithmetic_in_array(array) {
//     for (let i = 0; i<array.length; i++){
//         arithmetic_result += array[i]
//     }
//     arithmetic_result /= array.length
// }
//
// arithmetic_in_array(arr)
// console.log(arithmetic_result)


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let largest = 0
//
// function func() {
//     for (let i = 0; i<arguments.length; i++){
//         if (largest<arguments[i]){
//             largest = arguments[i]
//         }
//     }
//     let least = arguments[0]
//     for (let i = 0; i<arguments.length; i++){
//         if (least>arguments[i]){
//             least = arguments[i]
//         }
//     }
//     return(least)
// }
//
// // func(10,15,22)
// // console.log(largest)
//
// console.log(func(1,2,3))


//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100) та виводить його.
// let arr = []
//
// function addRandomNumberInArray() {
//     for (let i = 0; i<1; i++) {
//         arr[i] = Math.round(Math.random()*100)
//     }
// }
//
// addRandomNumberInArray()
// console.log(arr)


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = []
//
// function addArrayRandomNumbersLimit(limit) {
//     for (let i = 0; i<1; i++) {
//         arr[i] = Math.round(Math.random()*limit)
//     }
// }
//
// addArrayRandomNumbersLimit(5)
// console.log(arr)


//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = []
//
// function insideOutArray(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i])
//         newArr.push(array[i])
//     }
// }
//
// insideOutArray(arr)
// console.log(newArr);



