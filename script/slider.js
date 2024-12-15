//создание регулярного выражения
let reg = /[0-9]/g;

//функция для перемотки изображений вправо и их поочередного отображения
function fun() {
    hide(spisok[x - 1].classList)
    if (x < spisok.length) {
        x += 1
    } else {
        x = 1
    }  
    setTimeout(()=>{
        show(spisok[x - 1].classList)
    }, 1000);
}


//функция, дающая свойство видимости для изображения
function show(clasL){
    document.documentElement.style.setProperty("--el", '-400px');

    clasL.add('show')
    setTimeout(()=> {
        clasL.add("close")
        document.documentElement.style.setProperty("--el", '0px');
    }, 10);

}

//функция, дающая свойство невидимости для изображений
function hide(clasL){
    document.documentElement.style.setProperty("--el", '400px');

    clasL.remove('close')
    setTimeout(()=> {
        clasL.remove('show')
    }, 1000);
     
}

//функция для перемотки изображений влево и их поочередного отображения
function fun1() {
    hide1(spisok[x - 1].classList)
    if (x > 1) {
        x -= 1
    } else {
        x = spisok.length
    }  
    setTimeout(()=>{
        show1(spisok[x - 1].classList)
    }, 1000);
}

//функция, дающая свойство видимости для изображения
function show1(clasL){
    document.documentElement.style.setProperty("--el", '400px');

    clasL.add('show')
    setTimeout(()=> {
        clasL.add("close")
        document.documentElement.style.setProperty("--el", '0px');
    }, 10);

}

//функция, дающая свойство невидимости для изображений
function hide1(clasL){
    document.documentElement.style.setProperty("--el", '-400px');

    clasL.remove('close')
    setTimeout(()=> {
        clasL.remove('show')
    }, 1000);
     
}

//присвоение значения переменной х
let x = 1

//создание массива из изображений
const spisok = document.getElementsByClassName('def')

//функция для вывода изображения по номеру из ввода
function quanity(){
    const str = document.getElementById("input").value;

    if(str.match(reg)){
    //проверка на наличие чисел в вводе
        if(str.match(reg).length == String(str).length){
        //проверка на отсутствие символов в вводе
            num = Number(str)
            if(str!=0 && str <= 5){
                hide(spisok[x - 1].classList);
                x = num; 
                setTimeout(() => { 
                    show(spisok[x - 1].classList); 
                }, 1000)
            }else{
                document.getElementById("output").innerText = "Такого слайда нет"
        }      
        }else{
            document.getElementById("output").innerText = "Кажется, у вас опечатка"
        }
    }else{
        document.getElementById("output").innerText = "Вы ввели не число"
    }
}

//подключение кнопки
const btn = document.getElementById("btn")
btn.addEventListener("click", fun) 

//подключение кнопки
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", fun1) 

//подключение кнопки
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", quanity) 