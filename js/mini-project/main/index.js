// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку ,
// при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
let users = document.getElementsByClassName('users') [0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (let user of value) {
            let div = document.createElement('div');
            div.classList.add('user');
            let id = document.createElement('div');
            id.innerText = `ID - ${user.id}`;
            let name = document.createElement('div');
            name.innerText = user.name;
            let button = document.createElement('button');
            button.innerText = `submit`;
            button.classList.add('btn');
            button.onclick = function () {
                let userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
                userDetails.push(user);
                localStorage.setItem('userDetails', JSON.stringify(userDetails));
                location.href = `user-details.html`;
            }
            div.append(id, name, button)
            users.appendChild(div)
        }
    })