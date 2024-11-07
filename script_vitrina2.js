const buttonContainer = document.getElementById('button-container');
const pageTitle = document.getElementById('page-title'); // Получаем заголовок

// Укажите название страницы
pageTitle.textContent = "Мой каталог";

// Укажите ссылки на ваши страницы в массиве
const links = [
    "https://disk.yandex.ru/d/6DNW5SM2ZDsOQg",
    "https://disk.yandex.ru/d/LEt6a_S-LrYrIg",
    "https://disk.yandex.ru/d/yHZPHbYNwdhxEA",
    "https://disk.yandex.ru/d/IgHtCsy5X5PJYg",
    "https://disk.yandex.ru/d/MS8-m3TY4Pjhlg",
    "https://disk.yandex.ru/d/i8sm9wQ8TDp2ng",
    "https://disk.yandex.ru/i/uAu4vbNqUQTj4g",
];

const buttonNames = [
    'Альбом "История Маслянинского комсомола"',
    'Альбом "Маслянинский кирпичный завод"',
    'Альбом "Маслянинский детский дом"',
    'Альбом "Земли маслянинской герои"',
    'Альбом "Маслянинский Свято-Никольский храм"',
    'Альбом Школы района: история, будни, дела"',
    'Альбом "Сибирская Швейцария"',
];

function createButton(link, title) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = title;
    button.addEventListener('click', () => {
      window.location.href = link;
    });
    return button;
}

// Создаем кнопки
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const title = buttonNames[i]; // Используем названия кнопок из массива buttonNames
    buttonContainer.appendChild(createButton(link, title));
}