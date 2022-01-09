// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.getElementById("text");
// div.addEventListener('click', function () {
//  div.style.display='none';
// });

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement("button");
// document.body.appendChild(button);
// button.innerText="click";
// button.onclick = function (){
//     button.style.visibility='hidden';
//     console.log(1)
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
// let div = document.createElement("div");
// let forms = document.forms.f1;
// // console.log(forms.inputNum.value);
// forms.btn.addEventListener("click", function (e) {
//     let age = forms.inputNum.value;
//     e.preventDefault();
//     age < 18
//         ? div.innerText = ` ваш вік: ${forms.inputNum.value}, нажаль Вам відмовлено в доступі`
//         : div.innerText = "Welcome"
// });
// document.body.appendChild(div);


// - Создайте меню, которое раскрывается/сворачивается при клике
// let dropList = document.getElementById("dropList");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function (ev) {
//     ev.preventDefault();
//     dropList.classList.toggle("close");
// });
// let comments = [
//     {title: 'lorem-1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem-2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem-3', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem-4', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem-5', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem-5', body: 'lorem ipsum dolo sit ameti'}
// ];

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
// let wrapper = document.createElement("div");
// document.body.appendChild(wrapper);
// comments.forEach(item => {
//     let div = document.createElement("div");
//     let btn = document.createElement("button");
//     let title = document.createElement("h3");
//     let body = document.createElement("p");
//     title.innerHTML = `<b>title</b>: ${item.title}`;
//     body.innerHTML = `<b>body</b>: ${item.body}`;
//     btn.innerText = "toggle";
//     btn.addEventListener("click", function (e) {
//         body.classList.toggle("isShow");
//     });
//     btn.setAttribute("id","btn");
//     div.setAttribute("id","commentCard");
//     div.append(title,body,btn);
//     wrapper.appendChild(div);
// });