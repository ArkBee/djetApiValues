const parrentDivBlock = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-hlLBRy.iJgxSt.sc-iQAVnG.kKKKp > div.sc-eKJbhj.kBa-DMh");
const flyerDshboad = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-eYulFz.bPchqO > div > div");
const flyaway = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-eYulFz.bPchqO > div > div > div.sc-dmctIk.Gmsrf");
const curX = flyaway.children[0]; // Текущее значение X
const waitNextRound = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-eYulFz.bPchqO > div > div.sc-bBABsx.pFRfy");
const balance = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-cqQeAO.kvGivG > div > div > div.sc-iAEawV.bjXaQD.sc-AHaJN.sc-EJAja.lioyCd.jGycXN > button > div > div");
const AllJettPak = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-eYulFz.bPchqO > div > div:nth-child(1)");
const JetPak = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-eYulFz.bPchqO > div > div:nth-child(1) > div.sc-fnGiBr.gpBElz > div.sc-eDWCr.iiOtUt > div");
const Waiting = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-eYulFz.bPchqO > div > div:nth-child(3)");
const jumpLine1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-eYulFz.bPchqO > div > div:nth-child(1) > div.sc-fnGiBr.gpBElz > div.sc-eDWCr.iiOtUt > svg > g > path:nth-child(1)");
const jumpLine2 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-eYulFz.bPchqO > div > div:nth-child(1) > div.sc-fnGiBr.gpBElz > div.sc-eDWCr.iiOtUt > svg > g > path:nth-child(2)");
const notifyWin = document.querySelector("#mobile > div.sc-lhlUkk.aBbyI");
const balanceHtml = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-cqQeAO.kvGivG > div > div > div.sc-iAEawV.bjXaQD.sc-AHaJN.sc-EJAja.lioyCd.jGycXN > button > div > div");


// 1 окно управления ставкой
let BetSizeValue1 = document.querySelectorAll('#bet-amount-mobile-input')[0];
BetSizeValue1.addEventListener('input', () =>  
{ 
  BetSize = parseFloat(BetSizeValue1.value);
});


//СТАВКА
const betButton1 = document.querySelectorAll("#make-bet-button > div")[0];
betButton1.addEventListener('click', () => makeBet(1));

const PlusButton1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-gJqSRm.fFHqHx > div:nth-child(3) > button > div");
PlusButton1.addEventListener('click', () => BetSizeChange('+', 10,1));

const MinusButton1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-gJqSRm.fFHqHx > div:nth-child(1) > button");
MinusButton1.addEventListener('click', () => BetSizeChange('-', 10,1));

const Plus50Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(1) > button");
Plus50Button1.addEventListener('click', () => BetSizeChange('+',50,1));

const Plus100Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(2)");
Plus100Button1.addEventListener('click', () => BetSizeChange('+', 100,1));

const Plus200Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(3) > button");
Plus200Button1.addEventListener('click', () => BetSizeChange('+', 200,1));

const Plus500Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(4) > button");
Plus500Button1.addEventListener('click', () => BetSizeChange('+', 500,1));

// 2 окно управления ставкой
let BetSizeValue2 = document.querySelectorAll('#bet-amount-mobile-input')[1];
const betButton2 = document.querySelectorAll("#make-bet-button > div")[1];
betButton2.addEventListener('click', () => makeBet(2));






// #make-bet-button
// Глобальные переменные для координат
let Xg = -95; // Начальное значение X
let Yg = 90;  // Начальное значение Y
let arrowX = true; // Направление движения по X
let arrowY = true; // Направление движения по Y
let animationFrameId = null; // ID анимации

let centerOfJetPack = curX.offsetLeft + 60; // Центральная точка JetPack

//Флаги состояний для функций анимаций
let isMotionJetPackActive = false;
let isFlyawayActive = false;
let isWaitingProgressBarActive = false;
let isNotifyWinActive = false;
let isInTime = false; //Флаг для индикации, что сейчас можно сделать ставку, которая будет сейчас учитываться

// Флаги для проверки взаимодействия с пользователем
let isBetInTime = false; // Если ставка сделана вовремя, то она вычисляется выйгрыш относительно коэффициента
let BetSize = 10;

let balanceValue = 500.03; // Баланс пользователя
function updateBalance(value) 
{
  balanceValue = value;
  balanceHtml.textContent = `${ value } ₽`;
}

function BetSizeChange(char='+', value, nubmerOfCounter = 1) 
{
  if (char === '+')   BetSize += value;      
  else if(char === '-')
  {
    BetSize -= value;
  }
  if(BetSize < 10) BetSize = 10;
  BetSizeValue1.value = BetSize + ' ₽';
}

