//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// function wokeUp(callback) {
//     setTimeout(() => {
//         console.log("1) Woke up");
//         callback()
//     }, 300)
// }
//
// function doingExercises(callback) {
//     setTimeout(() => {
//         console.log("2) Doing exercises");
//         callback()
//     }, 200)
// }
//
// function brushTeeth(callback) {
//     setTimeout(() => {
//         console.log("3) Brush teeth");
//         callback()
//     }, 500)
// }
//
// function haveBreakfast(callback) {
//     setTimeout(() => {
//         console.log("4) Have Breakfast");
//         callback()
//     }, 400)
// }
//
// function reedBook(callback) {
//     setTimeout(() => {
//         console.log("5) Reed Book");
//         callback()
//     }, 100)
// }
//
// function learnProgramming(callback) {
//     setTimeout(() => {
//         console.log("6) Learn Programming");
//         callback()
//     }, 1000)
// }
//
// function haveLunch(callback) {
//     setTimeout(() => {
//         console.log("7) Have lunch");
//         callback()
//     }, 800)
// }
//
// function learnEnglish(callback) {
//     setTimeout(() => {
//         console.log("8) Learn English");
//         callback()
//     }, 700)
// }
//
// function running(callback) {
//     setTimeout(() => {
//         console.log("9) Running");
//         callback()
//     }, 900)
// }
//
// function takeAShower(callback) {
//     setTimeout(() => {
//         console.log("10) Take a Shower");
//         callback()
//     }, 600)
// }
//
// function goToSleep() {
//     setTimeout(() => {
//         console.log("11) Go to sleep");
//     }, 550)
// }

//TODO Call all function

// wokeUp()
// doingExercises()
// brushTeeth()
// haveBreakfast()
// reedBook()
// learnProgramming()
// haveLunch()
// learnEnglish()
// running()
// takeAShower()
// goToSleep()

//TODO Sync by callback

// wokeUp(() => {
//     doingExercises(() => {
//         brushTeeth(() => {
//             haveBreakfast(() => {
//                 reedBook(() => {
//                     learnProgramming(() => {
//                         haveLunch(() => {
//                             learnEnglish(() => {
//                                 running(() => {
//                                     takeAShower(() => {
//                                         goToSleep()
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
