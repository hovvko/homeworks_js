// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let deleteExtraSymbolOnName = (...strings) => {
//     for (let stringsElement of strings) {
//         console.log(stringsElement.replaceAll("..", " ").replaceAll("---", " ").replaceAll("__", " "));
//     }
// }
//
// deleteExtraSymbolOnName(n1,n2,n3);


//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let addRandomNumberInArray = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
// console.log(addRandomNumberInArray());


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let addRandomNumberInArray = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
// let sort = addRandomNumberInArray().sort();
// console.log(sort);


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let addRandomNumberInArray = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
// let filterNumbers = addRandomNumberInArray().filter((item) => {
//         if (item % 2 === 0) {
//             return item;
//         }
//     }
// );
//
// console.log(filterNumbers);


//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let addRandomNumberInArray = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
//
// let changeToString = addRandomNumberInArray().map((value) => {
//         return value + "";
//     }
// )
//
// console.log(changeToString);


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let arr = [11,21,3];
//
// let sortNumbers = (array,direction) => {
//     if (direction === "ascending") {
//         return array.sort((a,b) => {return a-b});
//     }
//     else if (direction === "descending") {
//         return array.sort((a,b) => {return b-a});
//     }
// };
//
// console.log(sortNumbers(arr,'descending'));


//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortObjectInArray = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
//
// console.log(sortObjectInArray);


//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// let sortArrayObject = coursesAndDurationArray.filter((value) => value.monthDuration>5)
//
// console.log(sortArrayObject);


