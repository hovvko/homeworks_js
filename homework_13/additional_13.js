//- Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let form = document.createElement("form");
document.body.appendChild(form);

let inputNameProduct = document.createElement("input");
form.appendChild(inputNameProduct);
inputNameProduct.placeholder = "Name Product";

let inputAmountProduct = document.createElement("input");
form.appendChild(inputAmountProduct);
inputAmountProduct.placeholder = "Amount Product";

let inputPriceProduct = document.createElement("input");
form.appendChild(inputPriceProduct);
inputPriceProduct.placeholder = "Price Product";

let inputImageProduct = document.createElement("input");
form.appendChild(inputImageProduct);
inputImageProduct.placeholder = "Image Product";

let buttonSave = document.createElement("button");
form.appendChild(buttonSave);
buttonSave.innerText = "SAVE";

let arrProducts = [];

buttonSave.onclick = function (e) {
    e.preventDefault()
    arrProducts.push({nameProduct: inputNameProduct.value, amountProduct: inputAmountProduct.value, priceProduct: inputPriceProduct.value, imageLink: inputImageProduct.value});
    localStorage.setItem("productArr", JSON.stringify(arrProducts));
}

let a = document.createElement("a");
document.body.appendChild(a);
a.href = "list.html";
a.innerText = "На сторінку товарів";
a.style.fontSize = "22px";

let divButtons = document.createElement("div");
document.body.appendChild(divButtons);

let h1 = document.createElement("h1");
divButtons.appendChild(h1);
h1.innerText = "Натиснувши на кнопку можна автоматично додати інформацію в інпути, та натиснувши на кнопку SAVE зберегти!"

let buttonPineapple = document.createElement("button");
divButtons.appendChild(buttonPineapple);
buttonPineapple.innerText = "ДОДАТИ АНАНАС";


buttonPineapple.onclick = function (e) {
    e.preventDefault();
    inputNameProduct.value = "Ананас";
    inputAmountProduct.value = "3";
    inputPriceProduct.value = "75";
    inputImageProduct.value = "https://img2.zakaz.ua/upload.version_1.0.2d0c3ede2536765246ff4e7d5c8dcf60.1350x1350.jpeg";
}

let buttonBanana = document.createElement("button");
divButtons.appendChild(buttonBanana);
buttonBanana.innerText = "ДОДАТИ БАНАН";
buttonBanana.style.marginLeft = "50px";

buttonBanana.onclick = function (e) {
    e.preventDefault();
    inputNameProduct.value = "Банан";
    inputAmountProduct.value = "1";
    inputPriceProduct.value = "15";
    inputImageProduct.value = "https://img3.zakaz.ua/src.1597935465.ad72436478c_2020-08-20_Alina/src.1597935465.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg";
}


let buttonCocos = document.createElement("button");
divButtons.appendChild(buttonCocos);
buttonCocos.innerText = "ДОДАТИ КОКОС";
buttonCocos.style.marginLeft = "50px";

buttonCocos.onclick = function (e) {
    e.preventDefault();
    inputNameProduct.value = "Кокос";
    inputAmountProduct.value = "2";
    inputPriceProduct.value = "100";
    inputImageProduct.value = "https://us.123rf.com/450wm/utima/utima1912/utima191200005/135402696-coco-coconut-half-and-piece-isolated-cocos-white-full-depth-of-field-.jpg?ver=6";
}


let buttonPotato = document.createElement("button");
divButtons.appendChild(buttonPotato);
buttonPotato.innerText = "ДОДАТИ КАРТОПЛЮ";
buttonPotato.style.marginLeft = "50px";

buttonPotato.onclick = function (e) {
    e.preventDefault();
    inputNameProduct.value = "Картопля";
    inputAmountProduct.value = "100";
    inputPriceProduct.value = "200";
    inputImageProduct.value = "https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg";
}


let buttonCarrot = document.createElement("button");
divButtons.appendChild(buttonCarrot);
buttonCarrot.innerText = "ДОДАТИ МОРКВУ";
buttonCarrot.style.marginLeft = "50px";

buttonCarrot.onclick = function (e) {
    e.preventDefault();
    inputNameProduct.value = "Морква";
    inputAmountProduct.value = "5";
    inputPriceProduct.value = "35";
    inputImageProduct.value = "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg";
}
























