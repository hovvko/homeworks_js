//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
//     response.json())
//     .then((json) => {
//         for (let jsonElement of json) {
//             let userId = {/** @param jsonElement.userId **/}
//
//             let div = document.createElement("div");
//             document.body.appendChild(div);
//             div.classList.add("post");
//
//             let pUserId = document.createElement("p");
//             div.appendChild(pUserId);
//             pUserId.classList.add("styleP");
//             pUserId.style.marginLeft = "0";
//             pUserId.innerText =`User Id: ${jsonElement.userId}`;
//
//             let pId = document.createElement("p");
//             div.appendChild(pId);
//             pId.classList.add("styleP");
//             pId.innerText =`Id: ${jsonElement.id}`;
//
//             let pTitle = document.createElement("p");
//             div.appendChild(pTitle);
//             pTitle.classList.add("styleP");
//             pTitle.innerText =`Title: ${jsonElement.title}`;
//
//             let pBody = document.createElement("p");
//             div.appendChild(pBody);
//             pBody.classList.add("styleP");
//             pBody.innerText =`Body: ${jsonElement.body}`;
//         }
//     })


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
//     response.json().then((json) => {
//         for (let jsonElement of json) {
//             let postId = {/** @param jsonElement.postId **/}
//
//             let div = document.createElement("div");
//             document.body.appendChild(div);
//             div.classList.add("comment");
//
//             let pPostId = document.createElement("p");
//             div.appendChild(pPostId);
//             pPostId.innerText = `Post id: ${jsonElement.postId}`
//
//             let pId = document.createElement("p");
//             div.appendChild(pId);
//             pId.innerText = `Id: ${jsonElement.id}`
//
//             let pName = document.createElement("p");
//             div.appendChild(pName);
//             pName.innerText = `Name: ${jsonElement.name}`
//
//             let pEmail = document.createElement("p");
//             div.appendChild(pEmail);
//             pEmail.innerText = `Email: ${jsonElement.email}`
//
//             let pBody = document.createElement("p");
//             div.appendChild(pBody);
//             pBody.innerText = `Body: ${jsonElement.body}`
//
//         }
//     })
// )