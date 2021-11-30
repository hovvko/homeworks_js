//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, producer, graduationYear, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.graduationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
//     }
//
//     this.info = function () {
//         console.log(`Model - ${this.model}, producer - ${this.producer}, graduation year - ${this.graduationYear}, max speed - ${this.maxSpeed}, engine capacity - ${this.engineCapacity}`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.graduationYear = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car("Tesla Model S", "Tesla", 2012, 320, 82);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(30);
// car.changeYear(2010);
// car.addDriver({name: "vasya", surname: "surname", age: 31})


//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, graduationYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.graduationYear = graduationYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     };
//
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info () {
//         console.log(`Model - ${this.model}, producer - ${this.producer}, graduation year - ${this.graduationYear}, max speed - ${this.maxSpeed}, engine capacity - ${this.engineCapacity}`);
//     };
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     changeYear (newValue) {
//         this.graduationYear = newValue;
//     };
//
//     addDriver (driver) {
//         this.driver = driver;
//     };
// }
//
// let car = new Car("Tesla Model S", "Tesla", 2012, 320, 82);
//
// // car.drive();
// // car.info();
// // car.increaseMaxSpeed(30);
// // car.changeYear(2010);
// // car.addDriver({name: "Vasya", surname: "Pupkin", age: 31});
// //
// // console.log(car);


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderellaArray = [];
//
// let addCinderellaObj = (array) => {
//     for (let i = 1; i <= 10; i++) {
//         array.push(new Cinderella("cinderella", 20, 37+i));
//     }
// };
//
// addCinderellaObj(cinderellaArray);
// // console.log(cinderellaArray);


//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince{
//     constructor(name, age, findShoes) {
//         this.name = name;
//         this.age = age;
//         this.findShoes = findShoes;
//     }
// }
//
// let prince = new Prince("prince", 20, 43);
//
// // console.log(prince);


//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let cinderellaAndPrince = (arrayCinderella, ourPrince) => {
//     for (let arrayCinderellaElement of arrayCinderella) {
//         if (arrayCinderellaElement.footSize === ourPrince.findShoes) {
//             console.log("Cinderella", arrayCinderellaElement, "and your prince", ourPrince);
//         }
//     }
// };
//
// // cinderellaAndPrince(cinderellaArray,prince);


//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// cinderellaArray.find((item) => {
//     if (item.footSize === prince.findShoes) {
//         console.log("Cinderella", item , "and your prince", prince);
//     }
// });



















