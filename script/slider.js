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


const btn = document.getElementById("btn")
btn.addEventListener("click", fun) 

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", fun1) 
