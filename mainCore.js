class BetBlock 
{
  /**
   * 
   * @param {number} sizeBet - Размер ставки
   * @param {number} id - ID блока
   */
  constructor(sizeBett = 10.00, id)
  {
    this.ID = id; // Инициализация ID блока
    this._isMadeBet = false; // Инициализация состояния "Ставка сделана"
    this._isBetToNextRound = false; // Инициализация состояния "Ставка на след раунд"
    this._sizeBet = sizeBett; // Инициализация "Размер ставки"
    this._userBetSize = 0; // "Размер ставки пользователя" инициализируется отдельно
    this._winAmount = 0; // Инициализация "Выигрыш по ставке"
    this._buttonStatus = 'gTqZvy'; // Статус кнопки
    this._showNotifyWin = null; // Сиюда кидаем подписку на собитие
    this._lastWin = 0; // Последний выигрыш
  }
  /**
  * @param {number} sizeBet - рАзмер ставки в Input поле
  */
  set sizeBet(size)
  {
    if (DEV_MODE) console.info('ALOOOOOOOOOOOOOOOO    ' + size);
    size = Math.max(10, size); // Устанавливаем нижний предел в 10
    size = Math.min(size, 10000); // Устанавливаем верхний предел в 10000
    this._sizeBet = size;
    this.triggerEvent('sizeBetChanged', size);
  }
  get sizeBet()
  {
    return this._sizeBet;
  }


  /**
   * @param {boolean} isBet - Сюда кидаем значение canBetToThisRound и меняем значение на противоположное
   *  
   */
  //isBetToNextRound
  set isBetToNextRound(isBet)
  {
    this._isBetToNextRound = isBet;
  }
  get isBetToNextRound()
  {
    return this._isBetToNextRound;
  }

  /**
   * @param {number} valueOfWin - Сколько игрок выйграл в последней игре
   */
  set lastWin(valueOfWin)
  {
    this._lastWin = valueOfWin;
    this.triggerEvent('lastWinChanged', this._lastWin);
  }
  get lastWin()
  {
    return this._lastWin;
  }

  /**
   * @param {*} UserBetSize - Размер ставки пользователя
   */
  set UserBetSize(size)
  {
    this._userBetSize = size;
    this.triggerEvent('UserBetSizeChanged', size);
  }
  get UserBetSize()
  {
    return this._userBetSize;
  }

  /**
   * @param {boolean} isMade - Сделана ли ставка
   */
  set isMadeBetToThisRound(isMade)
  {
    this._isMadeBet = isMade;
  }
  get isMadeBetToThisRound()
  {
    return this._isMadeBet;
  }

  /**
   * @param {string} status - Статус кнопачки))
   */
  set buttonStatus(status)
  {
    this._buttonStatus = status;
    this.triggerEvent('buttonStatusChanged', this._buttonStatus); // Вызываем событие
  }
  get buttonStatus()
  {
    return this._buttonStatus;
  }

  setOnChange(callback)
  {
    this._showNotifyWin = callback;
  }

  // Пример метода для вызова "ивента"
  triggerEvent(eventName, value) 
  {
    // Здесь можно добавить любую логику, например, изменение DOM или отправку данных на сервер
    //если изменнена ставка, то меняем в DOM
    if (eventName === 'sizeBetChanged')
    {
      if (DEV_MODE) console.info('В КЛАССЕ ----(sizeBetChanged)---- ' + value);
      //нормализуем и лепим в DOM    
      let divArea = this.ID === 1 ? BetSizeValue1 : BetSizeValue2;
      let inputArea = this.ID === 1 ? inputBetBlockSize1 : inputBetBlockSize2;

      let newValue = getFormattedNumber(value);
      divArea.innerHTML = newValue;
      inputArea.value = newValue;//TODO изменить значение в DOM
    }
    else if (eventName === 'buttonStatusChanged')
    {
      if (DEV_MODE) console.info('В КЛАССЕ ----(buttonStatusChanged)---- ' + value);
      changeBetButtonsClass(this.ID, value); //вызываем изменение кнопки
    }
    else if (eventName === 'lastWinChanged') //Работаем с блансом, плавно увеличиваем значение
    {
      UserInfo.balanceValue += value;
      this._lastWin = 0;
    }
  }

  // Метод для обновления выигрыша
  set winAmount(amount)
  {
    this._winAmount = amount;
    if (this._showNotifyWin) this._showNotifyWin(amount);
  }
  get winAmount()
  {
    return this._winAmount;
  }


}


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
let currentWinInButton = document.querySelector("#make-bet-button > div > div.currentWin.zabratX");



// 1 окно управления ставкой
let inputBetBlockSize1 = document.querySelectorAll('#bet-amount-mobile-input')[0]; // Цифра ставки в 1 блоке
let inputBetBlockSize2 = document.querySelectorAll('#bet-amount-mobile-input')[1]; // Цифра ставки в 2 блоке
let BetSizeValue1 = document.querySelectorAll('#bet-size > div:nth-child(1)')[0]; // Цифра ставки в 1 блоке
let BetSizeValue2 = document.querySelectorAll('#bet-size > div:nth-child(1)')[1]; // Цифра ставки в 2 блоке

