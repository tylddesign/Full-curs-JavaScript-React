// console.log(document.head);
// console.log(document.documentElement); // вся html
// console.log(document.body.childNodes); // показывает узлы, которые дочерние у body.Получаем псевдомассив (колекцию)
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode); // родительская нода
// console.log(document.querySelector('#current').parentNode.parentNode); // родитель родителя
// console.log(document.querySelector('[data-current="3"]')); // селектор по атрибуту
// console.log(document.querySelector('[data-current="3"]').nextSibling); // получить следующую ноду за элементом
// console.log(document.querySelector('[data-current="3"]').previousSibling); // получить предыдущую ноду перед элементом


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}