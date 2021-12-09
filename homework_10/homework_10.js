//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let p = document.createElement("p");
// document.body.appendChild(p);
// p.id = "text";
// p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, odio.";
//
// let button = document.createElement("button");
// document.body.appendChild(button);
// button.innerText = "reset";
//
// button.onclick = function () {
//     p.style.display = "none";
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement("button");
// document.body.appendChild(button);
// button.innerText = "reset";
//
// button.onclick = function () {
//     this.style.display = "none";
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.createElement("form");
// let inputElement = document.createElement("input");
// let button = document.createElement("button");
// document.body.appendChild(form);
// form.appendChild(inputElement);
// form.appendChild(button);
//
// button.innerText = "checked";
// form.onsubmit = function (e) {
//     e.preventDefault();
// }
//
// button.onclick = function () {
//     if (inputElement.value >= 18) {
//         console.log("Your age is most 18");
//     }
//     else {
//         console.log("Your age is least 18");
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике
// let divMain = document.createElement("div");
// document.body.appendChild(divMain);
// divMain.style.width = "100px";
// divMain.style.height = "600px";
// divMain.style.background = "silver";
//
// let button = document.createElement("button");
// divMain.appendChild(button);
// button.innerText = "menu";
// button.style.width = "100%";
//
// let divContentMenu = document.createElement("div");
// divMain.appendChild(divContentMenu);
// divContentMenu.classList.add("display")
//
// let divItem_1 = document.createElement("div");
// divContentMenu.appendChild(divItem_1);
// divItem_1.innerText = "Item 1";
// divItem_1.style.width = "100%";
// divItem_1.style.background = "cornsilk";
//
// let divItem_2 = document.createElement("div");
// divContentMenu.appendChild(divItem_2);
// divItem_2.innerText = "Item 2";
// divItem_2.style.width = "100%";
// divItem_2.style.background = "blue";
//
// let divItem_3 = document.createElement("div");
// divContentMenu.appendChild(divItem_3);
// divItem_3.innerText = "Item 2";
// divItem_3.style.width = "100%";
// divItem_3.style.background = "white";
//
// button.onclick = function () {
//     divContentMenu.classList.toggle("display");
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body
// let coments = [
//     {name: "John", body: "bad"},
//     {name: "Alex", body: "good"},
//     {name: "Robin", body: "impossible"},
//     {name: "Jack", body: "cool"}
// ];
//
// for (let coment of coments) {
//     let div = document.createElement("div");
//     document.body.appendChild(div);
//     div.style.display = "flex";
//
//     let p_1 = document.createElement("p");
//     div.appendChild(p_1);
//     p_1.innerText = `Name: ${coment.name}`
//
//     let p_2 = document.createElement("p");
//     div.appendChild(p_2);
//     p_2.innerText = `Coment: ${coment.body}`;
//     p_2.style.marginLeft = "20px";
//
//     let button = document.createElement("button");
//     div.appendChild(button);
//     button.style.marginLeft = "10px";
//     button.innerText = "hide/show coment";
//     button.style.marginTop = "50px";
//
//     button.onclick = function () {
//         p_2.classList.toggle("display");
//     }
// }
