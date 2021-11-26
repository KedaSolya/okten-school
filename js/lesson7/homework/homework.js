// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const objArray = [
//     new User(4, 'Homer', 'Simpson', 'homer_simpson@gmail.com', '+380871629387'),
//     new User(7, 'Marge', 'Simpson', 'marge_simpson@gmail.com', '+380871649387'),
//     new User(1, 'Bart', 'Simpson', 'bart_simpson@gmail.com', '+380873229387'),
//     new User(2, 'Lisa', 'Simpson', 'lisa_simpson@gmail.com', '+380871629309'),
//     new User(8, 'Maggie', 'Simpson', 'maggie_simpson@gmail.com', '+380871627387'),
//     new User(6, 'Montgomery', 'Berns', 'montgomery_berns@gmail.com', '+380654429387'),
//     new User(3, 'Vailon', 'Smisers', 'vailon_smisers@gmail.com', '+380871629123'),
//     new User(9, 'Seimur', 'Skinner', 'seimur_skinner@gmail.com', '+380871009387'),
//     new User(5, 'Patty', 'Buvye', 'patty_buvye@gmail.com', '+380871629227'),
//     new User(10, 'Selma', 'Buvye', 'selma_buvye@gmail.com', '+380971629387')
// ]

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(objArray.filter(item => item.id % 2 === 0))

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(objArray.sort((a, b) => a.id - b.id))

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const clientsArray = [
//     new Client(4, 'Homer', 'Simpson', 'homer_simpson@gmail.com', '+380871629387', ['coat', 'hat']),
//     new Client(7, 'Marge', 'Simpson', 'marge_simpson@gmail.com', '+380871649387', ['bag', 'glasses']),
//     new Client(1, 'Bart', 'Simpson', 'bart_simpson@gmail.com', '+380873229387', ['jumper', 'scarf', 'trousers']),
//     new Client(2, 'Lisa', 'Simpson', 'lisa_simpson@gmail.com', '+380871629309', ['trainers']),
//     new Client(8, 'Maggie', 'Simpson', 'maggie_simpson@gmail.com', '+380871627387', ['gloves', 'socks']),
//     new Client(6, 'Montgomery', 'Berns', 'montgomery_berns@gmail.com', '+380654429387', ['jacket', 'T-shirt', 'skirt']),
//     new Client(3, 'Vailon', 'Smisers', 'vailon_smisers@gmail.com', '+380871629123', ['blanket']),
//     new Client(9, 'Seimur', 'Skinner', 'seimur_skinner@gmail.com', '+380871009387', ['scarf', 'gloves', 'hat', 'coat']),
//     new Client(5, 'Patty', 'Buvye', 'patty_buvye@gmail.com', '+380871629227', ['top', 'shirt', 'bag']),
//     new Client(10, 'Selma', 'Buvye', 'selma_buvye@gmail.com', '+380971629387', ['socks', 'sweater'])
// ]

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clientsArray.sort((a, b) => a.order.length - b.order.length))