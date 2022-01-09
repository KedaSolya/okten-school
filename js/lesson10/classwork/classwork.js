// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let formF1 = document.forms.formF1;
// let formF2 = document.forms.formF2;
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// btn1.addEventListener("click", function (e) {
//     console.log(formF1.inpF1.value);
//     console.log(formF1.inpF2.value);
//     console.log("------------");
// });
// btn2.addEventListener("click", function (e) {
//     console.log(formF2.inpF11.value);
//     console.log(formF2.inpF22.value);
// });

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// let inputs = document.forms.table;
// let button = document.getElementById("btn");
// button.addEventListener("click", function () {
//     let table = document.createElement("table");
//         let th = document.createElement("caption");
// table.appendChild(th);
// th.innerText="FORM";
//     let row = inputs.rows.value;
//     let text = inputs.text.value;
//     while (row) {
//         let tr = document.createElement("tr");
//         table.appendChild(tr);
//         row--
//         let col = inputs.cols.value;
//         while (col) {
//             let td = document.createElement("td");
//             tr.appendChild(td);
//             td.innerText = `${text}`;
//             col--
//         }
//     }
//     document.body.appendChild(table);
// });
//

// (Додаткова частина для завдання)
// - Сворити масив не цензцрних слів.
// let badWords = ["an asshole", "loser", "pussyMan", "dumb", "idiot", "nerd", "volandemort", "Lanny Grehhem", "bananaaaa"];
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// document.getElementById('btn').onclick = function () {
//     let sentence = document.getElementById('inpValue');
//     badWords.forEach(word => {
//         sentence.value.includes(word)
//             ? alert(`array includes this word - ${sentence.value}`)
//             : console.log("any bad word")
//     })
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// document.getElementById('btn').onclick = function () {
//     let sentence = document.getElementById('inpValue');
//     let splitedSentence = sentence.value.split(" ");
//     if (sentence.value) {
//         splitedSentence.forEach(word => {
//             badWords.forEach(badWord => {
//                 if (badWord === word) {
//                     alert(`sentence includes the same word in array - ${word}`);
//                 }
//                 console.log("i don`t found any word");
//             });
//         });
//     }
// }