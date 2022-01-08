//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let string = "наслаждение";
//
// function cutString (str, n) {
//     let emptyArr = [];
//     let iterationNumber = str.length/3
//     let num = 0;
//     for (let i = 0; i < iterationNumber; i++) {
//         emptyArr.push(str.substr(num,n));
//         num = num+n;
//     }
//     console.log(emptyArr);
// }
//
//
// cutString(string,3);


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// let someEmail1 = "someemail@gmail.com"; //valid
// let someEmail2 = "someeMAIL@gmail.com"; //valid
// let someEmail3 = "someeMAIL@i.ua"; //not valid
// let someEmail4 = "some.email@gmail.com"; //valid
//
// let validate = function (email) {
//     let emailLowerCase = email.toLowerCase();
//
//     if (emailLowerCase.endsWith(".com") || emailLowerCase.endsWith(".ua")) {
//         console.log("Перевірка на .com пройдена успішно!");
//     }
//     else return;
//
//     if (emailLowerCase[0] === "@") {
//         console.error("У вашій строці першим символом є равлик");
//         return;
//     }
//
//     let chosenSymbol = 0;
//
//     for (let i = 0; i < email.length; i++) {
//         if (emailLowerCase.charAt(i) === "@") {
//             console.log("Равлик присутній");
//             chosenSymbol = i;
//         }
//     }
//     if (emailLowerCase.charAt(chosenSymbol+1) === ".") {
//         console.log("Перший символ після равлика крапка");
//         return;
//     }
//     if (emailLowerCase.charAt(chosenSymbol+2) === ".") {
//         console.log("Другий символ після равлика крапка");
//     }
//     else {
//         console.log("Ваш email повністю валідний");
//     }
// }
//
// validate(someEmail4);
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(coursesArray);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// function count (str, stringSearch) {
//     let string = str.toLowerCase();
//     let searchElement = stringSearch.toLowerCase();
//
//     let num = 0;
//     for (let i = 0; i < str.length; i++) {
//         let symb = string.charAt(i);
//         if (symb === searchElement) {
//             num = num + 1;
//         }
//     }
//     console.log(num);
// }
//
// let string = "Астрономия это наука о небесных объектах";
//
// count(string,"о");


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let string = "Сила тяжести приложена к центру масс тела";
//
// function cutString (str, number) {
//     let arrayStrings = str.split(" ");
//
//     let slice = arrayStrings.slice(0,number);
//
//     console.log(slice);
// }
//
// cutString(string,5);