// Создаём элементы класса для блоков
const BetBlock1 = new BetBlock(10.00, 1);
const BetBlock2 = new BetBlock(10.00, 2);

inputBetBlockSize1.addEventListener('oninput', () =>
{
  if (DEV_MODE) console.info('ТУТ 23|| ' + inputBetBlockSize1.value);
  updateBetSizeValue(BetBlock1);
});

//onchange
inputBetBlockSize1.addEventListener('change', () =>
{
  updateBetSizeValue(BetBlock1);
});

inputBetBlockSize1.addEventListener('click', () =>
{
  if (DEV_MODE) console.info('CKIIICK');
  BetSizeValue1.style.opacity = 0;
});

inputBetBlockSize1.addEventListener('onchange', () =>
{
  updateBetSizeValue(BetBlock1);
  BetSizeValue1.style.opacity = 1;
});




//БЛОК ВТОРОЙ МЕНЮШКИ
//переделать под 2 версию
inputBetBlockSize2.addEventListener('oninput', () =>
{
  if (DEV_MODE) console.info('ТУТ 51|| ' + inputBetBlockSize2.value);
  updateBetSizeValue(BetBlock2);
});

//onchange
inputBetBlockSize2.addEventListener('change', () =>
{
  updateBetSizeValue(BetBlock2);
});

inputBetBlockSize2.addEventListener('click', () =>
{
  if (DEV_MODE) console.info('CKIIICK');
  BetSizeValue2.style.opacity = 0;
});

inputBetBlockSize2.addEventListener('onchange', () =>
{
  BetSizeValue2.style.opacity = 1;
  updateBetSizeValue(BetBlock2);
});


function makeNotifyWinVisible(visible, time = 400, nubmerOfCounter = 1)
{
  let startTime;
  // Функция для анимации
  const animate = (timestamp) =>
  {
    if (!startTime) startTime = timestamp;
    const progress = (timestamp - startTime) / time;
    if (visible)
    {
      const opacity = Math.min(progress, 1); // Устанавливаем прозрачность от 0 до 1
      const translateY = Math.min(100 * progress, 100); // Перемещаем от 0 до 100px по Y
      notifyWin.style.opacity = opacity;
      notifyWin.style.transform = `translateY(${ translateY + 10 }px)`;
      if (progress < 1)
      {
        // Продолжаем анимацию, если прогресс меньше 1
        requestAnimationFrame(animate);
      }
    } else
    {
      const opacity = Math.max(1 - progress, 0); // Устанавливаем прозрачность от 1 до 0
      const translateY = Math.max(100 - 100 * progress, 0); // Перемещаем от 100 до 0px по Y
      notifyWin.style.opacity = opacity;
      notifyWin.style.transform = `translateY(${ translateY + 10 }px)`;
      if (progress < 1)
      {        // Продолжаем анимацию, если прогресс меньше 1
        requestAnimationFrame(animate);
      }
      // Если нужно сделать не видимым, можно добавить здесь код для обратной анимации
    }
  };
  requestAnimationFrame(animate);
}

function getFormattedNumber(value) //getFormattedNumber
{
  let result = '';
  //Если значение больше 1000, то делим rezult должен ставить '&nbsp;' после тысячной части
  if (value >= 1000)
  {
    let str = value.toString();
    if (str.length > 3)
    {
      let index = str.length - 3;
      let part1 = str.substring(0, index);
      let part2 = str.substring(index);
      result = part1 + ' ' + part2;
      return result;
    }
  }
  else return value;
}

/** 
 * @param {BetBlock} bBlock //какой блок используется
 */
function updateBetSizeValue(bBlock) //обновляем значение Блоков в классе
{
  if (DEV_MODE) console.info('==========updateBetSizeValue===========');
  // Определяем, какое поле ввода используется, и соответствующее начальное значение
  let inputBetSizeArea = bBlock.ID === 1 ? inputBetBlockSize1 : inputBetBlockSize2;
  if (DEV_MODE) console.info('ЗНАЧЕНИЕ БЛОКА inputBetSizeArea' + inputBetSizeArea.value + '  <<<');
  bBlock.sizeBet = parseFloat(inputBetSizeArea.value.replace(/\s/g, '') || 0); // Преобразуем введённое значение в число
  if (DEV_MODE) console.info('ОБНОВИЛИ ЗНАЧЕНИЕ БЛОКА ID' + bBlock.ID + ' НА ' + bBlock.sizeBet);
  if (DEV_MODE) console.info('::::::::::::updateBetSizeValue::::::::::::');
}

/**
 * Изменение назмера ставки.
 * @param {symbol} char какое дейсвие + -.
 * @param {number} value Значение кнопки.
 * @param {BetBlock} bBlock Номер блока 1 2 3-оба сразу 
 */
