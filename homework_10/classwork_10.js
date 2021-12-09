//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form = document.createElement("form");
// document.body.appendChild(form);
//
// let firstInput = document.createElement("input");
// form.appendChild(firstInput);
//
// let secondInput = document.createElement("input");
// form.appendChild(secondInput);
//
// let button = document.createElement("button");
// form.appendChild(button);
// button.innerText = "Console log";
//
// button.onclick = function (e) {
//     e.preventDefault();
//     console.log(firstInput.value, secondInput.value);
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let form = document.createElement("form");
// document.body.appendChild(form);
//
// let firstInput = document.createElement("input");
// form.appendChild(firstInput);
// firstInput.placeholder = "Кількість рядків";
//
// let secondInput = document.createElement("input");
// form.appendChild(secondInput);
// secondInput.placeholder = "Кількість ячеєєк";
//
// let thirdInput = document.createElement("input");
// form.appendChild(thirdInput);
// thirdInput.placeholder = "Вміст ячеєєк";
//
// let button = document.createElement("button");
// form.appendChild(button);
// button.innerText = "SAVED";
//
// button.onclick = function (e) {
//     e.preventDefault();
//
//     for (let i = 0; i<firstInput.value; i++) {
//         let table = document.createElement("table");
//         document.body.appendChild(table);
//
//         let tr = document.createElement("tr");
//         table.appendChild(tr);
//
//         for (let item = 0; item < secondInput.value; item++) {
//             let th = document.createElement("th");
//             tr.appendChild(th);
//             th.innerText = thirdInput.value;
//             th.style.border = "1px solid silver";
//         }
//     }
// }


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let obsceneArr = ["нецензурнеслово", "нецензурне_слово", "нецензурне_слово_1", "нецензурне_слово_2", "нецензурне_слово_3"];
//
// let input = document.createElement("input");
// document.body.appendChild(input);
// input.placeholder = "Слово для перевірки";
//
// let button = document.createElement("button");
// document.body.appendChild(button);
// button.innerText = "CHECKED";
//
// button.onclick = function () {
//     for (let obsceneArrElement of obsceneArr) {
//         if (input.value === obsceneArrElement) {
//             alert(`Введено нецензурне слово: ${input.value}`);
//         }
//     }
// }


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// let obsceneArr = ["нецензурнеслово", "нецензурне_слово", "нецензурне_слово_1", "нецензурне_слово_2", "нецензурне_слово_3"];
//
// let input = document.createElement("input");
// document.body.appendChild(input);
// input.placeholder = "Речення для перевірки";
//
// let button = document.createElement("button");
// document.body.appendChild(button);
// button.innerText = "CHECKED";
//
// button.onclick = function () {
//     let toArr = (input.value.split(" "));
//
//     for (let toArrElement of toArr) {
//         for (let obsceneArrElement of obsceneArr) {
//             if (toArrElement === obsceneArrElement) {
//                 alert("В вашому речені присутнє нецензурне слово");
//             }
//         }
//     }
// }

