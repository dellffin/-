let items = [
    { title: "Текила", description: "Крепкий алкогольный напиток, полученный путём дистилляции ферментированного сока голубой агавы. Жгучий напиток, вместе с которым еще едят соль и лимон, чтобы сделать его употребление еще более невозможным. " },
    { title: "Водка", description: "Состав невероятно прост. Эффект напитка невероятно быстр. Рекомендую употреблять для согревания на морозе." },
    { title: "Вино", description: "В его основе забродивший виноград. Напиток для буржуев и ценителей, способных различать тонкие нотки видов этого самого винограда." },
    { title: "Похмелье", description: "Состояние с утра, сопровождающееся головной болью, рвотой, снижением уровня здоровья. Чувство совершенно отвратительное, не рекомендую." },
    { title: "Опьянение", description: "Состояние, к которому приводит алкоголь. Обычно оно сопровождается повышением храбрости, увеличением хорошего настроения и наплывом «гениальных» идей. " },
    { title: "Закуски", description: "К каждому виду алкоголя можно подобрать разные закуски. Помогают не пьянеть слишком быстро. Их наличие – признак культурного расслабляющего вечера, что отличает от чудовищных кутежей." }
];

const vvod = document.getElementById('vvod');
const vyvod = document.getElementById('vyvod');

function createItem(title, description) {
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

    container.appendChild(h1);
    container.appendChild(p);

    return container;
}

function toggleDescription(card) {
    // Закрытие всех открытых карточек
    document.querySelectorAll('.expanded').forEach(openCard => {
        openCard.classList.remove('expanded');
    });

    // Открытие текущей карточки
    card.classList.add('expanded');
}

function displayAllItems() {
    vyvod.innerHTML = "";
    items.forEach(item => {
        const element = createItem(item.title, item.description);
        vyvod.appendChild(element);
    });
}

// Вызываем функцию для отображения всех элементов при загрузке страницы
displayAllItems();

vvod.addEventListener('input', () => {
    vyvod.innerHTML = "";
    items.filter(item => item.title.toLowerCase().includes(vvod.value.toLowerCase()))
        .forEach(item => {
            const element = createItem(item.title, item.description);
            vyvod.appendChild(element);
        });
});