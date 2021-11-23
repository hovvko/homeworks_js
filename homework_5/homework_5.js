//- створити функцію яка обчислює та повертає площу прямокутника висотою
// let areaResult = (height, width) => height + width;
//
// console.log(areaResult(3, 2));


//- створити функцію яка обчислює та повертає площу кола
// let areaCircle = (r) => 3.14*(r**2);
//
// console.log(areaCircle(5));


//- створити функцію яка обчислює та повертає площу циліндру
// let areaCylinder = (r,h) => 2*3.14*r*(h+r);
//
// console.log(areaCylinder(2,3));


//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3];
//
// let arrItem = (array) => {
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// };
//
// arrItem(arr);


//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let createParagraph = (text) => {
//     document.write(`<p>${text}</p>`);
// };
//
// createParagraph("text");


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let createList = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// };
// createList("Lorem");


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let createList = (text, limit) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// createList("Lorem ipsum",3);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 2, 3, "four", "five", "six", true, false];
//
// let createLeastForArray = (array) => {
//     document.write(`<ul>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// createLeastForArray(arr);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {
//         id: 1,
//         name: "vasya",
//         age: 30},
//     {
//         id: 2,
//         name: "John",
//         age:32
//     }
// ];
//
// let arrayWrite = (array) => {
//     for (let arrayElement of array) {
//         document.write(`<div>${arrayElement.id} <br> ${arrayElement.name} <br> ${arrayElement.age}</div>`);
//     }
// };
//
// arrayWrite(arr);