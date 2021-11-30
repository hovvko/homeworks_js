//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arr = [];
//
// let addObjInArray = () => {
//     for (let i = 1; i <= 10; i++) {
//         arr.push(new User(i, "vasya", "pupkin", "email@.com", "+380949494247"));
//     }
// };
//
// addObjInArray();// Для того щоб працювали 2 наступних завдання потрібно залишити весь код який виконує цю функцію!!!
// // console.log(arr);


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// arr.filter((item) => {
//     if (item.id % 2 === 0) {
//         console.log(item);
//     }
// });
//
// console.log(arr);


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arr.sort((a, b) => b.id - a.id)); //Відсортував по спаданню, тому що по зростанню він вже в мене відсортований


//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }


//створити пустий масив, наповнити його 10 об'єктами Client
// let client_2 = new Client(2, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "tomato", "potato"]);
// let client_1 = new Client(1, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil"]);
// let client_3 = new Client(3, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "carrot"]);
// let client_4 = new Client(4, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "tomato", "potato", "chili", "pumpkin"]);
// let client_5 = new Client(5, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "onion", "olives", "pepper"]);
// let client_6 = new Client(6, "Cris", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "tomato", "potato", "chili", "pumpkin", "broccoli"]);
// let client_7 = new Client(7, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "onion", "olives", "pepper", "potato", "chili", "pumpkin"]);
// let client_8 = new Client(8, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "potato", "chili", "pumpkin", "onion", "olives", "pepper", "carrot"]);
// let client_9 = new Client(9, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "corn", "chili", "pumpkin", "onion", "olives", "pepper", "carrot", "lemon"]);
// let client_10 = new Client(10, "John", "Henkins", "henkins@gmail.com", "+380987615352", ["oil", "leek"]);
//
// let clientArr = [client_1, client_2, client_3, client_4, client_5, client_6, client_7, client_8, client_9, client_10];


//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clientArr.sort((a, b) => a.order.length - b.order.length));









