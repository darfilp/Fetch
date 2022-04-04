
const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            sendData('https://jsonplaceholder.typicode.com/posts', data)
                .then(response => response.json())
                .then(data => console.log('Отправлено', data))
                .catch(error => {
                    console.log('Ошибка отправки данных');
                });
        })
        .catch(error => console.log('Ошибка получения данных'));
};

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
};

getData('./db.json');

