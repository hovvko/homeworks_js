//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
//     response.json().then((json) => {
//
//         let commentArr = [];
//
//         for (let jsonElement of json) {
//             let userId = {/** @param jsonElement.userId **/}
//
//             let div = document.createElement("div");
//             document.body.appendChild(div);
//             div.classList.add("comment");
//
//             let pUserId = document.createElement("p");
//             div.appendChild(pUserId);
//             pUserId.innerText = `User id: ${jsonElement.userId}`;
//
//             let pId = document.createElement("p");
//             div.appendChild(pId);
//             pId.innerText = `Id: ${jsonElement.id}`;
//
//             let pTitle = document.createElement("p");
//             div.appendChild(pTitle);
//             pTitle.innerText = `Title: ${jsonElement.title}`;
//
//             let pBody = document.createElement("p");
//             div.appendChild(pBody);
//             pBody.innerText = `Body: ${jsonElement.body}`;
//
//             let button = document.createElement("button");
//             div.appendChild(button);
//             button.innerText = "ADD TO COMMENTS";
//             button.style.marginBottom = "20px";
//
//             button.onclick = function (e) {
//                 e.preventDefault();
//                 commentArr.push(jsonElement.body)
//                 localStorage.setItem("comments", JSON.stringify(commentArr));
//             }
//         }
//     })
// )//Всі записані body-коментарі знаходяться в comments.html

