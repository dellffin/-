document.addEventListener('DOMContentLoaded', () => {
    const fio = localStorage.getItem("fio");
    const date = localStorage.getItem("date");

    document.getElementById("output1").innerText = "Логин: " + fio;
    document.getElementById("output2").innerText = "Дата рождения: " + date;

});
