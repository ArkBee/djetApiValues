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
const currentWinInButton = document.querySelector("#make-bet-button > div > div.currentWin.zabratX");



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
PlusButton1.addEventListener('click', () => BetSizeChange('+', 10, 1));

const MinusButton1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-gJqSRm.fFHqHx > div:nth-child(1) > button");
MinusButton1.addEventListener('click', () => BetSizeChange('-', 10, 1));

const Plus50Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(1) > button");
Plus50Button1.addEventListener('click', () => BetSizeChange('+', 50, 1));

const Plus100Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(2)");
Plus100Button1.addEventListener('click', () => BetSizeChange('+', 100, 1));

const Plus200Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(3) > button");
Plus200Button1.addEventListener('click', () => BetSizeChange('+', 200, 1));

const Plus500Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(4) > button");
Plus500Button1.addEventListener('click', () => BetSizeChange('+', 500, 1));

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
let canBetToThisRound = false; //Флаг для индикации вовремя ли ставка. TRUE - МОЖНО ДЕЛАТЬ СТАВКУ, FALSE - НЕЛЬЗЯ ДЕЛАТЬ СТАВКУ

// Флаги для проверки взаимодействия с пользователем
let isBetInTime = false; // Если ставка сделана вовремя, то она вычисляется выйгрыш относительно коэффициента
let BetSize = 10.00;

let balanceValue = 500.01; // Баланс пользователя

/**
 * Изменение операции с балансом
 * @param {boolean} operation какое дейсвие true + | false -.
 * @param {number} value размер проигрыша или выйгрыша 
 */
function updateBalance(operation, value)
{
  value = parseFloat(value.toFixed(2));
  if (operation) balanceValue += value;
  else balanceValue -= value;
    
  balanceHtml.textContent = `${ (balanceValue.toFixed(2)) } ₽`;

  //TODO добавить обновление баланса при начале раунда
  //TODO добавить обновление баланса при выйгрыше - в calculate WIN
}

/**
 * Изменение назмера ставки.
 * @param {symbol} char какое дейсвие + -.
 * @param {number} value Значение кнопки.
 * @param {number} nubmerOfCounter Номер блока 1 2 3-оба сразу 
 */
function BetSizeChange(char = '+', value, nubmerOfCounter = 1) 
{
  if (char === '+') BetSize += value;
  else if (char === '-')
  {
    BetSize -= value;
  }
  if (BetSize < 10) BetSize = 10;
  BetSizeValue1.value = BetSize + ' ₽';
}

// USER VARIABLES
let isUserMadeBet = false; // Чекаем на ставку
let UserBetSize = 0.001;

let queueOfX = [1.54, 12.28, 1.16, 30.39]; // Заранее заданный список чисел

/**
 * Процесс соверщения ставки.
 * @param {symbol} btnNumber нужно для измения состояния кнопки
 */
