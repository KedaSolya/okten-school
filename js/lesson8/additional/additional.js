// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
function reverse(body){
    let array = []
    if (body.children.length)
        for (const bodyChild of body.children)
            if (bodyChild.classList.length)
                for (const item of bodyChild.classList)
                    array.push(item)
            else reverse(bodyChild)
    if (array.length)
        console.log(array)
}
reverse(document.body)