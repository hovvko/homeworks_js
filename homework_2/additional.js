//- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// let three_array = friends[2];
//
// if (friends>=three_array){
//     document.write("Великий масив, в якому 3 та більше елемента");
// }
// else if (friends!==three_array){
//     document.write("Маленький масив в якому меншее 3-х елементів")
// }


//- Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.


// let first_number = +prompt("Введіть 1 число");
// let second_number = +prompt("Введіть 2 число");
// let third_number = +prompt("Введіть 3 число");

//Знаходженння само меншого числа
// else if (first_number<second_number && first_number<third_number){
//     document.write("Перше число найменше");
// }
// else if (second_number<first_number && second_number<third_number){
//     document.write("Друге число найменше");
// }
// else if (third_number<first_number && third_number<second_number){
//     document.write("Третє число найменше");
// }

//  - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }


// let first_number = +prompt("Введіть 1 число");
// let second_number = +prompt("Введіть 2 число");
//
// let result  = first_number+second_number<4? document.write("Мало"): document.write("Багато");


//- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором


// let input = +prompt("Введіть число");
//
// let result = input===0? "Рівне 0" : input<0? "Число негативне" : "Число позитивне"
// document.write(result)