// Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
// const str1 = 'hello world', str2 = 'lorem ipsum', str3 = 'javascript is cool'
// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)

// Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
// const str1 = 'hello world', str2 = 'lorem ipsum', str3 = 'javascript is cool'
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())

// Перевести до нижнього регістру наступні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// const str1 = 'HELLO WORLD', str2 = 'LOREM IPSUM', str3 = 'JAVASCRIPT IS COOL'
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())

//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim())

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// function stringToarray(str){
//     return str.split(' ')
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);

//Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// function delete_characters(str, n){
//     return str.slice(0, n)      // return str.substr(0, n)
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

//Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// function insert_dash(str){
//     return str.replaceAll(' ', '-').toUpperCase()
// }
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str));

//Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// function firstCharToUp(str){
//     return str.replace(str[0], str[0].toUpperCase())
// }

//Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// function capitalize(str){
//     let splitStr = str.split(' ');
//     for (let i = 0; i < splitStr.length; i++)
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
//     return splitStr.join(' ');
// }
// document.write(capitalize("hello my dear friend!"));
