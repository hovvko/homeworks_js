// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let favorites = [];
//
// for (let user of users) {
//     let mainDiv = document.createElement("div");
//     document.body.appendChild(mainDiv);
//     mainDiv.style.display = "flex";
//
//     let pName = document.createElement("p");
//     mainDiv.appendChild(pName);
//     pName.innerText = (`Name: ${user.name}`);
//     pName.classList.add("styleP");
//
//     let pAge = document.createElement("p");
//     mainDiv.appendChild(pAge);
//     pAge.innerText = (`Age: ${user.age}`);
//     pAge.classList.add("styleP");
//
//
//     let pStatus = document.createElement("p");
//     mainDiv.appendChild(pStatus);
//     pStatus.innerText = (`Status: ${user.status}`);
//     pStatus.classList.add("styleP");
//
//     let button = document.createElement("button");
//     mainDiv.appendChild(button);
//     button.innerText = "ADD TO FAVORITES";
//     button.classList.add("styleButton");
//
//     button.onclick = function (e) {
//         e.preventDefault();
//         favorites.push({name: user.name, age: user.age, status: user.status});
//         localStorage.setItem("allUsers", JSON.stringify(favorites));
//     }
// }











