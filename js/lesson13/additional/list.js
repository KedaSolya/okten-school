let wrap = document.createElement("div");
wrap.classList.add("wrap");
document.body.appendChild(wrap);
let clear = document.getElementById("clearStorage");
clear["onclick"] = function () {
    localStorage.clear();
    location.reload();
}

let products = JSON.parse(localStorage.getItem("dataBase"));
for (const product of products) {

    let productCard = document.createElement("div");
    let productTitle = document.createElement("p");
    let count = document.createElement("p");
    let price = document.createElement("p");
    let imgPromo = document.createElement("img");
    let delItem = document.createElement("button");
    delItem.innerText = 'delete';

    productTitle.innerText = `name: ${product.name}`;
    count.innerText = `count: ${product.count}`;
    price.innerText = `price: ${product.price}`;
    imgPromo.src = product.img;
    delItem.onclick = function () {
        let newBase = JSON.parse(localStorage.getItem("dataBase"));
        newBase.splice(products.indexOf(product), 1);
        localStorage.setItem("dataBase", JSON.stringify(newBase));
        location.reload();
    }
    productCard.append(imgPromo, productTitle, count, price, delItem)
    wrap.appendChild(productCard);
}