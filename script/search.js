let items = ["Первый-1", "Первый-2", "Второй-3", "Второй-4", "Второй-5", "Третий-6"]

const vvod = document.getElementById('vvod')
const vyvod = document.getElementById('vyvod')

function displayAllItems() {
    vyvod.innerHTML = ""; // Очищаем вывод
    items.forEach(item => {
        const li = document.createElement('li');  
        li.innerText = item;  
        vyvod.appendChild(li);  
    });
}

// Вызываем функцию для отображения всех элементов при загрузке страницы
displayAllItems();

vvod.addEventListener('input', () => {
    vyvod.innerHTML = ""
    items.forEach(item => {
        if (item.toLowerCase().includes(vvod.value.toLowerCase())) {
            const li = document.createElement('li');
            li.innerText = item;
            vyvod.appendChild(li)
        }
    })
})