function makeBet(btnNumber = 1) 
{
  console.info('makeBet');
  console.info('isUserMadeBet ' + isUserMadeBet);
  console.info('isBetInTime ' + isBetInTime);
  console.info('UserBetSize ' + UserBetSize);

  if (!isUserMadeBet && !isBetInTime) // Ставка не сделана и не вовремя > ставим ставку в очередь
  {
    //Делаем СТАВКУ
    isBetInTime = canBetToThisRound; // Статус вовремя ставка или на след рауд true = вовремя, false = на след раунд
    isUserMadeBet = true;
    UserBetSize = BetSize;
    changeBetButtonsClass(btnNumber, 'otmenit');    // Применяем класс "Ставка" к первой кнопке    
  }
  else if (isUserMadeBet && isBetInTime) // Если юзер СДЕЛАЛ ставку и ставка сделана вовремя > кнопка получения выйгрыша
  { //ЗАБИРАЕМ ВЫЙГРЫШ
    console.info('ЗАБИРАЕМ ВЫЙГРЫШ');
    isUserMadeBet = false;
    isBetInTime = false;
    calculateWin();
    //UserBetSize = 0.2;
    changeBetButtonsClass(btnNumber, 'gTqZvy');    // Меняем состояние кнопки на "Ставка"
  }
  else if (isUserMadeBet && isBetInTime && canBetToThisRound) // Если ставка сделана и вовремя и сейчас не можно делать ставку > отменяем ставку
  { //ОТМЕНЯЕМ СТАВКУ
    isUserMadeBet = false;
    changeBetButtonsClass(btnNumber, 'gTqZvy');    // Применяем класс "Ставка" к первой кнопке
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
  //console.info('motionJetPack ИДЁТ АНИМАЦИЯ' );

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
  canBetToThisRound = false; // Вовремя начала раунда, ставки идут на следующий раунд
  if (isMotionJetPackActive) await waitForAnimationToComplete('isMotionJetPackActive');
  if (isFlyawayActive) await waitForAnimationToComplete('isFlyawayActive');
  if (isWaitingProgressBarActive) await waitForAnimationToComplete('isWaitingProgressBarActive');

  // Теперь мы уверены, что другие анимации завершены
  isMotionJetPackActive = true;
  //console.info('StartJetPack ВЗЛЁТ АНИМАЦИЯ' );




  Xg = -95; // Начальное значение X
  Yg = 90;  // Начальное значение Y 90

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
      var newY = Yg + 20; //20
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
  if (isUserMadeBet) // если ставка была, то она сгорела
  {
    isUserMadeBet = false;
    isBetInTime = false;
    // делаем кнопку ставка

  }


  if (X > 1.0 && isUserMadeBet)
  {
    if (isBetInTime) UserBetSize = 0; // Сбрасываем ставку, если она была сделана вовремя
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
            curX.textContent = parseFloat(1.00).toFixed(2);
            WaitingProgreesBar(); // Запускаем анимацию полосы ожидания


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

  let XNow = parseFloat(curX.textContent);
  let win = UserBetSize * XNow; //TODO - calculate win  
  win = parseFloat(win.toFixed(2));//win нужно округлить до 2 числе после знака
  console.info("win: " + win);
  console.info("UserBetSize: " + UserBetSize);
  updateBalance(true, win); //TODO - добавить обновление баланса при выйгрыше

  console.info("XNow: " + XNow);
  console.info("win: " + win);
  notifyWin.children[0].children[0].children[1].textContent = 'x' + XNow;  //notification
  notifyWin.children[0].children[1].children[0].textContent = `${win} ₽`; // how much money is raised
  setElementOpacity(notifyWin, '1');
  setElementOpacity(parrentDivBlock, '0');

  //Убрать уведомление о выйгрыше
  setTimeout(() =>
  {
    setElementOpacity(notifyWin, '0');
  }, 5000);


  //TODO добавить в FLYAway изменение кнопки, если юзер сделал ставку


}
// Есть 2 блока. Находятся друг над другом, при увеличении окна делать так, чтобы они разъезжались и были параллельно. 

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
  canBetToThisRound = true; // Вовремя начала раунда, ставки идут на следующий раунд
  if (!isBetInTime && isUserMadeBet) 
  {
    changeBetButtonsClass(1, 'ozgidanie'); // Применяем класс "Ставка" к первой кнопке    
    updateBalance(false, BetSize); //обновление баланса при проигрыше
  }

  //ws.send("generate");

  if (isUserMadeBet && !isBetInTime)
  {
    isBetInTime = true; // Если ставка была сделана до начала раунда, то она считается вовремя
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

function changeBetButtonsClass(numberButton, className)
{
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

  function updateButtonClass(button)
  {
    // Удаляем предыдущие классы, чтобы избежать конфликтов
    button.classList.remove(...classes);
    // Добавляем новый класс
    button.classList.add(className);
    // Изменяем цвет псевдоэлемента '--after-color' родительского элемента
    const color = classToColor[className] || 'transparent'; // Если класс не определен, задаем transparent
    button.parentElement.style.setProperty('--after-color', color);
    // Изменяем текст кнопки, если для класса определен текст
    const buttonText = classToButtonText[className];
    if (buttonText)
    {
      button.textContent = buttonText;
    }


    // Добавление или обновление элемента с классом 'currentWin zabratX' при нажатии на кнопку "Забрать"
    if (className === 'zabrat') 
    {
      // Проверяем, существует ли уже элемент 'currentWin zabratX' в родительском элементе
      let currentWin = button.parentElement.querySelector('.currentWin.zabratX');
      if (!currentWin)
      {
        // Если элемент не найден, создаем его
        currentWin = document.createElement('div');
        currentWin.className = 'currentWin zabratX';
        currentWin.style.display = 'block'; // Убедитесь, что элемент видим
        currentWin.textContent = '0.00'; // Установите значение или текст, который нужен
        button.prepend(currentWin); // Добавляем созданный элемент в кнопку
      }
      else
      {
        // Если элемент уже существует, обновляем его содержимое
        currentWin.textContent = '0.00'; // Обновите, если требуется
      }
      // Если элемент уже существует, можно обновить его содержимое или стили здесь
    }
  }



  // Предположим, что betButton1 и betButton2 определены где-то в вашем коде
  if (numberButton === 1)
  {
    updateButtonClass(betButton1);
  } else if (numberButton === 2)
  {
    updateButtonClass(betButton2);
  } else if (numberButton === 0)
  { // Применяем для всех кнопок
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
  if (isBetInTime && isUserMadeBet) changeBetButtonsClass(1, 'zabrat'); // Применяем класс "Ставка" к первой кнопке

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

      // при начале раунда, если пользователь сделал ставку, то меняет display с none на block.
      // в конце раунда, если пользователь сделал ставку, то меняет display с block на none.
      if (isUserMadeBet && currentNumber <= 1.0)
      {
        changeBetButtonsClass(1, 'zabrat');
        console.info("СДЕЛАЛИ КНОПКИ Забрать СТРОКА 628--------")
      }
      else if(isUserMadeBet && currentNumber > 1.3)
      {
        console.info("СТРОКА 632 "+ currentWinInButton.textContent);
        //проверка currentWinInButton на существование 
        if (currentWinInButton.textContent.length>1)
        {
          currentWinInButton.textContent = UserBetSize +' ₽';
        } 
        else 
        {
          console.info("ХУУУУЙ")
          currentWinInButton = document.querySelector("#make-bet-button > div > div.currentWin.zabratX");
          currentWinInButton.textContent = currentNumber +' ₽';
        }
      
        
      }

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
      changeBetButtonsClass(0, 'gTqZvy'); //Делаем все кнопки доступными к 
      console.info("СДЕЛАЛИ КНОПКИ Ставка")
      currentWinInButton.style.display = 'none'; //Скрываем div с индикатором выйгрыша
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
