// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

// варіант 1 (описати в різних класах)

// class Person{
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = new PersonAddress(street, suite, city, zipcode, lat, lng)
//         this.phone = phone;
//         this.website = website;
//         this.company = new PersonCompany(companyName, catchPhrase, bs)
//     }
// }
// class PersonAddress{
//     constructor(street, suite, city, zipcode, lat, lng) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = new AddressGeo(lat, lng);
//     }
// }
// class AddressGeo{
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
// class PersonCompany{
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }

// варіант 2 (описати в одному конструкторі)

// function Person(id, name, username, email, streetAddress, suiteAddress, cityAddress, zipcodeAddress, latGeo, lngGeo, phone, website, nameCompany, catchPhraseCompany, bsCompany){
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street : streetAddress,
//             suite : suiteAddress,
//             city : cityAddress,
//             zipcode : zipcodeAddress,
//             geo : {
//                 lat : latGeo,
//                 lng : lngGeo
//             }
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name : nameCompany,
//             catchPhrase : catchPhraseCompany,
//             bs : bsCompany
//         }
//
// }
// const obj = new Person(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556',
//     'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
//     'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')

// Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// function Tag (title, actionDescription, attributeArray){
//     this.title = title;
//     this.actionDescription = actionDescription;
//     this.attributeArray = attributeArray;
// }
// function Attribute (name, action){
//     this.name = name;
//     this.action = action;
// }
// const aAttributes = [
//     new Attribute('name', 'Устанавливает имя якоря внутри документа.'),
//     new Attribute('href', 'Задает адрес документа, на который следует перейти.')
// ]
// const a = new Tag('a', 'Тег a является одним из важных элементов HTML и предназначен для создания ссылок.', aAttributes)
// const divAttributes = [
//     new Attribute('align', 'Задает выравнивание содержимого тега div'),
//     new Attribute('title', 'Добавляет всплывающую подсказку к содержимому.')
// ]
// const div = new Tag('div', 'Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', divAttributes)
// const h1Attributes = [
//     new Attribute('align', 'Задает выравнивание заголовка'),
//     new Attribute('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.')
// ]
// const h1 = new Tag('h1', 'Тег h1 представляет собой наиболее важный заголовок первого уровня.', h1Attributes)
// const spanAttributes = [
//     new Attribute('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'),
//     new Attribute('contenteditable', 'Сообщает, что элемент доступен для редактирования пользователем.')
// ]
// const span = new Tag('span', 'Тег span предназначен для определения строчных элементов документа.', spanAttributes)
// const inputAttributes = [
//     new Attribute('required', 'Обязательное для заполнения поле.'),
//     new Attribute('checked', 'Предварительно активированный переключатель или флажок.')
// ]
// const input = new Tag('input', 'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', inputAttributes)
// const formAttributes = [
//     new Attribute('id', 'Уникальный идентификатор.')
// ]
// const form = new Tag('form', 'Тег form связывает поле с формой по её идентификатору.', formAttributes)
// const optionAttributes = [
//     new Attribute('label', 'Указание метки пункта списка.'),
//     new Attribute('selected', 'Заранее устанавливает определенный пункт списка выделенным.')
// ]
// const option = new Tag('option', 'Тег option определяет отдельные пункты списка', optionAttributes)
// const selectAttributes = [
//     new Attribute('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.'),
//     new Attribute('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.')
// ]
// const select = new Tag('select', 'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', selectAttributes)