function BetSizeChange(char = '+', value, bBlock) 
{

  if (DEV_MODE) console.info('-------------BetSizeChange--------------');
  if (DEV_MODE) console.info('---------bBlock.ID ' + bBlock.ID + '---------');
  if (DEV_MODE) console.info('Старое значение bBlock.BetSize ' + bBlock.sizeBet);
  // Проверяем, является ли value числом и больше нуля
  if (typeof value !== 'number' || value <= 0) 
  {
    console.error('Value должно быть положительным числом');
    return;
  }

  // Изменяем размер ставки
  if (char === '+')
  {
    let oldValue = bBlock.sizeBet;
    bBlock.sizeBet = oldValue + value;
  }
  else if (char === '-') bBlock.sizeBet -= value;


  if (DEV_MODE) console.info('Новое значение BetSize ' + bBlock.sizeBet);
  // Обновляем значение в поле ввода
  var event = new Event('change');
  //inputBetSizeArea.dispatchEvent(event);

}


//СТАВКА
const betButton1 = document.querySelectorAll("#make-bet-button > div")[0];
betButton1.addEventListener('click', () => makeBet(BetBlock1));

const PlusButton1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-gJqSRm.fFHqHx > div:nth-child(3) > button > div");
PlusButton1.addEventListener('click', () => BetSizeChange('+', 10, BetBlock1));

const MinusButton1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-gJqSRm.fFHqHx > div:nth-child(1) > button");
MinusButton1.addEventListener('click', () => BetSizeChange('-', 10, BetBlock1));

const Plus50Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(1) > button");
Plus50Button1.addEventListener('click', () => BetSizeChange('+', 50, BetBlock1));

const Plus100Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(2)");
Plus100Button1.addEventListener('click', () => BetSizeChange('+', 100, BetBlock1));

const Plus200Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(3) > button");
Plus200Button1.addEventListener('click', () => BetSizeChange('+', 200, BetBlock1));

const Plus500Button1 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(4) > button");
Plus500Button1.addEventListener('click', () => BetSizeChange('+', 500, BetBlock1));

// 2 окно управления ставкой
const betButton2 = document.querySelectorAll("#make-bet-button > div")[1];
betButton2.addEventListener('click', () => makeBet(BetBlock2));

const PlusButton2 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(2) > div.sc-ikHGee.eWVHSl > div > div.sc-gJqSRm.fFHqHx > div:nth-child(3) > button");
PlusButton2.addEventListener('click', () => BetSizeChange('+', 10, BetBlock2));

const MinusButton2 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(2) > div.sc-ikHGee.eWVHSl > div > div.sc-gJqSRm.fFHqHx > div:nth-child(1) > button");
MinusButton2.addEventListener('click', () => BetSizeChange('-', 10, BetBlock2));

const Plus50Button2 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(2) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(1) > button");
Plus50Button2.addEventListener('click', () => BetSizeChange('+', 50, BetBlock2));

const Plus100Button2 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(2) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(2)");
Plus100Button2.addEventListener('click', () => BetSizeChange('+', 100, BetBlock2));

const Plus200Button2 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(2) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(3) > button");
Plus200Button2.addEventListener('click', () => BetSizeChange('+', 200, BetBlock2));

const Plus500Button2 = document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(2) > div.sc-ikHGee.eWVHSl > div > div.sc-evzXkX.bOKBzH > div:nth-child(4) > button");
Plus500Button2.addEventListener('click', () => BetSizeChange('+', 500, BetBlock2));


//DEVMODE ********************************************************************************************************************
const DEV_MODE = false; // Режим разработчика (Вывод в консоль)

// Очередь чисел
function loadScript(url, callback)
{
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  script.onload = () =>
  {
    if (callback)
    {
      callback();
    }
  };

  document.head.appendChild(script);
}

loadScript('.\\x.js', function ()
{
  console.log('Скрипт загружен и выполнен. v0.9 Новый расчёт движения');
});

let queueOfX = [12.54, 120.28, 1.16, 30.39]; // Заранее заданный список чисел
let token = "";
let userID = "";

// Глобальные переменные для координат
let Xg = -95; // Начальное значение X
let Yg = 90;  // Начальное значение Y
let arrowX = true; // Направление движения по X
let arrowY = true; // Направление движения по Y
let animationFrameId = null; // ID анимации

let centerOfJetPack = curX.offsetLeft + curX.offsetWidth*0.5; // Центральная точка JetPack

//Флаги состояний для функций анимаций
let isMotionJetPackActive = false;
let isNumberActive = false;
let isFlyawayActive = false;
let isWaitingProgressBarActive = false;
let isNotifyWinActive = false;
/**
 * СТатус приёма заявок на раунд. TRUE - МОЖНО ДЕЛАТЬ СТАВКУ, FALSE - НЕЛЬЗЯ ДЕЛАТЬ СТАВКУ
 */
let canBetToThisRound = false;
let currentNumber = 1.0; // Начальное значение

updateBetSizeValue(BetBlock1);
updateBetSizeValue(BetBlock2);
//let nubmerOfCounterBlockOfBet = 0; //TODO - определить какой блок ставки был использован 0 = не использован, 1 = первый блок, 2 = второй блок, 3 = оба блока
// USER VARIABLES

