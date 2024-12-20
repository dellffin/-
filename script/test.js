const form = document.forms.test;

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
        y += parseInt(form.elements.r_two.value);
    }

    if (form.elements.r_three.value === "") {
        document.getElementById("er_2").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseInt(form.elements.r_three.value);
    }

    if (form.elements.r_four.value === "") {
        document.getElementById("er_3").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseInt(form.elements.r_four.value);
    }

    if (form.elements.r_five.value === "") {
        document.getElementById("er_4").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseInt(form.elements.r_five.value);
    }

    if (form.elements.r_six.value === "") {
        document.getElementById("er_5").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseInt(form.elements.r_six.value);
    }

    if (form.elements.r_seven.value === "") {
        document.getElementById("er_6").innerText = "Вы забыли отметить вариант ответа.";
    } else {
        y += parseInt(form.elements.r_seven.value);
    }

    let inputValue2 = form.elements.quest8.value.trim();

    if (!inputValue2) {
        document.getElementById("er_7").innerText = "Вы ничего не ввели(";
    } else if (form.elements.quest8.validity.valid) {
        y += 2;
    }

    if (y >= 0 && y <= 4) {
        y = "пиво";
    } else if (y >= 5 && y <= 9) {
        y = "вино";
    } else if (y >= 10 && y <= 14) {
        y = "коньяк";
    } else if (y >= 15 && y <= 19) {
        y = "текила";
    } else if (y >= 20 && y <= 28) {
        y = "водка";
    }

    document.getElementById("output33").innerText = "Вы  " + y;
    document.getElementById("output3").innerText = "Последний результат теста: " + y;
});


