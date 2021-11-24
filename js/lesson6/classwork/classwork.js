// Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let name = (string, symbol) => {
//     let array = [];
//     if (string.includes(symbol)) {
//         let temp = string.split(symbol)
//         temp.forEach(item => { if (item) array.push(item); })
//         console.log(array.join(' '))
//     }
// }
// name(n2, '-');

// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100
// function generateRandom(){
//     let arr = []
//     for (let i = 0; i < 10; i++)
//         arr.push(Math.round(Math.random() * 100))
//     return arr
// }

// Відсортувати його за допомоги sort
// let array = generateRandom().sort()
// console.log(array)

// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let array1 = generateRandom()
// array1 = array1.filter(value => value % 2 === 0)
// console.log(array1)

// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array2 = generateRandom()
// array2 = array2.map(item => item + '')
// console.log(array2)

// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// function sortNums(direction, array){
//     array.sort((a, b) => a - b);
//     if (direction === 'descending')
//         array.reverse() //array.sort((a, b) => b - a);
//     console.log(array)
// }
// let nums = [11,21,3]
// sortNums('ascending', nums) // [3,11,21]
// sortNums('descending', nums) // [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// function sortByMonth(array){
//     array.sort((a, b) => b.monthDuration - a.monthDuration)
//     console.log(array)
// }
// function filterMoreThanFive(array){
//     return array.filter(item => item.monthDuration > 5)
// }
// sortByMonth(coursesAndDurationArray)
// console.log(filterMoreThanFive(coursesAndDurationArray))

// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// function cutString(str, size){
//     let chunks = []
//     while (str.length !== 0) {
//         chunks.push(str.substr(0, size))
//         str = str.substr(size)
//     }
//     console.log(chunks)
// }
// cutString("насолода", 3)