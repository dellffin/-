let items = [
    { title: "Текила", description: "Крепкий алкогольный напиток, полученный путём дистилляции ферментированного сока голубой агавы. Жгучий напиток, вместе с которым еще едят соль и лимон, чтобы сделать его употребление еще более невозможным. ", image: "./style/img/tequila.jpg" },
    { title: "Водка", description: "Состав невероятно прост. Эффект напитка невероятно быстр. Рекомендую употреблять для согревания на морозе.", image: "./style/img/vodka.jpg" },
    { title: "Вино", description: "В его основе забродивший виноград. Напиток для буржуев и ценителей, способных различать тонкие нотки видов этого самого винограда.", image: "./style/img/wine.jpg" },
    { title: "Похмелье", description: "Состояние с утра, сопровождающееся головной болью, рвотой, снижением уровня здоровья. Чувство совершенно отвратительное, не рекомендую.", image: "./style/img/hangover.jpg" },
    { title: "Опьянение", description: "Состояние, к которому приводит алкоголь. Обычно оно сопровождается повышением храбрости, увеличением хорошего настроения и наплывом «гениальных» идей. ", image: "./style/img/intoxication.jpg" },
    { title: "Закуски", description: "К каждому виду алкоголя можно подобрать разные закуски. Помогают не пьянеть слишком быстро. Их наличие – признак культурного расслабляющего вечера, что отличает от чудовищных кутежей.", image: "./style/img/snacks.jpg" }
];

const vvod = document.getElementById('vvod');
const vyvod = document.getElementById('vyvod');

function createItem(title, description, imageUrl) {
    const container = document.createElement('div');
    container.className = 'item';

    const h1 = document.createElement('h1');
    h1.innerText = title;
    h1.onclick = function() {
        toggleDescription(container);
    };

    const p = document.createElement('p');
    p.innerText = description;
    p.className = 'description';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;
    img.className = 'image-class hidden';

    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(img);

    return container;
}

function toggleDescription(card) {
    if (card.classList.contains('expanded')) {
        // Если карточка уже открыта, закрываем ее
        card.classList.remove('expanded');
    } else {
        // Закрываем все открытые карточки
        document.querySelectorAll('.expanded').forEach(openCard => {
            openCard.classList.remove('expanded');
        });

        // Открываем текущую карточку
        card.classList.add('expanded');
    }
}

function displayAllItems() {
    vyvod.innerHTML = '';
    items.forEach(item => {
        const element = createItem(item.title, item.description, item.image);
        vyvod.appendChild(element);
    });
}

// Вызываем функцию для отображения всех элементов при загрузке страницы
displayAllItems();

vvod.addEventListener('input', () => {
    vyvod.innerHTML = '';
    items.filter(item => item.title.toLowerCase().includes(vvod.value.toLowerCase()))
        .forEach(item => {
            const element = createItem(item.title, item.description, item.image);
            vyvod.appendChild(element);
        });
});

function toggleDescription(card) {
    if (card.classList.contains('expanded')) {
        // Если карточка уже открыта, закрываем ее
        card.classList.remove('expanded');
    } else {
        // Закрываем все открытые карточки
        document.querySelectorAll('.expanded').forEach(openCard => {
            openCard.classList.remove('expanded');
        });

        // Открываем текущую карточку
        card.classList.add('expanded');
    }
}