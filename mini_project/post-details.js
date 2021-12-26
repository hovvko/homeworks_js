// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let arrPostInfoStringify = localStorage.getItem("PostInfo");
let arrPostInfo = JSON.parse(arrPostInfoStringify);

let userId = {/** @param jsonElement.userId **/};

let postId = {/** @param jsonElement.postId **/};

let number = 0;

let h1Header = document.createElement("h1");
document.body.appendChild(h1Header);
h1Header.innerText = "All post of chosen user:";

for (let arrPostInfoElement of arrPostInfo) {
    let mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    mainDiv.classList.add("styleD");

    let pUserId = document.createElement("p");
    mainDiv.appendChild(pUserId)
    pUserId.innerText = `User Id: ${arrPostInfoElement.userId}`;

    let pId = document.createElement("p");
    mainDiv.appendChild(pId)
    pId.innerText = `Id: ${arrPostInfoElement.id}`;

    let pTitle = document.createElement("p");
    mainDiv.appendChild(pTitle)
    pTitle.innerText = `Title: ${arrPostInfoElement.title}`;

    let pBody = document.createElement("p");
    mainDiv.appendChild(pBody)
    pBody.innerText = `Body: ${arrPostInfoElement.body}`;

    fetch(`https://jsonplaceholder.typicode.com/posts/${arrPostInfoElement.id}/comments`).then(response => {
        response.json().then(json => {
            let h2Comment = document.createElement("h2");
            document.body.appendChild(h2Comment);
            h2Comment.innerText = `Comment ${number++}:`;

            let divComment = document.createElement("div");
            document.body.appendChild(divComment);
            divComment.classList.add("styleD");

            for (let jsonElement of json) {
                let pPostId = document.createElement("p");
                divComment.appendChild(pPostId);
                pPostId.innerText = `Post id: ${jsonElement.postId}`;

                let pId = document.createElement("p");
                divComment.appendChild(pId);
                pId.innerText = `Id: ${jsonElement.id}`;

                let pName = document.createElement("p");
                divComment.appendChild(pName);
                pName.innerText = `Name: ${jsonElement.name}`;

                let pEmail = document.createElement("p");
                divComment.appendChild(pEmail);
                pEmail.innerText = `Email: ${jsonElement.email}`;

                let pBody = document.createElement("p");
                divComment.appendChild(pBody);
                pBody.innerText = `Body: ${jsonElement.body}`;
            }
        })
    })
}
