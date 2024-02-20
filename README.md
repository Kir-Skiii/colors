# colors
DOM элементов (selectors)- метод для выюора элементов
*getElementById or querySelector - сохраняет один элемент 
*querySelectorAll - сохраняет коллекцию элементов

функции
function simpleMath(a,b){
  let result = a +b;
  console.log(result);
}
simpleMath(11,33); //44

*Оператор return используется в функциях для возвращения данных после выполнения работы функции. Если функция должна обработать какие-то данные и потом вернуть их, то для возвращения данных необходим оператор return. 
function simpleMath(a,b){
  let result = a +b;
  return result;
}
let sum = simpleMath(44, 55);
console.log(sum);

*classList - объект методов для работы с классами
*Обработчик события - addEventListener
window.addEventListener('scroll', function(){
  let scrollPos = window.scrollY;

  if(scrollPos > 0) {
    header.classList.add('red');
  } 
  else {
    header.classList.remove('red');
  }
  
});