const UserInfo = {
  _balanceValue: 500.001, // Начальный баланс пользователя
  animationFrameId: null, // ID текущей анимации для возможности её отмены

  set balanceValue(newValue)
  {
    // Отменяем предыдущую анимацию, если она была запущена
    if (this.animationFrameId)
    {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.animateBalanceChange(newValue);
  },

  get balanceValue()
  {
    return this._balanceValue;
  },

  animateBalanceChange(newValue)
  {
    const duration = 500; // Длительность анимации в миллисекундах
    const startValue = this._balanceValue;
    const change = newValue - startValue; // Общее изменение, которое нужно анимировать
    let startTime = null;

    const animate = (timestamp) =>
    {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Прогресс от 0 до 1

      // Вычисляем текущее значение для анимации
      this._balanceValue = startValue + change * progress; // Обновляем напрямую _balanceValue
      balanceHtml.textContent = `${ this._balanceValue.toFixed(2) } ₽`;

      if (progress < 1)
      {
        this.animationFrameId = requestAnimationFrame(animate);
      } else
      {
        this._balanceValue = newValue; // Устанавливаем точное конечное значение
        balanceHtml.textContent = `${ this._balanceValue.toFixed(2) } ₽`;
        this.animationFrameId = null; // Сброс ID анимации
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }
};




/**
 * Изменение баланса пользователя.
 * @param {boolean} operation какое действие true (+) | false (-).
 * @param {BetBlock} betBlock объект ставки, содержащий размер выигрыша или проигрыша.
 */
function updateBalance(operation, betBlock)
{
  // TODO: Добавить обновление баланса при начале раунда
  // TODO: Добавить обновление баланса при выигрыше - в функции calculateWin


  // Преобразуем размер ставки пользователя к числу с двумя знаками после запятой
  if (DEV_MODE) console.info('betBlock.UserBetSize  ' + betBlock.UserBetSize);
  if (DEV_MODE) console.info('*************updateBalance*****************');
  const value = parseFloat(betBlock.UserBetSize.toFixed(2));

  // Изменяем баланс пользователя в зависимости от операции
  if (operation)
  {
    UserInfo.balanceValue += value;
  } else
  {
    UserInfo.balanceValue -= betBlock.UserBetSize;
  }

  // Обновляем отображение баланса пользователя на странице
  //balanceHtml.textContent = `${UserInfo.balanceValue.toFixed(2)} ₽`;
}



/**
 * Процесс соверщения ставки.
 * @param {BetBlock} Block нужно для изменения состояния кнопки (1 или 2 для betBlock1 или betBlock2)
 */
function makeBet(Block)
{
  if (DEV_MODE) console.info('*************makeBet*****************');
  if (DEV_MODE) console.info('*************VERSION *****************');
  //disableAllButtons(Block.ID, true); // Делаем кнопки недоступными
  /**
   * Проверка на возможность сделать ставку
   */
  if (Block.isMadeBetToThisRound) // Если ставка уже сделана > Забираем выйгрыщ
  {
    if (DEV_MODE) console.info('Если ставка уже сделана > Забираем выйгрыш');
    Block.isMadeBetToThisRound = false;
    calculateWin(Block);
    Block.UserBetSize = 0; // Обнуляем размер ставки
    Block.buttonStatus = 'gTqZvy'; // Возвращаем кнопку в исходное состояние  

    disableAllButtons(Block.ID, false);//активаровать кнопки
  }
  else if (Block.isBetToNextRound) // Если ставка сделана на следующий раунд > Отменяем
  {
    if (DEV_MODE) console.info('Если ставка сделана на следующий раунд > Отменяем');
    Block.isBetToNextRound = false;
    Block.UserBetSize = 0; // Обнуляем размер ставки
    Block.buttonStatus = 'gTqZvy'; // Возвращаем кнопку в исходное состояние
    disableAllButtons(Block.ID, false);//активаровать кнопки

  }
  else if (!Block.isMadeBetToThisRound && !Block.isBetToNextRound) //Если ставка не сделана и нет на следующий раунд > ставим ставку
  {
    if (DEV_MODE) console.info('Если ставка НЕ сделана на следующий раунд > ставим ставку');
    if (DEV_MODE) console.info('Block.sizeBet : ' + Block.sizeBet);
    Block.isBetToNextRound = true;
    Block.UserBetSize = Block.sizeBet; // Устанавливаем размер ставки
    Block.buttonStatus = 'otmenit'; // Меняем статус кнопки
  }
  else
  {
    if (DEV_MODE) console.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    if (DEV_MODE) console.info('Ставка не сделана');
    if (DEV_MODE) console.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  }

  if (DEV_MODE)
  {
    console.info('isMadeBetToThisRound ' + Block.isMadeBetToThisRound);
    console.info('isBetToNextRound ' + Block.isBetToNextRound);
    console.info('UserBetSize ' + Block.UserBetSize);
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


  AllJettPak.style.opacity = '1';
  JetPak.style.opacity = "1";

  if (Xg < centerOfJetPack + 50) arrowX = true; //левый барьер
  if (Xg > centerOfJetPack + 110) arrowX = false; //правый барьер

  if (Yg < -65) arrowY = true;
  if (Yg > -55) arrowY = false;

  Xg += arrowX ? 0.15 : -0.1;
  Yg += arrowY ? 0.07 : -0.06;

  JetPak.style.transform = `translate(${ Xg }px, ${ Yg }px)`;


  var newX = Xg - 70 * 2.5;
  var newY = Yg + 20;
  // if(DEV_MODE) console.info('newY ' + newY);
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

  let targetYg =  -curX.offsetTop +curX.offsetHeight *2.5 ;; // Конечная при 100%  
  let targetXg =  curX.offsetLeft *1.4; // Конечная при 100%
  console.info("targetXg: "+ targetXg);




async function StartJetPack(coefficientX)
{
  canBetToThisRound = false; // Вовремя начала раунда, ставки идут на следующий раунд
  if (isMotionJetPackActive) await waitForAnimationToComplete('isMotionJetPackActive');
  if (isFlyawayActive) await waitForAnimationToComplete('isFlyawayActive');
  if (isWaitingProgressBarActive) await waitForAnimationToComplete('isWaitingProgressBarActive');

  // Теперь мы уверены, что другие анимации завершены
  isMotionJetPackActive = true;

  Xg = -95; // Начальное значение X
  Yg = 90;  // Начальное значение Y 90

  function calculateEndValue(X, targetX) 
  {
    // Проверяем, что X находится в допустимом диапазоне
    if (X < 1.00 || X > 1.10) 
    {      
      return targetX;
    }  
    // Преобразование X в процентное соотношение относительно диапазона 1.01 - 1.20
    const percentage = (X - 1.00) / (1.20 - 1.10);  
    // Вычисление соответствующего значения endValue
    const endValue = percentage * targetX;  
    return endValue;
  }

  // Расчитываем конечную Yg в зависимости от коэффициента X
  //let percent = coefficientX > 1.20 ? 100 : (coefficientX - 1.00) * (100 / (1.20 - 1.00));
  let endPointX = calculateEndValue(coefficientX, targetXg);  
  let endPointY = calculateEndValue(coefficientX, targetYg);
  //let percent = endPointX/ targetXg * 100;  


  //let StepYg = ((percent / 100 * endPointY) - Yg)/100; // Конечная при 100% - Yg
  let StepYg = endPointY/35 ; // Конечная при 100% - Yg
  let StepXg = endPointX / 70; // Конечная при 100% - Xg

  console.info("StepXg: "+ StepXg);
     
  // Рассчитываем процент выполнения анимации на основе коэффициента X
  
  let targetX = endPointX; // Целевая позиция X в зависимости от процента выполнения (centerOfJetPack + 43) * completionPercentage;
  console.info("targetX: "+ targetX);
  setElementOpacity(JetPak, '1');
  setElementOpacity(AllJettPak, '1');
  setElementOpacity(Waiting, '0');
  let acceleration = 0.01; // Ускорение

  function animateStart()
  {
    if (Xg < targetX )
    {
      console.info("Xg: "+ Xg);

      Xg += StepXg * acceleration; // Скорость движения      
      Yg += StepYg * acceleration; // Скорость движения
      if(Xg < targetX/3) acceleration += 0.01; // Ускорение
    
      
     // if (completionPercentage < 0.5)  Yg -= 0.1; // Скорость движения

      JetPak.style.transform = `translate(${ Xg }px, ${ Yg }px)`;

      // Обновляем координаты для анимаций прыжка
      var newX = Xg - 70 * 2.5;
      var newY = Yg + 20; //20
      //if(DEV_MODE) console.info('newY ' + newY);
      var newD = `M -95 190 Q ${ 167 + newX } 190 ${ 250 + newX } ${ newY }`;
      jumpLine1.setAttribute('d', newD); // Обновляем атрибут 'd' для первой линии
      jumpLine2.setAttribute('d', newD + ` L ${ 250 + newX } 190 Z`); // Обновляем атрибут 'd' для второй линии

      requestAnimationFrame(animateStart); // Запрашиваем следующий кадр анимации
    }
    else if (Xg >= targetX && coefficientX <= 1.20)
    {
      isMotionJetPackActive = false;      
      //flyawayJetPack(coefficientX); // Запускаем анимацию улетания JetPack
    }
    else if (coefficientX >= 1.20)
    {
      isMotionJetPackActive = true;      
      motionJetPack(); // Запускаем анимацию JetPack
    }
  }

  animateStart(); // Запускаем анимацию
}

// Функция для "улетания" JetPack
async function flyawayJetPack(X)
{
  if (isUserMadeBet()) // если ставка была, то она сгорела
  {
    if (DEV_MODE) console.info("СДЕЛАЛИ КНОПКИ Ставка")
    let allBets = checkAndGetBetBlocks('isMadeBetToThisRound'); // Сбрасываем флаг ставки

    if (allBets !== null && allBets.length > 0)
    {
      /**
      * 
      * @param {BetBlock} element
      * */
      allBets.forEach(element => 
      {
        if (!element.isMadeInTime) //Если ставка сделана вовремя, то сбрасываем её - так-как раунд сгорел
        {
          element.UserBetSize = 0;
          //TODO - сделать функцию для сброса ставки
          element.isMadeBetToThisRound = false;
          element.buttonStatus = 'gTqZvy'; // Меняем состояние кнопки на "Ставка"  
          disableAllButtons(element.ID, false); // Активируем кнопки
        }

      });
    }

  }


  // Корректируем последнее значение, чтобы точно соответствовать цели
  curX.textContent = parseFloat(X).toFixed(2);
  parrentDivBlock.prepend(createClass(X)); // Добавляем новый блок с числом в верхнюю часть экрана


  if (isMotionJetPackActive) await waitForAnimationToComplete('isMotionJetPackActive');
  if (isFlyawayActive) await waitForAnimationToComplete('isFlyawayActive');
  if (isWaitingProgressBarActive) await waitForAnimationToComplete('isWaitingProgressBarActive');

  isFlyawayActive = true;
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
          }, 2000);
        }, 3000);

      }

      requestAnimationFrame(animateFlyAway);
    }
  }
  animateFlyAway();
  ////if(DEV_MODE) console.info('flyawayJetPack'); 
}


