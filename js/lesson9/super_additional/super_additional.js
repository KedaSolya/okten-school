// let users = [
//     {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//     },
//     {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//     },
//     {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//     },
//     {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//     },
//     {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//     },
//     {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//     },
//     {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//     },
//     {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//     },
//     {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//     },
//     {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//     },
//     {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//     }
// ];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let personAddresses = [];
// users.forEach(person => personAddresses.push(person.address));
// console.log(personAddresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
//  let container = document.createElement("div");
//  users.forEach(person => {
//  let personCard = document.createElement("div");
//  personCard.innerHTML = `
//         <p>name: ${person.name}</p>
//         <p>age: ${person.age}</p>
//         <p>status: ${person.status}</p>`;
//   container.style.display = "flex";
//   container.style.flexWrap = "wrap";
//   personCard.style.border = "1px solid red";
//   personCard.style.minWidth = "fit-content";
//   personCard.style.padding = "10px";
//   personCard.style.margin = "10px";
//   for (const users in person.address) {
//       let pElem = document.createElement("p");
//       pElem.innerText = `${users} : ${person.address[users]}`;
//       personCard.appendChild(pElem);
//   }
//   container.appendChild(personCard);
//   document.body.appendChild(container);
// });

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// let wrapper = document.createElement("div");
// users.forEach(users => {
//     let personCard = document.createElement("div");
//     let extruder = (object) => {
//         for (const element in object) {
//             if (typeof object[element] == "object") extruder(object[element]);
//             else {
//                 let div = document.createElement("div");
//                 div.innerHTML = `${element} - ${object[element]}`;
//                 personCard.appendChild(div);
//             }
//         }
//     }
//     wrapper.appendChild(personCard);
//     return extruder(users);
// });
// document.body.appendChild(wrapper);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
// users.forEach(person => {
//     let userCard = document.createElement("div");
//     for (const personKey in person) {
//         let div = document.createElement("div");
//         if (!(typeof person[personKey] === "object")) div.innerText=`${personKey} - ${person[personKey]}`
//         else {
//             for (const element in person[personKey]) {
//                 let addressItem = document.createElement("div");
//                 for (const elementKey in person[personKey])
//                     addressItem.innerText = `${element} - ${person[personKey][element]}`;
//                 div.appendChild(addressItem);
//             }
//         }
//         userCard.appendChild(div);
//     }
//     document.body.appendChild(userCard);
// });

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let content = document.getElementById("content");
// let elements = document.body.querySelectorAll("h2,p");
// let ul = document.createElement("ul");
// elements.forEach(element => {
//     let li = document.createElement("li");
//     li.innerText = `${element.textContent}`
//     ul.append(li);
// });
// content.appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//  При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//  Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// let wrapper = document.createElement("div");
// rules.forEach(element => {
//     let title = document.createElement("h2");
//     let text = document.createElement("p");
//     let div = document.createElement("div");
//     title.innerText=`${element.title}`;
//     text.innerText=`${element.body}`;
//     wrapper.appendChild(div);
//     div.append(title,text)
// });
// document.body.appendChild(wrapper);
// wrapper.setAttribute("id","content");