// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let comments = JSON.parse (localStorage.getItem('postDetails'));
console.log(comments);
let commentsId = (comments)

fetch(`https://jsonplaceholder.typicode.com/posts/${commentsId}/comments`)
    .then(value => value.json())
    .then(value => {
        for (let comment of value) {
            let div = document.createElement('div');
            div.classList.add('comment_div');

            let postId = document.createElement('div');
            postId.innerText = `Post ID : ${comment.postId}`;

            let id = document.createElement('div');
            id.innerText = `ID : ${comment.id}`;

            let name = document.createElement('div');
            name.innerText = `Name : ${comment.name}`;

            let email = document.createElement('div');
            email.innerText = `Email : ${comment.email}`;

            let body = document.createElement('div');
            body.innerText = `Body : ${comment.body}`;
            body.classList.add('body')

            div.append(postId, id, name, email, body);

            document.body.appendChild(div)
        }
    })