// USER VARIABLES
let isUserMadeBet = false; // Чекаем на ставку
let UserBetSize = 0;

let queueOfX = [1.34, 1.37, 1.16, 30.39]; // Заранее заданный список чисел

function makeBet(btnNumber=1) {
  console.info('makeBet');
  console.info('isUserMadeBet ' + isUserMadeBet);
  console.info('isBetInTime ' + isBetInTime);
  if(isUserMadeBet && isBetInTime) // Ставка сделана, забираем выйгрыщ
  { //ЗАБИРАЕМ ВЫЙГРЫШ
    isUserMadeBet = false;
    
    calculateWin();    
    //UserBetSize = 0.2;
    changeBetButtonsClass(btnNumber, 'gTqZvy');    // Применяем класс "Ставка" к первой кнопке
  }
  else if(isUserMadeBet && isBetInTime && isInTime) // Ставка сделана, но не вовремя
  { //ОТМЕНЯЕМ СТАВКУ
    isUserMadeBet = false;    
    changeBetButtonsClass(btnNumber, 'gTqZvy');    // Применяем класс "Ставка" к первой кнопке
  }
  else if(!isUserMadeBet && !isBetInTime) // Ставка не сделана, но не вовремя
  { //Делаем СТАВКУ
    isBetInTime = isInTime; // Если ставка не была сделана вовремя, то она считается вовремя
    isUserMadeBet = true;
    UserBetSize = BetSize;
    changeBetButtonsClass(btnNumber, 'otmenit');    // Применяем класс "Ставка" к первой кнопке
  }
  
  
}

// Оживляем JetPack
function motionJetPack(command)
{
  if (command === 'off')
  {
    if (animationFrameId)
    {
      //onsole.info('motionJetPack ВЫРУБАЕМ АНИМАЦИЮ' );
      cancelAnimationFrame(animationFrameId); // Останавливаем анимацию
      animationFrameId = null; // Сбрасываем идентификатор
      isMotionJetPackActive = false; // Сбрасываем флаг активности анимации 

    }
    return; // Выходим из функции, не продолжая анимацию
  }

  // Анимация началась
  isMotionJetPackActive = true;
  //onsole.info('motionJetPack ИДЁТ АНИМАЦИЯ' );

  AllJettPak.style.opacity = '1';
  JetPak.style.opacity = "1";

  if (Xg < centerOfJetPack + 10) arrowX = true; //левый барьер
  if (Xg > centerOfJetPack + 50) arrowX = false; //правый барьер

  if (Yg < 52) arrowY = true;
  if (Yg > 58) arrowY = false;

  Xg += arrowX ? 0.15 : -0.1;
  Yg += arrowY ? 0.07 : -0.06;

  JetPak.style.transform = `translate(${ Xg }px, ${ Yg }px)`;

  //var newX = Xg - 70 * 2.5;
  //var newX = Xg- 72 * 2.5;
  //onsole.info('motionJetPack '+ newX);
  //onsole.info('Xg '+ Xg);
  // var newY = Yg + 28;
  // var newD = `M -95 196 Q ${ 166.9166627975884 + newX } 196 ${ 250.3749941963826 + newX } ${ newY }`;
  // jumpLine1.setAttribute('d', newD);
  //jumpLine2.setAttribute('d', newD + ` L ${ 250.3749941963826 + newX } 196 Z`);
  var newX = Xg - 70 * 2.5;
  var newY = Yg + 20;
  // console.info('newY ' + newY);
  var newD = `M -95 190 Q ${ 167 + newX } 190 ${ 250 + newX } ${ newY }`;
  jumpLine1.setAttribute('d', newD); // Обновляем атрибут 'd' для первой линии
  jumpLine2.setAttribute('d', newD + ` L ${ 250 + newX } 190 Z`); // Обновляем атрибут 'd' для второй линии

  if (!isMotionJetPackActive)
  {
    // Если анимация не активна, не продолжаем её
    return;
  }

  animationFrameId = requestAnimationFrame(motionJetPack); // Обновляем идентификатор анимации
}



