const startBtn = document.querySelector('#start');
const screens = document.querySelector('.screen');
const timeList = document.querySelector('#time-list');
const time1 = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = ['#6fa2dd', '#996fdd', '#dd6fdd', '#d8565d', 
'#56d8d1', '#56d87d', '#b5d856', '#d8aa56', '#16661d'
];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})
timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');

        startGame();
    }
})
board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        score++;
        event.target.removeEventListener();
        createRandomCircle();
    }
})

function getRandomNumber(mln, max) {
    return Math.round(Math.random() * (max - min)+ min);
}

function setColor(element) {
    const color = getRandomNumber();
    element.style.background = color;
}

function getRandomColor(){
    const index = getRandomNumber(0, colors.length - 1);
    // const index = Math.floor(Math.random()* colors.length);
    return colors[index];
}