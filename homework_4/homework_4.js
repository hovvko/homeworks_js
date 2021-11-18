//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle_area (a,b){
//     return a*b
// }
//
// console.log(rectangle_area(6,2))


//- створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle_area(r){
//     return 3.14*(r**2)
// }
// console.log(circle_area(5))


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder_areay(r,h){
//     return (2*3.14)*r*(h+r)
// }
// console.log(cylinder_areay(5,10))


//- створити функцію яка приймає масив та виводить кожен його елемент
// function input_area(array) {
//     for (let item of array) {
//         console.log(item)
//     }
// }
//
// let arr = [1, 2, 4, 5, 'one', "two", "three", true, false]
//
// input_area(arr)


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function create_p(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// create_p("- створити функцію яка створює параграф з текстом. Текст задати через аргумент")
// create_p("one two three four five 1 2 3 4 5")


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul_li(text_in_li) {
//     document.write(`<ul>`)
//     for (let i = 0; i<3; i++) {
//         document.write(`<li>${text_in_li}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// ul_li("text")


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul_li_range (text,range_number) {
//     document.write(`<ul>`)
//     for (let i = 0; i<range_number; i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// ul_li_range("txt",3)


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function array_list(array) {
//     document.write(`<ul>`)
//     for (let item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let arr = [1, 2, 3, 4, 5, "six", "seven", true, false]
// let arr_1 = ["okten","the","best","!!!!"]
//
// array_list(arr)
// array_list(arr_1)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function param_user(array) {
//     for (let item of array){
//         document.write(`<div>id: ${item.id} <br> name: ${item.name} <br> age: ${item.age}</div>`)
//     }
// }
//
// let arr = [
//     {
//         id: 1,
//         name: "Eric",
//         age: 50
//     },
//     {
//       id: 2,
//       name: "John",
//       age: 20
//     }
// ]
//
// param_user(arr)



