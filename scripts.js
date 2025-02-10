// Функция для добавления новостей
document.getElementById('news-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить отправку формы

    // Получить значения из формы
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let imageFile = document.getElementById('image').files[0];

    // Проверка на заполнение формы
    if (title && description && imageFile) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let newsItem = document.createElement('div');
            newsItem.classList.add('article');

            // Создать картинку
            let img = document.createElement('img');
            img.src = e.target.result;

            // Добавить заголовок и описание
            let h2 = document.createElement('h2');
            h2.textContent = title;

            let p = document.createElement('p');
            p.textContent = description;

            let a = document.createElement('a');
            a.href = '#';
            a.textContent = 'Читать далее';

            // Добавить все элементы в новость
            newsItem.appendChild(img);
            newsItem.appendChild(h2);
            newsItem.appendChild(p);
            newsItem.appendChild(a);

            // Добавить новость на страницу
            document.querySelector('.news').appendChild(newsItem);

            // Очистить форму
            document.getElementById('news-form').reset();
        };
        reader.readAsDataURL(imageFile); // Прочитать изображение как Data URL
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});