async function StartJetPack(coefficientX)
{
  isInTime = false; // Вовремя начала раунда, ставки идут на следующий раунд
  if (isMotionJetPackActive) await waitForAnimationToComplete('isMotionJetPackActive');
  if (isFlyawayActive) await waitForAnimationToComplete('isFlyawayActive');
  if (isWaitingProgressBarActive) await waitForAnimationToComplete('isWaitingProgressBarActive');

  // Теперь мы уверены, что другие анимации завершены
  isMotionJetPackActive = true;
  //onsole.info('StartJetPack ВЗЛЁТ АНИМАЦИЯ' );

  Xg = -95; // Начальное значение X
  Yg = 120;  // Начальное значение Y 90

  // Рассчитываем процент выполнения анимации на основе коэффициента X

  let completionPercentage = (coefficientX - 1.0) / 0.3; // 0,10
  if (completionPercentage >= 1) completionPercentage = 1;
  //let targetX = -95 + (200 + 95) * completionPercentage; // Целевая позиция X в зависимости от процента выполнения
  //centerOfJetPack
  let targetX = (centerOfJetPack + 43) * completionPercentage; // Целевая позиция X в зависимости от процента выполнения
  setElementOpacity(JetPak, '1');
  setElementOpacity(AllJettPak, '1');
  setElementOpacity(Waiting, '0');

  function animateStart()
  {
    if (Xg < targetX)
    {
      Xg += 3.5; // Скорость движения

      if (completionPercentage < 0.5)
        Yg -= 0.1; // Скорость движения
      else Yg -= 0.5; // Скорость движения
      JetPak.style.transform = `translate(${ Xg }px, ${ Yg }px)`;

      // Обновляем координаты для анимаций прыжка
      var newX = Xg - 70 * 2.5;
      var newY = Yg + 20;
      //console.info('newY ' + newY);
      var newD = `M -95 190 Q ${ 167 + newX } 190 ${ 250 + newX } ${ newY }`;
      jumpLine1.setAttribute('d', newD); // Обновляем атрибут 'd' для первой линии
      jumpLine2.setAttribute('d', newD + ` L ${ 250 + newX } 190 Z`); // Обновляем атрибут 'd' для второй линии

      requestAnimationFrame(animateStart); // Запрашиваем следующий кадр анимации
    }
    else if (Xg >= targetX && coefficientX < 1.2)
    {
      isMotionJetPackActive = false;
      ////onsole.info('StartJetPack ВЫЗЫВАЕМ УЛЕТАНИЕ');
      flyawayJetPack(coefficientX); // Запускаем анимацию улетания JetPack
    }
    else if (coefficientX >= 1.2)
    {
      isMotionJetPackActive = true;
      ////onsole.info('StartJetPack - ЛЕТИМ ДАЛЬШЕ НА АНИМКЕ');
      motionJetPack(); // Запускаем анимацию JetPack
    }
  }

  animateStart(); // Запускаем анимацию
}




// Функция для "улетания" JetPack
async function flyawayJetPack(X)
{
  // Корректируем последнее значение, чтобы точно соответствовать цели
  curX.textContent = parseFloat(X).toFixed(2);
  parrentDivBlock.prepend(createClass(X)); // Добавляем новый блок с числом в верхнюю часть экрана
  if (X > 1.0 && isUserMadeBet)
  {
    if(isBetInTime) UserBetSize = 0; // Сбрасываем ставку, если она была сделана вовремя
    else isBetInTime = true; // Если ставка не была сделана вовремя, то устанавливаем флаг, что теперь она активна, это нужно чтобы в начале рауда изменить кнопку на "Забрать"
    // Если значение больше 1.1, то это выигрыш
   // calculateWin(); // Вызываем функцию для расчёта выигрыша
  }
  if (isMotionJetPackActive) await waitForAnimationToComplete('isMotionJetPackActive');
  if (isFlyawayActive) await waitForAnimationToComplete('isFlyawayActive');
  if (isWaitingProgressBarActive) await waitForAnimationToComplete('isWaitingProgressBarActive');

  isFlyawayActive = true;


  //onsole.info('flyawayJetPack');
  motionJetPack('off'); // Останавливаем анимацию
  isFlyAwayExecuted = false; // Сбрасываем флаг выполнения анимации
  function animateFlyAway()
  {
    if (Xg < centerOfJetPack + centerOfJetPack) // Предположим, что 400 это конечная точка по X для улетания
    {
      Xg += 7; // Скорость улетания

      JetPak.style.transform = `translate(${ Xg }px, ${ Yg }px)`;
      // //onsole.info(Xg);      //Вывести в лог текущее значение  Xg

      if (!isFlyAwayExecuted)
      {
        isFlyAwayExecuted = true; // Устанавливаем флаг выполнения анимации
        flyaway.className = "sc-dmctIk cIbJUh"; // Анимация улетания
        setTimeout(() =>
        {
          flyaway.className = "sc-dmctIk Gmsrf"; // Улетел скрывается через 3 секунды, после анимации
          setTimeout(() =>
          {
            isFlyawayActive = false;
            //onsole.info('isFlyawayActive ОФАЕМ ПЕРЕМЕННУЮ');
            WaitingProgreesBar(); // Запускаем анимацию полосы ожидания
            curX.textContent = parseFloat(1.00).toFixed(2);

          }, 2000);
        }, 3000);

      }

      requestAnimationFrame(animateFlyAway);
    }
  }
  animateFlyAway();
  ////console.info('flyawayJetPack'); 
}