/**
 * 
 * @param {BetBlock} block 
 */
function calculateWin(block) //TODO - добавить обновление баланса при выйгрыше
{
  setElementOpacity(Waiting, '0');
  let XNow = parseFloat(curX.textContent);

  let localBetSize = block.UserBetSize; //TODO - определить размер ставки
  let win = localBetSize * XNow; //TODO - calculate win  
  win = parseFloat(win.toFixed(2));//win нужно округлить до 2 числе после знака
  block.lastWin = win; //Произойдёт автоматический расчёт баланса


  if (DEV_MODE) console.info("Win: " + win);
  if (DEV_MODE) console.info("UserBetSize: " + localBetSize);
  if (DEV_MODE) console.info("XNow: " + XNow);

  //TODO СДЕЛАТЬ ПОД ДВОЙНОЙ X
  notifyWin.children[0].children[0].children[1].textContent = 'x' + XNow;  //notification
  notifyWin.children[0].children[1].children[0].textContent = `${ win } ₽`; // how much money is raised
  makeNotifyWinVisible(true);


  //Убрать уведомление о выйгрыше
  setTimeout(() =>
  {
    makeNotifyWinVisible(false);
  }, 5000);
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
  canBetToThisRound = true; // Приём заявок на раунд активен 
  isWaitingProgressBarActive = true; // Устанавливаем флаг активности анимации

  let x = null; // Генерируем новое число
  //x = generateWeightedNumber(true); // Генерируем новое число true - работа с очередью
  if (isMotionJetPackActive) await waitForAnimationToComplete('isMotionJetPackActive');
  if (isFlyawayActive) await waitForAnimationToComplete('isFlyawayActive');
  if (isWaitingProgressBarActive) await waitForAnimationToComplete('isWaitingProgressBarActive');


  setElementOpacity(JetPak, '0');
  setElementOpacity(AllJettPak, '0');
  setElementOpacity(notifyWin, '0');
  setElementOpacity(waitNextRound, '1');
  setElementOpacity(curX, '0'); ///////////////////////ТЕСТ
  curX.textContent = parseFloat(1.00).toFixed(2); // Устанавливаем начальное значение X

  for (let end = 100; end > 0; end--)
  {
    await new Promise(resolve => setTimeout(resolve, 50));
    waitNextRound.children[2].children[0].style.width = `${ end }%`;
    if (end == 50) 
    {
      x = generateWeightedNumber(true); // Генерируем новое число true - работа с очередью 
      if (token !== '')
      {
        let text = "\\*\\*\\* _Следующий раунд: " + (x <= 2 ? "🟥" : "🟩") + "_ *" + x + "* \\*\\*\\*";
        console.info(text);
        let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + userID +
          '&parse_mode=Markdown&text=' + text;
        fetch(url)
          .then(response => response.json())
          .then(data => console.log('Ответ от Telegram API:', data))
          .catch(error => console.error('Ошибка:', error));
      }


    }
    else if (end == 25 && isUserMadeBet())    // Если осталось 20% времени до следующего раунда
    {
      if (DEV_MODE) console.info('==============25================');
      if (canBetToThisRound) // Делаем все ставки которые были в очереди > активными
      {
        let blocks = checkAndGetBetBlocks('isBetToNextRound'); // Получаем все блоки в которых есть ставки на следующий раунд
        if (blocks !== null)
        {
          blocks.forEach(element =>
          {
            // element.isBetToNextRound = false; // Ставка сделана вовремя
            // element.isMadeBetToThisRound = true; // Ставка сделана вовремя

            element.buttonStatus = 'ozgidanie'; // Меняем состояние кнопки на "Забрать"
            disableAllButtons(element.ID, true); // Делаем кнопки недоступными
          });
        }
        else
        {
          if (DEV_MODE) console.info('blocks === null');
        }

      }
    }
    else if (end == 5) // Если осталось 5% времени до начала раунда
    {
      canBetToThisRound = false; // Приём заявок на раунд закрыт
    }

  }
  setElementOpacity(waitNextRound, '0');
  setElementOpacity(Waiting, '1');

  isWaitingProgressBarActive = false; // Сбрасываем флаг активности анимации

  setTimeout(() => 
  {

    let blocks = checkAndGetBetBlocks('isBetToNextRound'); // Получаем все блоки в которых есть ставки на следующий раунд
    if (blocks !== null)
    {
      blocks.forEach(element =>
      {
        element.isBetToNextRound = false; // Ставка сделана вовремя
        element.isMadeBetToThisRound = true; // Ставка сделана вовремя

        UserInfo.balanceValue -= element.UserBetSize; // Обновляем баланс пользователя

        element.buttonStatus = 'zabrat'; // Меняем состояние кнопки на "Забрать"
        disableAllButtons(element.ID, true); // Делаем кнопки доступными
      });
      console.log("x: " + x);

    }
    animateNumber(x); //Начать новый раунд      
  }, 2000);
  return;
}




