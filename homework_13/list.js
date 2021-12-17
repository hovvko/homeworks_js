// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let getLocalStorageArr = localStorage.getItem("productArr");
let productsArr = JSON.parse(getLocalStorageArr);

for (let productsArrElement of productsArr) {
    let divMain = document.createElement("div");
    document.body.appendChild(divMain);
    divMain.classList.add("styleD");

    let pNameProduct = document.createElement("p");
    divMain.appendChild(pNameProduct);
    pNameProduct.innerText = `Назва продукту: ${productsArrElement.nameProduct}`;

    let pAmountProduct = document.createElement("p");
    divMain.appendChild(pAmountProduct);
    pAmountProduct.innerText = `Кількість продукту: ${productsArrElement.amountProduct}`;

    let pPriceProduct = document.createElement("p");
    divMain.appendChild(pPriceProduct);
    pPriceProduct.innerText = `Ціна продукту: ${productsArrElement.priceProduct}`;

    let img = document.createElement("img");
    divMain.appendChild(img);
    img.src = productsArrElement.imageLink;
    img.style.width = "300px";

    let buttonDeleteProduct = document.createElement("button");
    divMain.appendChild(buttonDeleteProduct);
    buttonDeleteProduct.innerText = "ВИДАЛИТИ ПРОДУКТ";
    buttonDeleteProduct.style.marginLeft = "100px";
    buttonDeleteProduct.style.marginBottom = "20px";

    buttonDeleteProduct.onclick = function () {
        window.location.reload();
        let indexOf = productsArr.indexOf(productsArrElement);
        productsArr.splice(indexOf,1);
        localStorage.setItem("productArr", JSON.stringify(productsArr));
    }
}

let buttonDeleteAllProducts = document.createElement("button");
document.body.appendChild(buttonDeleteAllProducts);
buttonDeleteAllProducts.innerText = "ВИДАЛИТИ ВСІ ПРОДУКТИ";
buttonDeleteAllProducts.style.marginTop = "20px";
buttonDeleteAllProducts.style.marginBottom = "20px";

buttonDeleteAllProducts.onclick = function () {
    localStorage.setItem("productArr", JSON.stringify([]));
    window.location.reload();
}


