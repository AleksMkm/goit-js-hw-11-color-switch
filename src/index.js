import './main.css';

// исходный массив цветов

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// исходная функция генерации индекса

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// кнопки
const refs = {
  startBtnEl: document.querySelector('[data-action="start"]'),
  stopBtnEl: document.querySelector('[data-action="stop"]'),
};

class ColorChanger {
  constructor({ startBtn }) {
    this.intervalId = null;
    this.startBtn = startBtn;
  }

  start() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    this.startBtn.disabled = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.startBtn.disabled = false;
  }
}

const myColorChanger = new ColorChanger({ startBtn: refs.startBtnEl });

refs.startBtnEl.addEventListener(
  'click',
  myColorChanger.start.bind(myColorChanger),
);
refs.stopBtnEl.addEventListener(
  'click',
  myColorChanger.stop.bind(myColorChanger),
);
