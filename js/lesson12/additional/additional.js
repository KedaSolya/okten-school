// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста.
// let wrap = document.createElement("div");
// document.body.appendChild(wrap);
// wrap.classList.add("wrap");
// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)
//     .then(response => response.json())
//     .then(data => data.map(user => {
//         let userCard = document.createElement("div");
//         let userPost = document.createElement("div");
//         let userComment = document.createElement("div");
//         userCard.classList.add("userCard");
//         userPost.classList.add("userPost");
//         userComment.classList.add("userComment");
//         let showInfo = document.createElement("button");
//         let userId = document.createElement("p");
//         let userEmail = document.createElement("p");
//         let name = document.createElement("p");
//         let userName = document.createElement("p");
//         name.innerText = `name: ${user.name}`;
//         userName.innerText = `userName: ${user.username}`;
//         userEmail.innerText = `userEmail: ${user.email}`;
//         userId.innerText = `userId: ${user.id}`;
//         showInfo.innerText = "show";
//         showInfo.classList.add("showInfo");
//         userPost.classList.add("close");
//         userComment.classList.add("close");
//         showInfo.onclick = () => {
//             userPost.innerText = "";
//             showInfo.classList.toggle("active");
//             userPost.classList.toggle("close");
//             const url = `https://jsonplaceholder.typicode.com/users/${user.id}/posts`;
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => data.map(post => {
//                     let userPostBlock = document.createElement("div");
//                     let userPostId = document.createElement("p");
//                     let postId = document.createElement("p");
//                     let title = document.createElement("p");
//                     let body = document.createElement("p");
//                     let showComment = document.createElement("button");
//                     userId.innerText = `userId: ${post.userId}`;
//                     postId.innerText = `postId: ${post.id}`;
//                     title.innerText = `title: ${post.title}`;
//                     body.innerText = `body: ${post.body}`;
//                     showComment.innerText = "more";
//                     showComment.classList.add("showComment");
//                     userPostBlock.classList.add("userPostBlock");
//                     userPostBlock.append(userPostId, postId, title, body, showComment);
//                     userPost.append(userPostBlock);
//                     showComment.onclick = () => {
//                         userComment.innerHTML = "";
//                         showComment.classList.toggle("active");
//                         userComment.classList.toggle("close");
//                         const url = `https://jsonplaceholder.typicode.com/users/${post.userId}/comments`;
//                         fetch(url)
//                             .then(response => response.json())
//                             .then(data => data.map(comment => {
//
//                                 if (post.userId === comment.postId) {
//
//                                     let userCommentBlock = document.createElement("div");
//                                     let commentId = document.createElement("p");
//                                     let userCommentName = document.createElement("p");
//                                     let email = document.createElement("p");
//                                     let commentBody = document.createElement("p");
//
//                                     commentId.innerText = `commentId: ${comment.id}`;
//                                     userCommentName.innerText = `name: ${comment.name}`;
//                                     email.innerText = `email: ${comment.email}`;
//                                     commentBody.innerText = `body: ${comment.body}`;
//                                     userCommentBlock.classList.add("userCommentBlock");
//
//                                     userPostBlock.appendChild(userComment);
//                                     userCommentBlock.append(commentId, userCommentName, email, commentBody);
//                                     userComment.appendChild(userCommentBlock);
//                                 }
//                             }));
//                     }
//                 }));
//         }
//         userCard.append(name, userName, userId, userEmail, showInfo, userPost);
//         wrap.appendChild(userCard);
//     }));