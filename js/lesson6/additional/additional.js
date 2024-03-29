// Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
//  - данні до знака равлика(@),
//  - наявність равлика,
//  - крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//  - функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// function emailValidator(str){
//     let array = str.split('@')
//     let array1 = array[1].split('.')
//     if (array[0] === "" || array[0].includes('.') || array1[0].length <= 2)
//         console.log("Email is invalid!")
//     else console.log("Email - " + str + " - is valid")
// }
// emailValidator('someemail@gmail.com')
// emailValidator('someeMAIL@gmail.com')
// emailValidator('someeMAIL@i.ua')
// emailValidator('some.email@gmail.com')

// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// coursesArray.sort((a, b) => b.modules.length - a.modules.length)

// Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// function count(str, stringsearch){
//     let count = 0
//     for (let i = 0; i < str.length; i++)
//         if (str[i].includes(stringsearch))
//             count++
//     return count
// }
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// function cutString(str, n){
//     let newArr = []
//     let array = str.split(" ")
//     for (let i = 0, k = 0; i < n; i++, k++)
//         newArr[k] = array[i]
//     return newArr.join(' ')
// }
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'