function calculateWin()
{
  setElementOpacity(Waiting, '0');
  setElementOpacity(notifyWin, '1');
  if (isBetInTime && isUserMadeBet) //если ставка вовремя, то считаем выйгрыш 
  {
    let win = UserBetSize * curX; //TODO - вычислить выйгрыш
    notifyWin.children[0].children[0].children[1].innerHTML = 'x222.36';  //уведомление
    notifyWin.children[0].children[1].children[0].innerHTML = '212222.20&nbsp;₽'; // скок деняг поднято
    setElementOpacity(parrentDivBlock, '0');
    //Убрать уведомление о выйгрыше
    setTimeout(() =>
    {
      setElementOpacity(notifyWin, '0');
    }, 5000);
  }

  //TODO добавить в FLYAway изменение кнопки, если юзер сделал ставку


}

/* //работа с WEB-сокетами
var ws = new WebSocket("ws://localhost:8765");
ws.onopen = function ()
{
  console.log("Соединение установлено.");
};
*/

async function WaitingProgreesBar() //Ждём следующего раунда
{
  let x = null; // Генерируем новое число

  //Если ставка сделана, то меняем кнопку на ожидание на момент загрузки, потом поменяем на "Забрать"
  isInTime = false; // Вовремя начала раунда, ставки идут на следующий раунд
  if(!isBetInTime && isUserMadeBet)   changeBetButtonsClass(1, 'ozgidanie'); // Применяем класс "Ставка" к первой кнопке
  //ws.send("generate");

  if (isUserMadeBet && !isBetInTime)
  {
    isBetInTime= true; // Если ставка была сделана до начала раунда, то она считается вовремя
                                // выигрыш будет учитываться
  } 

  if (isMotionJetPackActive) await waitForAnimationToComplete('isMotionJetPackActive');
  if (isFlyawayActive) await waitForAnimationToComplete('isFlyawayActive');
  if (isWaitingProgressBarActive) await waitForAnimationToComplete('isWaitingProgressBarActive');

  isWaitingProgressBarActive = true;
  setElementOpacity(JetPak, '0');
  setElementOpacity(AllJettPak, '0');
  setElementOpacity(notifyWin, '0');
  setElementOpacity(waitNextRound, '1');

  for (let end = 100; end > 0; end--)
  {
    await new Promise(resolve => setTimeout(resolve, 50));
    waitNextRound.children[2].children[0].style.width = `${ end }%`;
    if (end == 50) 
    {
      /* //работа с WEB-сокетами
      ws.send("generate");
      /ws.onmessage = function (event) 
      {
        console.log("Получено сообщение: " + event.data);
        x = event.data;
        console.log("XONE: " + x);
      };
      */
      x = generateWeightedNumber(true); // Генерируем новое число true - работа с очередью
    }
  }
  setElementOpacity(waitNextRound, '0');

  setElementOpacity(Waiting, '1');

  isWaitingProgressBarActive = false;




  setTimeout(() =>
  {

    console.log("x: " + x);
    animateNumber(x); //TODO - Добавить анимацию появления нового раунда и Генерацию рандомного значения    
    //let x = generateWeightedNumber(); // Генерируем новое число    
  }, 2000);
  return;
}





function createClass(value)
{
  let type;
  let className;
  if (value > 10)
  {
    type = "high";
    className = "sc-gikAfH fsUVYq";
  } else if (value > 2)
  {
    type = "medium";
    className = "sc-gikAfH kBwALr";
  } else
  {
    type = "low";
    className = "sc-gikAfH kAbaKW";
  }
  const newBlockAuto = document.createElement("div");
  newBlockAuto.className = "sc-bTTELM gIMJrF";
  newBlockAuto.innerHTML = `<div class="${ className }" type="${ type }">${ value }x</div>`;
  return newBlockAuto;
}


//Функция для изменения видимости
function setElementOpacity(element, opacityValue)
{
  element.style.opacity = opacityValue;
}



// Функция для генерации следующего числа
function generateWeightedNumber(useAlternative = false)
{
  const max = 100;
  const bias = 15.5; // Коэффициент искажения

  if (useAlternative && queueOfX.length > 0)
  {
    // Используем альтернативный метод, если он активен и список не пуст
    return queueOfX.shift().toFixed(2); // Извлекаем первый элемент из списка и удаляем его
  } else
  {
    // Стандартная генерация взвешенного числа
    let random = Math.pow(Math.random(), bias);
    let number = 1 + random * (max - 1);
    return number.toFixed(2);
  }
}

