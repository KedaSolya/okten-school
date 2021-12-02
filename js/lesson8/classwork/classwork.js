// Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header
// const mainHeader = document.getElementById('main_header')
// mainHeader.classList.add('sep-2021')

// b) робить шириниу елементу ul 400px
// const ulWidth = document.getElementsByTagName('ul')
// for (const ulWidthElement of ulWidth)
//     ulWidthElement.style.width = '400px'

// c) робить ширину всіх елементів з класом linkList шириною 50%
// const linkList = document.getElementsByClassName('linkList')
// for (const linkListElement of linkList)
//     linkListElement.style.width = '50%'

// d) отримує текст який зберігається в елементі з класом listElement2
// const listText = document.querySelector('.listElement2').innerText

// e) отримує всі елементи li та змінює ім колір фону на сірий
// const liColor = document.getElementsByTagName('li')
// for (const element of liColor)
//     element.style.backgroundColor = 'gray'

// f) отримує всі елементи 'a' та додає їм клас anchor
// const aArray = document.getElementsByTagName('a')
// for (const aElement of aArray)
//     aElement.classList.add('anchor')

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const aArray = document.getElementsByTagName('a')
// for (const aElement of aArray)
//     if (aElement.innerText === 'link3')
//         aElement.style.fontSize = '40px'

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const arrA = document.getElementsByTagName('a')
// for (const arrElement of arrA)
//     arrElement.classList.add(`element_${arrElement.innerText}`)

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subHeader = document.getElementsByClassName('sub-header')
// const input = prompt('Input color:')
// for (const element of subHeader)
//     element.style.backgroundColor = `${input}`

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const subHeader = document.getElementsByClassName('sub-header')
// const input = prompt('Input color:')
// for (const element of subHeader)
//     if (element.innerText === 'content 2 segment')
//         element.style.color = `${input}`

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const content = document.querySelector('.content_1')
// const input = prompt('Input text:')
// content.innerText = `${input}`

// l) отримати елементи p та змінити їм padding на 20px
// const pElements = document.getElementsByTagName('p')
// for (const pElement of pElements)
//     pElement.style.padding = '20px'

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const text = document.querySelector('.text2')
// text.innerText = 'sep-2021'