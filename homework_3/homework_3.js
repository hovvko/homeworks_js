//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [1, 2, 3, 4, 5, "one", "two", "three", "four", "five", true, false, 5, 8, "six"]
// console.log(arr)


//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = "text";
// arr[1] = 1;
// arr[2] = true;
//
// console.log(arr);


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let i = 0; i<=10; i++){
//     document.write(`<div>Block</div>`)
// }

// for (let i = 1; i<=10; i++){
//     document.write(`<div>Block${i}</div>`)
// }

// let i = 0
// while (i<=20){
//     document.write(`<h1>Header</h1>`)
//     i++
// }

// let i = 0
// while (i<=20){
//     document.write(`<h1>Header ${i}</h1>`)
//     i++
// }


//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// for (let i = 0; i<=9; i++){
//     console.log(arr[i])
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
//
// let i = 0;
// while (i<=9){
//     console.log(array[i])
//     i++
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [1, 2, 3, 4, "five", "six", "seven", true, false, "ten"]
//
// for (let i = 0; i<=9; i++){
//     console.log(array[i])
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [1, 2, 3, 4, "five", "six", "seven", true, false, "ten"]
//
// for (let i = 0; i<=9; i++){
//     if (typeof array[i] === "boolean"){
//         console.log(array[i])
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [1, 2, 3, 4, "five", "six", "seven", true, false, "ten"]
//
// for (let i = 0; i<=9; i++){
//     if (typeof array[i] === "number"){
//         console.log(array[i])
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [1, 2, 3, 4, "five", "six", "seven", true, false, "ten"];
//
// for (let i = 0; i<=9; i++){
//     if (typeof array[i] === "string"){
//         console.log(array[i]);
//     }
// }



//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// array[3] = 4;
// array[4] = "five";
// array[5] = "six";
// array[6] = true
// array[7] = false
// array[8] = 3.14
// array[9] = "ten"
//
// for (let i = 0; i<=9; i++){
//     console.log(array[i])
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 1; i<=10; i++){
//     console.log(`Крок ${i}`)
//     document.write(`Крок ${i}`)
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i<=100; i++){
//     console.log(`Крок ${i}`)
//     document.write(`Крок ${i}`)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 2; i<=100; i=i+2){
//     console.log(`Крок ${i}`)
//     document.write(`Крок ${i}`)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i<=100; i+=2){
//     console.log(`Крок ${i}`)
//     document.write(`Крок ${i}`)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 1; i<=100; i+=2){
//     console.log(`Крок ${i}`);
//     document.write(`Крок ${i}`);
// }























