const listArrows = document.querySelectorAll('#list-arrow');
const overflow = document.querySelector('.overflow');
const list = document.querySelectorAll('.list');


listArrows.forEach((listArrow, lists) => {

   listArrow.onclick = () => {
      overflow.classList.toggle('overflow-drop');
      listArrow.classList.toggle('list-arrow-rotate');
      list[lists].classList.toggle('list-drop')
   }
})


const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('show');
})