/**
 * Создаёт новый блок с прошлым значением X и добавляет его в верхнюю часть экрана.
 * @param {*} value  * 
 */
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


/**
 * Изменение видимости элемента
 * @param {*} element 
 * @param {*} opacityValue 
 */
function setElementOpacity(element, opacityValue)
{
  element.style.opacity = opacityValue;
}



/**
 * Функция для генерации следующего числа
 * @param {boolean} useAlternative  Флаг для выбора числа из списка, а не генерации
 * @returns 
 */
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


/**
 * Функция которая делает все button и input неактивными (disabled)
 * @param {BetBlock.ID} numberBlock нужно для изменения состояния кнопки (1 или 2 для betBlock1 или betBlock2)
 * @param {boolean} isDisabled true - делаем кнопки неактивными, false - делаем кнопки активными
 */
function disableAllButtons(numberBlock, isDisabled) 
{
  // Получаем блоки по условию
  const betBlock1 = numberBlock === 1 || numberBlock === 0 ? document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(1)") : null;
  const betBlock2 = numberBlock === 2 || numberBlock === 0 ? document.querySelector("#mobile > div.sc-jeToga.ftrNPE > div.sc-xWrgk.fxrtqY.sc-cTVMo.fqEwAc > div:nth-child(2)") : null;

  function disableAllElements(elements, isDisabled)
  {
    elements.forEach(element =>
    {
      if (element.id !== 'make-bet-button' && !element.classList.contains("zabrat"))
      { // Проверяем, что id элемента не 'make-bet-button' и не zabratX
        if (isDisabled) element.setAttribute('disabled', ''); // Делаем элемент недоступным
        else element.removeAttribute('disabled'); // Делаем элемент доступным
      }
    });
  }

  // Получаем все кнопки и инпуты для каждого блока
  if (betBlock1)
  {
    const buttonsOfBlock1 = betBlock1.querySelectorAll('button');
    const inputsOfBlock1 = betBlock1.querySelectorAll('input');
    disableAllElements([...buttonsOfBlock1, ...inputsOfBlock1], isDisabled);
  }

  if (betBlock2)
  {
    const buttonsOfBlock2 = betBlock2.querySelectorAll('button');
    const inputsOfBlock2 = betBlock2.querySelectorAll('input');
    disableAllElements([...buttonsOfBlock2, ...inputsOfBlock2], isDisabled);
  }
}