function changeBetButtonsClass(numberButton, className) {
  // Определение классов и соответствующих цветов
  const classes = ["gTqZvy", "zabrat", "ozgidanie", "otmenit"];
  const classToColor = {
    gTqZvy: 'linear-gradient(263.87deg, rgb(148, 78, 245) 0%, rgb(92, 36, 252) 100%)', // Фиолетовый
    zabrat: 'linear-gradient(263.87deg, rgb(245, 78, 118) 0%, rgb(252, 36, 75) 100%)', // Розовый
    otmenit: 'linear-gradient(263.87deg, rgb(245, 78, 118) 0%, rgb(252, 36, 75) 100%)', // Красный
    ozgidanie: 'transparent' // Предположим, что оранжевый цвет для "Ожидания" будет прозрачным
  };
  
  // Соответствие классов тексту кнопки
  const classToButtonText = {
    ozgidanie: 'Ожидание',
    gTqZvy: 'Ставка',
    zabrat: 'Забрать',
    otmenit: 'Отменить'
    // Добавьте другие соответствия здесь, если необходимо
  };

  function updateButtonClass(button) {
    // Удаляем предыдущие классы, чтобы избежать конфликтов
    button.classList.remove(...classes);
    // Добавляем новый класс
    button.classList.add(className);
    // Изменяем цвет псевдоэлемента '--after-color' родительского элемента
    const color = classToColor[className] || 'transparent'; // Если класс не определен, задаем transparent
    button.parentElement.style.setProperty('--after-color', color);
    // Изменяем текст кнопки, если для класса определен текст
    const buttonText = classToButtonText[className];
    if (buttonText) {
      button.textContent = buttonText;
    }
  }
  
  // Предположим, что betButton1 и betButton2 определены где-то в вашем коде
  if (numberButton === 1) {
    updateButtonClass(betButton1);
  } else if (numberButton === 2) {
    updateButtonClass(betButton2);
  } else if (numberButton === 0) { // Применяем для всех кнопок
    updateButtonClass(betButton1);
    updateButtonClass(betButton2);
  }
}

//changeBetButtonsClass(1, 'ozgidanie'); // Применяем класс "Ставка" к первой кнопке


let currentNumber = 1.0;

// Функция для анимации числа
function animateNumber(targetX)
{
  const curX = flyaway.children[0]; // Элемент для отображения числа


  currentNumber = 1.0; // Начальное значение
  let step = 0.01; // Начальный шаг изменения числа
  let lastTimestamp = 0; // Время последнего обновления
  let updateInterval = 50; // Интервал обновления в миллисекундах

  //РАБОТА С ПОЛЬЗОВАТЕЛЕМ
  if(isBetInTime && isUserMadeBet)   changeBetButtonsClass(1, 'zabrat'); // Применяем класс "Ставка" к первой кнопке
  
  StartJetPack(targetX);
  function updateNumber(timestamp)
  {
    if (!lastTimestamp) lastTimestamp = timestamp; // Инициализация времени последнего обновления
    const elapsed = timestamp - lastTimestamp; // Вычисляем прошедшее время

    // Обновляем число, если прошло достаточно времени
    if (elapsed > updateInterval)
    {
      currentNumber += step;
      curX.textContent = currentNumber.toFixed(2);
      lastTimestamp = timestamp; // Обновляем время последнего обновления

      // Адаптируем шаг изменения числа
      if (currentNumber < 1.10)
      {
        step = 0.005;
      } else if (currentNumber < 2.0)
      {
        step = 0.009;
      } else
      {
        updateInterval = updateInterval - 0.01; // Уменьшаем интервал обновления для ускорения анимации
        step += 0.0001;
      }
    }

    // Продолжаем анимацию, пока не достигнем целевого значения
    if (currentNumber < targetX)
    { //Крутим
      requestAnimationFrame(updateNumber);
    } else if (currentNumber >= targetX && targetX > 1.2)
    {
      flyawayJetPack(targetX);  //Улетел - просто переименование стиля

    }
  }

  requestAnimationFrame(updateNumber);
}

animateNumber(1.04); // Запускаем анимацию числа


function waitForAnimationToComplete(flag) 
{
  return new Promise(resolve =>
  {
    const intervalId = setInterval(() =>
    {
      if (!window[flag])
      {
        clearInterval(intervalId);
        resolve();
      }
    }, 100); // Проверяем каждые 100 мс
  });
}
