const buttonContainer = document.getElementById('button-container');
const pageTitle = document.getElementById('page-title'); // Получаем заголовок

// Укажите название страницы
pageTitle.textContent = "Мой каталог";

// Укажите ссылки на ваши страницы в массиве
const links = [
    "https://disk.yandex.ru/d/qgNVgTFmxCcWAQ",
    "https://disk.yandex.ru/d/JgSLp0Yu4aLRmw",
    "https://disk.yandex.ru/d/RL6MPzFylNmdcw",
    "https://disk.yandex.ru/d/hdeRo6P6s1uUQg",
    "https://disk.yandex.ru/d/fnlq1YzW2BJRdQ",
    "https://disk.yandex.ru/d/afAB-tMSRHnPCg",
    "https://disk.yandex.ru/d/RL6MPzFylNmdcw",
    "https://disk.yandex.ru/d/iABWqZgM7IGFhA",
    "https://disk.yandex.ru/i/3CmZbppNpGjEjg",
    "https://disk.yandex.ru/d/IQ8UZedT3szTBw",
    "https://disk.yandex.ru/d/7N3DOsQ7DZsTzw",
    "https://disk.yandex.ru/d/hXXJ_rOMc6ILkQ",
    "https://disk.yandex.ru/d/wmV-ipojwqo3uA",
    "https://disk.yandex.ru/d/6DNW5SM2ZDsOQg",
    "https://disk.yandex.ru/d/LEt6a_S-LrYrIg",
    "https://disk.yandex.ru/d/yHZPHbYNwdhxEA",
    "https://disk.yandex.ru/d/IgHtCsy5X5PJYg",
    "https://disk.yandex.ru/d/MS8-m3TY4Pjhlg",
    "https://disk.yandex.ru/d/i8sm9wQ8TDp2ng",
    "https://disk.yandex.ru/i/uAu4vbNqUQTj4g",
];

const buttonNames = [
    'Биобиблиографический указатель "Их именами названы улицы..."',
    "Календарь знаменательных и памятных дат по Маслянинскому району",
    'Путеводитель "В предгорьях Салаирского кряжа"',
    'Биобиблиографический сборник о земляках-Героях "Героями стали навеки"',
    'Биографический справочник почетные граждане Маслянинского района "Достойным почетное звание!"',
    '"Сборник поэзии и прозы поэтов и писателей Маслянинского района "Поколению Великой войны посвящается..."',
    'Мифы и легенды Маслянинского района "Чудеса Сибирской Швейцарии"',
    'Сборник "Туристические тропы Маслянинского района"',
    'Книга Чернобая Леонида Прокофьевича "Путешествие по притокам Берди"',
    'Книга Чернобая Леонида Прокофьевича "Справочник краеведа"',
    'Краеведческий сборник "История библиотек в истории района"',
    'Альбом "Из истории Маслянинской центральной библиотеки"',
    'Книга Кошкина Анатолия Алексеевича "Жерновка - далекое детство"',
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