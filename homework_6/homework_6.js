// - Знайти та вивести довижину настипних стрінгових значень
// //     'hello world', 'lorem ipsum', 'javascript is cool'
// // let a = "hello world";
// // let b = "lorem ipsum";
// // let c = "java script is cool";
// //
// // console.log(a.length);
// // console.log(b.length);
// // console.log(c.length);


//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// let a = "hello world";
// let b = "lorem ipsum";
// let c = "java script is cool";
//
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());


//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a = "HELLO WORLD";
// let b = "LOREM IPSUM";
// let c = "JAVA SCRIPT IS COOL";
//
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
//
// console.log(str.trim());


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
//
// let stringToArray = (string) => {
//     let split = string.split(" ");
//     document.write(split);
//     console.log(split);
// }
//
// stringToArray(str);


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
//
// function delete_characters (string, length) {
//     return string.substr(0,length);
// }
//
// console.log(delete_characters(str, 7));


//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
//
// let toUpperCaseAndAddHyphen = (string) => console.log(string.replaceAll(" ", "-").toUpperCase());
//
//
// toUpperCaseAndAddHyphen(str);


//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'каждый охотник желает знать';
//
// let toUpperCaseFirstSymbol = (string) => {
//     console.log(string[0].toUpperCase() + string.slice(1));
//
// }
//
// toUpperCaseFirstSymbol(str);


//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'Каждый охотник желает знать';
//
// let capitalize = (string) => {
//     let split = string.split(" ");
//     let new_str = "";
//     for (let splitElement of split) {
//         if (splitElement[0] === splitElement[0].toUpperCase()) {
//             console.log(new_str = splitElement);
//         }
//     }
// };
//
// capitalize(str);