/**
 * Меняет класс кнопок ставки.
 * @param {number} numberButton Номер кнопки (1 или 2) или 0 для всех кнопок
 * @param {string} className Статус кнопки (gTqZvy, zabrat, ozgidanie, otmenit)
 */
function changeBetButtonsClass(numberButton, className)
{
  if (DEV_MODE) console.info('*************changeBetButtonsClass*****************');
  if (DEV_MODE) console.info('numberButton ' + numberButton);
  if (DEV_MODE) console.info('className ' + className);
  if (DEV_MODE) console.info('*************changeBetButtonsClass*****************');
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
    button.classList.remove(...classes); // Удаляем предыдущие классы, чтобы избежать конфликтов    
    button.classList.add(className); // Добавляем новый класс кнопке

    // Изменяем цвет псевдоэлемента '--after-color' родительского элемента
    const color = classToColor[className] || 'transparent'; // Если класс не определен, задаем transparent
    button.parentElement.style.setProperty('--after-color', color);
    button.textContent = classToButtonText[className]; // Изменяем текст кнопки, если для класса определен текст


    // Добавление или обновление элемента с классом 'currentWin zabratX' при нажатии на кнопку "Забрать"
    if (className === 'zabrat') 
    {
      // Проверяем, существует ли уже элемент 'currentWin zabratX' в родительском элементе
      let currentWin = button.parentElement.querySelector('currentWin.zabratX');

      if (!currentWin)
      {
        if (DEV_MODE) console.info("СОЗДАЁМ ЭЛЕМЕНТ Для кнопки 'Забрать'")
        currentWin = document.createElement('div');
        //if (DEV_MODE) console.info(currentWin);
        currentWin.className = 'currentWin zabratX';
        currentWin.style.display = 'block'; // Убедитесь, что элемент видим
        currentWin.textContent = '10.00'; // Установите значение или текст, который нужен
        button.prepend(currentWin); // Добавляем созданный элемент в кнопку
      }
      else currentWin.innerHTML = '0.00'; // Если элемент уже существует, обновляем его содержимое
    }
  }

  // Определяем, какую кнопку нужно обновить
  if (numberButton === 1) updateButtonClass(betButton1);
  else if (numberButton === 2) updateButtonClass(betButton2);
  else if (numberButton === 0)
  { // Применяем для всех кнопок
    updateButtonClass(betButton1);
    updateButtonClass(betButton2);
  }
}


