const form = document.forms.test

form.addEventListener('submit', (event) =>{ 
    event.preventDefault(); 

    var y = 0;

    if(form.elements.quest1.validity.valid){ 
        y += 2; 
    } 

    y += parseInt(form.elements.r_two.value);

    y += parseInt(form.elements.r_three.value);

    y += parseInt(form.elements.r_four.value);

    y += parseInt(form.elements.r_five.value);

    y += parseInt(form.elements.r_six.value);

    y += parseInt(form.elements.r_seven.value);

    if(form.elements.quest8.validity.valid){ 
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
