export default class BookstoreService {
    books = [
        {
            id: 1,
            title: 'Shaurma',
            author: 'Ashot',
            price: 234,
            coverImage: 'https://cdn.eksmo.ru/v2/ITD000000000256217/COVER/cover3d1.jpg'
        },
        {
            id: 2,
            title: 'Never meet again',
            author: 'SomeBody',
            price: 432,
            coverImage: 'https://im0-tub-ru.yandex.net/i?id=4d1b6559dd94549654e13e598c391d12&n=13'
        }
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(
                ()=> {
                    resolve(this.books)
                    //reject(new Error('somedhting wrong@'))
                },
                700
            )
        })
    }
}