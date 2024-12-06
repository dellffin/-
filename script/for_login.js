document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms.login;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let x = true;

        if (!form.elements.fio.validity.valid) {
            document.getElementById("out1").innerText = "Вы неправильно ввели логин";
            x = false;
        } else {
            document.getElementById("output1").innerText = "Логин: " + document.getElementById("fio").value;
        }

        if (!form.elements.date.validity.valid) {
            document.getElementById("out2").innerText = "А ну признавайся, есть 18?";
            x = false;
        } else {
            document.getElementById("output2").innerText = "Дата рождения: " + document.getElementById("date").value;
        }

        if (x) {
            localStorage.setItem("fio", document.getElementById("fio").value);
            localStorage.setItem("date", document.getElementById("date").value);
            document.location.href = " ./main.html"; // Переход к другой странице
        }
    });
});