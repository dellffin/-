let b = 0
const pages = document.getElementsByClassName('page')

document.getElementById("b1").addEventListener('click', () =>{
  pages[b].classList.add('no')
  pages[0].classList.remove('no')
  b = 0
  
})

document.getElementById('b2').addEventListener('click', () =>{
  pages[b].classList.add('no')
  pages[1].classList.remove('no')
  b = 1

})

document.getElementById('b3').addEventListener('click', () =>{
  pages[b].classList.add('no')
  pages[2].classList.remove('no')
  b = 2
})

document.getElementById('b4').addEventListener('click', () =>{
  pages[b].classList.add('no')
  pages[3].classList.remove('no')
  b = 3
})

document.getElementById('b5').addEventListener('click', () =>{
    pages[b].classList.add('no')
    pages[4].classList.remove('no')
    b = 4
  })