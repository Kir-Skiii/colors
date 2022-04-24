const startBth  = document.querySelector("#start")
const screens  = document.querySelectorAll(".screen")
const timeList = document.querySelector("#time-list")
const timeEl = document.querySelector("#time")
 const board = document.querySelector("#board")

 //создаем массив с цвветовой гамой
 const colors = ['#6fa2dd', '#996fdd', '#dd6fdd', '#d8565d', 
  '#56d8d1', '#56d87d', '#b5d856', '#d8aa56', '#16661d'];
  
  //создаем переменные времени и очков
  let time = 0;
  let score = 0;

startBth.addEventListener('click', (event ) => {
event.preventDefault();
screens[0].classList.add('up');

})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');

        startGame();
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
       score++;
       event.target.remove();
       createRandomCircle();

}
})

//функция по запуску игры
function startGame(){
    setInterval(decreateTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreateTime (){
    if(time === 0){
        finishGame()
    } else {
        let current = - -time;
        if(current < 10){
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`;
}
function finishGame() {
    board.innerHTML = `<h1>Ваш счёт: ${score}</h1>`;
}

//Функция создания рандомного кружка на поле
function createRandomCircle() {
    //создаем в блок который будет записан кружок
    const circle = document.createElement('div');
// размер кржка получаем рандомно от 10 до 60
const size = getRandomNumber(10, 60);
//возращаем размер поля 500px 
const {width, height} = board.getBoundingClientRect();

const x  = getRandomNumber(0, width - size);
const y  = getRandomNumber(0, height - size);

setColor(circle);

circle.classList.add('circle');
circle.style.width = `${size}px;`;
circle.style.height = `${size}px;`;
circle.style.top = `${y}px;`;
circle.style.left = `${x}px;`;
//поле игровое добавь кружок
board.append(circle);
}


//создаем рандомную функцию от минимум до максимум
function getRandomNumber(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

//функция принимает аргумент и меняет фон
function setColor(element){
    //создаем переменную color и записываем в неё цвет из функции
    const color = getRandomColor();
    //приписываем её фон получившийся цвет
    element.style.background = color;
}

//создаем функциюкоторая возращает индекс цвета
function getRandomColor() {
    //В ИНДЕКС ПОМЕЩАЕМ цивру от 0 до длинны массива colors

    //const index = Math.floor(Math.random() * colors.length);///1 вариант

    const index = getRandomNumber(0,colors.legenth) //2 вариант

    //возвращаем массив с инлексом,тоесть цвет
    return colors[index];
}