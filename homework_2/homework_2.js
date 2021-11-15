// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let input = prompt()
// let time = input;
//
//
// if (time<16) {
//     document.write("first part")
// }
//
// else if(time>15 && time<31){
//     document.write("second part")
// }
//
// else if (time>30 && time<46){
//     document.write(`third part`)
// }
//
// else if (time>45 && time<59){
//     document.write("fourth part")
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

//
// let day = +prompt("Write day number");
//
// if (day <= 10) {
//     document.write("it's first decade");
// } else if (day > 10 && day < 21) {
//     document.write("it's second decade");
// } else if (day <= 31 && day > 20) {
//     document.write("it's third decade")
// }


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)


// let test = false
//
// if (test !==true){
//     document.write("Вірно")
// }else {
//     document.write("Невірно")
// }

// let input = false
// test = input? "Вірно" : "Неправильно"
// document.write(test)


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let link = 0
// let a = link? "Невірно" : "Вірно"
// document.write(a)


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let key = prompt("Write day number");
// switch (key){
//     case "1":
//         document.write("Swimming");
//         break;
//     case "2":
//         document.write("Learning english");
//         break;
//     case "3":
//         document.write("Running");
//         break;
//     case "4":
//         document.write("Learn programming");
//         break;
//     case "5":
//         document.write("Fishing");
//         break;
//     case "6":
//         document.write("Playing football");
//         break;
//     case "7":
//         document.write("Reading");
//         break;
//     default:
//         document.write("Wrong number")
// }


//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt("Write year");
//
// if (year%4===0){
//     document.write("Its year is leap");
// }
// else if (year%4===1){
//     document.write("Its year dont leap")
// }


//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let input = prompt("Яка офіційна назва 'Java Script?'");
//
// if (input==="ECMAScript"){
//     document.write("Правильно!");
// }
// else if (input!=="ECMAScript"){
//     document.write("Не знаєте? ECMAScript!")
// }


//CLASSWORK

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// let number_1 = +prompt("Write number 1")
// let number_2 = +prompt("Write number 2")
//
// if (number_1>number_2){
//     document.write(number_1)
// }
// else if (number_1<number_2){
//     document.write(number_2)
// }
// else if (number_1===number_2){
//     document.write("Number is indentical")
// }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let number_home = +prompt("Write number home");
//
// if (number_home<21){
//     document.write("Its entrance 1");
// }
// else if (number_home>20 && number_home<49){
//     document.write("Its entrance 2");
// }
// else if (number_home>48 && number_home<91){
//     document.write("Its entrance 3");
// }


//- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt("Write number")
//
// let check = number===10? document.write("Вірно") : document.write("Невірно");


//- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else


// let input = true;
//
// if (typeof input==="number"){
//     document.write("1");
// }
// else if (typeof input==="string"){
//     document.write("2")
// }
// else if (typeof input==="boolean"){
//     document.write("3");
// }
// else if (typeof input==="object" || typeof input==="array"){
//     document.write("4")
// }
// else{
//     document.write("error")
// }


//- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = +prompt("Вкажіть температуру");
//
// if (temperature>9 && temperature<23){
//     document.write("Ми йдемо вчитися");
// }
// else{
//     document.write("Сидимо вдома та вчимось онлайн");
// }


//- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


// let key = +prompt("Введіть довільне чило");
//
// switch (key){
//     case 1:
//         document.write("Ти виграв авто");
//         break;
//     case 2:
//         document.write("Ти виграв мото");
//         break;
//     case 3:
//         document.write("Ти виграв телефон");
//         break;
//     case 4:
//         document.write("Ти виграв компютер");
//         break;
//     case 5:
//         document.write("Ти виграв ноотбук")
//         break
//     default:
//         document.write("Число не вірне!")
// }
