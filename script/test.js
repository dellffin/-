const form = document.forms.test;

    // Функция для сброса формы и очистки результатов
function resetTest() {
        // Сбрасываем форму
    form.reset();
        
        // Очищаем все сообщения об ошибках
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`er_${i}`).innerText = '';
    }
        
        // Удаляем все дочерние элементы div#results
    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
        
        // Скрываем блок с результатами
    resultsDiv.style.display = 'none';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var y = 0;

    let inputValue = form.elements.quest1.value.trim();

    if (!inputValue) {
        document.getElementById("er_8").innerText = "Вы ничего не ввели(";
    } else if (form.elements.quest1.validity.valid) {
        y += 2;
    }

    if (form.elements.r_two.value === "") {
        document.getElementById("er_1").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseFloat(form.elements.r_two.value);
    }

    if (form.elements.r_three.value === "") {
        document.getElementById("er_2").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseFloat(form.elements.r_three.value);
    }

    if (form.elements.r_four.value === "") {
        document.getElementById("er_3").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseFloat(form.elements.r_four.value);
    }

    if (form.elements.r_five.value === "") {
        document.getElementById("er_4").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseFloat(form.elements.r_five.value);
    }

    if (form.elements.r_six.value === "") {
        document.getElementById("er_5").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseFloat(form.elements.r_six.value);
    }

    if (form.elements.r_seven.value === "") {
        document.getElementById("er_6").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseFloat(form.elements.r_seven.value);
    }

    let inputValue2 = form.elements.quest8.value.trim();

    if (!inputValue2) {
        document.getElementById("er_7").innerText = "Вы ничего не ввели(";
    } else if (form.elements.quest8.validity.valid) {
        y += 2;
    }

    if (y === 0) {
        y = "вода -_-";
        document.getElementById("descriptionn").innerText = "Скорее всего вы просто не ответили ни на один вопрос. Либо вы настолько кислый человек, что принципиально не захотели отвечать на них.";
        var descriptionElement1 = document.getElementById("descript_img");
        var image1 = new Image();
        image1.src = './style/img/test_water.jpg';
        image1.width = 390;
        descriptionElement1.appendChild(image1);
    } else if (y >= 0.5 && y <= 4.5) {
        y = "пиво";
        document.getElementById("descriptionn").innerText = "Вы наверняка прям как скуф. Пассивный и безинициативный человек. И пиво для вас - идеальный напиток, чтобы коротать вечера. Если вас все устраивает в этой жизни, то почему бы не выпить за это?";
        var descriptionElement2 = document.getElementById("descript_img");
        var image2 = new Image();
        image2.src = './style/img/test_beer.jpg';
        image2.width = 390;
        descriptionElement2.appendChild(image2);
    } else if (y >= 5 && y <= 9.5) {
        y = "вино";
        document.getElementById("descriptionn").innerText = "Думаю, про вас можно сказать, что вы задумчивый человек. Может, иногда проявляете инфантильность или наивность. Скорее всего, у вас есть мечты или надежды на будущее. Осторожно, как бы не разбиться о реалии мира.";
        var descriptionElement3 = document.getElementById("descript_img");
        var image3 = new Image();
        image3.src = './style/img/test_wine.jpg';
        image3.width = 390;
        descriptionElement3.appendChild(image3);
    } else if (y >= 10 && y <= 14.5) {
        y = "коньяк";
        document.getElementById("descriptionn").innerText = "Похоже, вы достаточно занятой человек. Чтобы быстро переключиться с дел на отдых нужны соответствующие меры. Но даже в способе расслабиться должны быть свои элегантность и изыск.";
        var descriptionElement4 = document.getElementById("descript_img");
        var image4 = new Image();
        image4.src = './style/img/test_cognac.jpg';
        image4.width = 390;
        descriptionElement4.appendChild(image4);
    } else if (y >= 15 && y <= 19.5) {
        y = "текила";
         document.getElementById("descriptionn").innerText = "Скорее всего вы веселый человек, не любящий сидеть на месте. Радостное состояние для вас стабильно. Чуть ли не каждое хорошее событие требует того, чтобы его отпраздновали. Такому оптимизму любая беда не страшна.";
         var descriptionElement5 = document.getElementById("descript_img");
         var image5 = new Image();
         image5.src = './style/img/test_tequila.jpg';
         image5.width = 390;
         descriptionElement5.appendChild(image5);
    } else if (y >= 20 && y <= 29.5) {
        y = "водка";
        document.getElementById("descriptionn").innerText = "Кажется, вы не простой человек. Скука для вас - что-то невозможное и убийственное. Вы изобретательно подходите к решению задач. Даже если ваша задача - это отдых.";
        var descriptionElement6 = document.getElementById("descript_img");
         var image6 = new Image();
         image6.src = './style/img/test_vodka.jpg';
         image6.width = 390;
         descriptionElement6.appendChild(image6);
    }

    document.getElementById("output33").innerText = "Вы  " + y;
    document.getElementById("output3").innerText = "Последний результат теста: " + y;
});