// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// const div = document.createElement('div')
// div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// div.innerText = 'Hello!'
// div.style.backgroundColor = 'black'
// div.style.color = 'white'
// div.style.width = '40px'
// document.body.append(div)
// document.body.append(div.cloneNode(true))

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${course.title} ${course.monthDuration}`;
//     document.body.appendChild(divElement);
// }
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add("item");
//     let h1 = document.createElement('h1');
//     h1.innerText = course.title;
//     h1.classList.add("heading");
//     let p = document.createElement('p');
//     p.innerText = course.monthDuration;
//     p.classList.add("description");
//     divElement.appendChild(h1);
//     divElement.appendChild(p);
//     document.body.appendChild(divElement);
// }