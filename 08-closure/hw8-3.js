// 3
/*  Создайте функцию, которая получает два аргумента: первый это массив объектов, второй - строка (имя автора).
Ваша функция должна возвращать количество сообщений с автором из аргумента функции и комментариев с тем же автором.*/

function getCountMassageAndComment(arrObj, authorName) {
    let comment = 0;

    let posts = arrObj.filter((obj) => {
        const findName = obj.author === authorName
        return findName
    }).length


    for (let i = 0; i < arrObj.length; i++){
        if (arrObj[i].comments){
            comment = arrObj[i].comments.filter((obj) => {
                const findName = obj.author === authorName
                return findName
            }).length
            comment = comment + i
            posts = posts + 1
        }
    }

    return { posts, comment }
}

let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            }, {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }]
    }, {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            },
            {
                id: 1.4,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }

        ]
    }, {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    }, {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]

console.log(getCountMassageAndComment(listOfPosts2, 'Rimus'));

module.exports = getCountMassageAndComment;