/**
 * Проверяет, сделана ли ставка в любом из блоков.
 * @returns {boolean} Возвращает true, если ставка была сделана в любом из блоков
 */
function isUserMadeBet() 
{
  // Проверяем, сделана ли ставка в любом из блоков на основе свойства isMadeBet
  if (BetBlock1.isMadeBetToThisRound || BetBlock2.isMadeBetToThisRound) return true;
  if (BetBlock1.isBetToNextRound || BetBlock2.isBetToNextRound) return true;
  else return false;
}

/**
 * Проверяет заданный параметр в объектах BetBlock1 и BetBlock2.
 * Возвращает объекты, свойство param которых истинно.
 * @param {string} param Имя параметра для проверки.
 * @returns {Array} Массив BetBlock-ов .
 */
function checkAndGetBetBlocks(param = null) 
{
  //if(DEV_MODE) console.info("==============checkAndGetBetBlocks=================");
  //if(DEV_MODE) console.info("ПОИСКИ : param = " + param);
  const result = [];

  if (param === null) return null; // Или return result, если вы хотите возвращать пустой массив вместо null
  if (BetBlock1[param] === true) result.push(BetBlock1);
  if (BetBlock2[param] === true) result.push(BetBlock2);

  //if(DEV_MODE) console.info("РЕЗУЛЬТАТ ПОИСКА: param = " + param + " " + result.length);
  //if(DEV_MODE) console.info("■■■■■■■■■■■■■■■checkAndGetBetBlocks■■■■■■■■■■■■■■■■");
  return result.length > 0 ? result : null;
}

// Функция для анимации числа
function animateNumber(targetX)
{
  currentNumber = 1.0; // Начальное значение  
  let step = 0.01; // Начальный шаг изменения числа
  let lastTimestamp = 0; // Время последнего обновления
  let updateInterval = 50; // Интервал обновления в миллисекундах

  isNumberActive = true; // Устанавливаем флаг активации раунда

  //const curX = flyaway.children[0]; // Элемент для отображения числа  
  setElementOpacity(curX, '1'); ///////////////////////ТЕСТ
  var allBets = null
  //РАБОТА С ПОЛЬЗОВАТЕЛЕМ
  if (isUserMadeBet()) 
  {
    // меняем кнопку взависимости от ставки в каждом из betBlock
    allBets = checkAndGetBetBlocks('isMadeBetToThisRound');
    if (DEV_MODE && allBets !== null) console.info("Количество blocks: " + allBets.length);
    if (DEV_MODE) console.info("=============================================");
  }

  StartJetPack(targetX); /////Взлёт

  function updateNumber(timestamp)
  {
    //if (DEV_MODE) console.info("targetX    " + targetX)
    if (!lastTimestamp) lastTimestamp = timestamp; // Инициализация времени последнего обновления
    const elapsed = timestamp - lastTimestamp; // Вычисляем прошедшее время    
    if (elapsed > updateInterval) // Обновляем число, если прошло достаточно времени
    {
      currentNumber += step;
      curX.textContent = currentNumber.toFixed(2);

      //////////////////
      if (isUserMadeBet()) // Если ставка была, то обновляем её
      {
        if (allBets !== null && allBets.length > 0)
        {
          allBets.forEach(block =>
          {
            if (block.isMadeBetToThisRound)
            {
              if (block.ID === 1)
              {
                betButton1.firstChild.textContent = parseFloat(block.UserBetSize * currentNumber).toFixed(2) + ' ₽';
              }
              else if (block.ID === 2)
              {
                betButton2.firstChild.textContent = parseFloat(block.UserBetSize * currentNumber).toFixed(2) + ' ₽';
              }
            }
          });
        }
      }

      /////////////////
      lastTimestamp = timestamp; // Обновляем время последнего обновления

      // Адаптируем шаг изменения числа
      if (currentNumber < 1.20) step = 0.004;
      else if (currentNumber < 2.0) step = 0.009;
      else if (currentNumber < 5.0) step = 0.02;
      else if (currentNumber < 10.0) step = 0.05;
      else if (currentNumber < 20.0) step = 0.09;
      else
      {
        updateInterval = updateInterval - 0.01; // Уменьшаем интервал обновления для ускорения анимации
        step += 0.001;
      }
    }

    // Продолжаем анимацию, пока не достигнем целевого значения
    if (currentNumber < targetX) requestAnimationFrame(updateNumber);//ЛЕТИМ
    else if (currentNumber >= targetX )  //УЛЕТЕЛ  && targetX >= 1.2
    {
      //currentWinInButton.style.display = 'none'; //Скрываем div с индикатором выйгрыша
      isNumberActive = false; // Сбрасываем флаг активации раунда
      flyawayJetPack(targetX);  //Улетел - просто переименование стиля         
    }
  }

  requestAnimationFrame(updateNumber); // Запускаем анимацию
}

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

animateNumber(1.16); // Запускаем анимацию числа
