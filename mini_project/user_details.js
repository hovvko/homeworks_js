// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
let getLocalStringArr = localStorage.getItem("User");
let parseUserArr = JSON.parse(getLocalStringArr);

let arr = [];

function reCallObj (obj) {
    for (let objKey in obj) {
        if (typeof obj[objKey] === "object") {
            reCallObj(obj[objKey]);
        }
        else {
            arr.push(obj[objKey]);
        }
    }
}

reCallObj(parseUserArr);

let mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);
mainDiv.classList.add("styleD");

let pHeader = document.createElement("p");
mainDiv.appendChild(pHeader);
pHeader.innerHTML = "<h1>User Details:</h1>";

let pId = document.createElement("p");
mainDiv.appendChild(pId);
pId.innerText = `Id: ${arr[0]}`;

let pName = document.createElement("p");
mainDiv.appendChild(pName);
pName.innerText = `Name: ${arr[1]}`;

let pUserName = document.createElement("p");
mainDiv.appendChild(pUserName);
pUserName.innerText = `Username: ${arr[2]}`;

let pEmail = document.createElement("p");
mainDiv.appendChild(pEmail);
pEmail.innerText = `Email: ${arr[3]}`;

let pAddress = document.createElement("p");
mainDiv.appendChild(pAddress);
pAddress.innerHTML = "<h2>Address:</h2>";

let pStreet = document.createElement("p");
mainDiv.appendChild(pStreet);
pStreet.innerText = `Street: ${arr[4]}`;

let pSuite = document.createElement("p");
mainDiv.appendChild(pSuite);
pSuite.innerText = `Suite: ${arr[5]}`;

let pCity = document.createElement("p");
mainDiv.appendChild(pCity);
pCity.innerText = `City: ${arr[6]}`;

let pZipCode = document.createElement("p");
mainDiv.appendChild(pZipCode);
pZipCode.innerText = `Zip-Code: ${arr[7]}`;

let pGeo = document.createElement("p");
mainDiv.appendChild(pGeo);
pGeo.innerHTML = "<h3>Geo:</h3>";

let pLatitude = document.createElement("p");
mainDiv.appendChild(pLatitude);
pLatitude.innerText = `Latitude: ${arr[8]}`;

let pLongitude = document.createElement("p");
mainDiv.appendChild(pLongitude);
pLongitude.innerText = `Longitude: ${arr[9]}`;

let pContacts = document.createElement("p");
mainDiv.appendChild(pContacts);
pContacts.innerHTML = "<h4>Contacts:</h4>";

let pPhone = document.createElement("p");
mainDiv.appendChild(pPhone);
pPhone.innerText = `Phone: ${arr[10]}`;

let pWebSite = document.createElement("p");
mainDiv.appendChild(pWebSite);
pWebSite.innerText = `Website: ${arr[11]}`;

let pCompany = document.createElement("p");
mainDiv.appendChild(pCompany);
pCompany.innerHTML = "<h5>Company:</h5>";

let pCompanyName = document.createElement("p");
mainDiv.appendChild(pCompanyName);
pCompanyName.innerText = `Name: ${arr[12]}`;

let pCatchPhrase = document.createElement("p");
mainDiv.appendChild(pCatchPhrase);
pCatchPhrase.innerText = `Catch Phrase: ${arr[13]}`;

let pBs = document.createElement("p");
mainDiv.appendChild(pBs);
pBs.innerText = `Bs: ${arr[14]}`;

let buttonPostOfCurrentUser = document.createElement("button");
mainDiv.appendChild(buttonPostOfCurrentUser);
buttonPostOfCurrentUser.innerText = "Post Of Current User";
buttonPostOfCurrentUser.classList.add("styleButtonPostOfCurrentUser")

let number = 1;

buttonPostOfCurrentUser.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${arr[0]}/posts`).then(response => {
        response.json().then(json => {
            let h1 = document.createElement("h1");
            document.body.appendChild(h1);
            h1.innerText = "All titles:";

            let mDiv = document.createElement("div");
            document.body.appendChild(mDiv);
            mDiv.classList.add("mDivStyle")

            for (let jsonElement of json) {
                let divTitlePost = document.createElement("div");
                mDiv.appendChild(divTitlePost);
                divTitlePost.classList.add("styleD");
                divTitlePost.style.width = "19%";
                divTitlePost.style.position = "relative";
                divTitlePost.style.height = "170px";

                let pTitle = document.createElement("p");
                divTitlePost.appendChild(pTitle);
                pTitle.innerText = `Title ${number++}: ${jsonElement.title}`;

                let buttonGoToPost = document.createElement("button");
                divTitlePost.appendChild(buttonGoToPost);
                buttonGoToPost.innerText = "GO TO POST DETAILS";
                buttonGoToPost.classList.add("styleButtonPostOfCurrentUser")
                buttonGoToPost.style.position = "absolute";
                buttonGoToPost.style.bottom = "0";


                buttonGoToPost.onclick = function () {
                    location.href = "post-details.html";
                    localStorage.setItem("PostInfo", JSON.stringify(json));
                    localStorage.setItem("Title", JSON.stringify(jsonElement.title))
                }
            }
        })
    })
}







//
// buttonPostOfCurrentUser.onclick = function () {
//     fetch(`https://jsonplaceholder.typicode.com/users/${arr[0]}/posts`).then(response => {
//         response.json().then(json => {
//
//             let divTitlePost = document.createElement("div");
//             document.body.appendChild(divTitlePost);
//             divTitlePost.classList.add("styleD");
//
//             let h1Info = document.createElement("h1");
//             divTitlePost.appendChild(h1Info);
//             h1Info.innerText = "All Titles:"
//
//             for (let jsonElement of json) {
//                 let pTitle = document.createElement("p");
//                 divTitlePost.appendChild(pTitle);
//                 pTitle.innerText = `Title: ${jsonElement.title}`;
//             }
//
//             let buttonGoToPost = document.createElement("button");
//             divTitlePost.appendChild(buttonGoToPost);
//             buttonGoToPost.innerText = "GO TO POST DETAILS";
//             buttonGoToPost.classList.add("styleButtonPostOfCurrentUser")
//
//             buttonGoToPost.onclick = function () {
//                 location.href = "post-details.html";
//                 localStorage.setItem("PostInfo", JSON.stringify(json));
//             }
//         })
//     })
// }







