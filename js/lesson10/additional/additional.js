// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// elements.addEventListener("mousedown", function (ev) {
//     ev.preventDefault();
//     console.log(ev.target.localName+" " + "- attribute");
//     console.log("----------");
//     console.log(ev.target.className+" " + "- classes");
//     console.log(ev.target.id+ " " + "- id");
//     console.log("----------");
//     console.log(ev.target.offsetHeight+" " + "px - height");
//     console.log(ev.target.offsetWidth+" " + "px - width");
// });

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// elements.addEventListener("mousedown", function (ev) {
//     let popUpDiv = document.createElement("div");
//     ev.preventDefault();
//     let popUpTitle = document.createElement("h4");
//     let elemClass = document.createElement("p");
//     let elemId = document.createElement("p");
//     let elemSize = document.createElement("span");
//     popUpTitle.innerText=`${ev.target.nodeName} - attribute name`;
//     elemClass.innerText=`${ev.target.className} - classes name`;
//     elemId.innerText=`${ev.target.id} - id`;
//     elemSize.innerText=`heigth : ${ev.target.offsetHeight}px - width : ${ev.target.offsetWidth}px`;
//     popUpDiv.classList.add("popUpDiv");
//     popUpTitle.classList.add("popUpTitle");
//     elemId.classList.add("elemId");
//     elemSize.classList.add("elemSize");
//     ev.target.after(popUpDiv);
//     popUpDiv.append(popUpTitle, elemClass, elemId, elemSize);
// });

// взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// let statusInput = document.getElementById('status');
// let ageInput = document.getElementById('age');
// let cityInput = document.getElementById('city');
// let content = document.getElementById("content");
// let filter = document.getElementById("filter");
// let newArray = [];
// filter.onclick = function () {
//     // let newArray = JSON.parse(JSON.stringify(usersWithAddress)); //
//     if (statusInput.checked) newArray = newArray.filter(user => !user.status);
//     if (ageInput.checked) newArray = newArray.filter(user => user.age >= 29);
//     if (cityInput.checked) newArray = newArray.filter(user => user.address.city === 'Kyiv');
//     content.innerHTML = '';
//     content.appendChild(filterUsers(newArray));
// }
// function filterUsers(array) {
//     const wrap = document.createElement('div');
//     array.forEach(user => {
//         newArray.push(user);
//         const p = document.createElement('p');
//         p.innerHTML =
//             `<hr>
//          Ім'я: <b>${user.name}</b>
//          вік:  <b>${user.age}</b><br>
//          місто: <b>${user.address.city}</b><br>
//          статус: <b>${user.status}</b>`;
//         wrap.appendChild(p);
//     });
//     return wrap;
// }
// content.appendChild(filterUsers(usersWithAddress));