// 4 Вывести всю, без исключения, информацию про объект
// user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/${user.id}/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
let details = JSON.parse(localStorage.getItem('userDetails'));
console.log(details);
for (let detail of details) {
    let id = document.createElement('div');
    id.innerText = `ID : ${detail.id}`;
    let name = document.createElement('div');
    name.innerText = `Name : ${detail.name}`;
    let username = document.createElement('div');
    username.innerText = `Username : ${detail.username}`;
    let email = document.createElement('div');
    email.innerText = `Email : ${detail.email}`;
    let address = document.createElement('div');
    address.innerText = `\n ADDRESS: \n Street : ${detail.address.street} \n Suite : ${detail.address.suite} \n City : ${detail.address.city} \n Zipcode : ${detail.address.zipcode} \n ${detail.address.geo.lat} ${detail.address.geo.lng}`;
    let phone = document.createElement('div');
    phone.innerText = `Phone : ${detail.phone}`;
    let website = document.createElement('div');
    website.innerText = `Website : ${detail.website}`;
    let company = document.createElement('div');
    company.innerText = `\n COMPANY: \n Name: ${detail.company.name} \n Catch Phrase: ${detail.company.catchPhrase} \n bs: ${detail.company.bs}`;
    let button = document.createElement('button');
    button.innerText = 'post of current user';
    button.classList.add('button_title');
    button.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${detail.id}/posts`)
            .then(value => value.json())
            .then(value => {
                for (let title of value) {
                    let div = document.createElement('div');
                    div.classList.add('button_item');
                    let item = document.createElement('div')
                    item.innerText = title.title;
                    item.classList.add('button_body');
                    let postButton = document.createElement('button');
                    postButton.innerText = `see more`;
                    postButton.classList.add('button_post');
                    postButton.onclick = function () {
                        let postDetails = JSON.parse(localStorage.getItem('postDetails')) || [];
                        postDetails.push(`${title.id}`);
                        localStorage.setItem('postDetails', JSON.stringify(postDetails));
                        location.href = `post-details.html`;
                    }
                    div.append(item, postButton)
                    button.appendChild(div)
                }
            })
    };
    document.body.append(id, name, username, email, address, phone, website, company, button);
}