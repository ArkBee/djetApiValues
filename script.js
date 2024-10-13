// Новая функция: шифрование контента

// Новая функция: расшифровка контента
function decryptContent(password) {
    const encrypted = document.body.innerHTML.match(/<!--Start-->(.*?)<!--END-->/s)[1].trim();
    console.log("Пытаемся расшифровать:", encrypted); // Для дебага
    try {
        const decrypted = CryptoJS.AES.decrypt(encrypted, password);
        console.log(decrypted);
        const utf8 = decrypted.toString(CryptoJS.enc.Utf8);

        if (utf8) {
            document.body.innerHTML = utf8;
            console.log('Контент расшифрован для человека');
        } else {
            throw new Error('Пустой результат расшифровки');
        }
    } catch (error) {
        console.error('Ошибка расшифровки:', error.message);
        document.body.innerHTML = '<h1>Хуйня какая-то, не удалось расшифровать</h1>';
    }
}

function checkAccelerometer() {
    return new Promise((resolve, reject) => {
        if ('DeviceMotionEvent' in window) {
            let changes = 0;
            let lastX, lastY, lastZ;

            const motionHandler = (event) => {
                const { x, y, z } = event.accelerationIncludingGravity;
                if (lastX !== undefined) {
                    const diff = Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);
                    if (diff > 0.1) changes++;  // Небольшое изменение
                }
                lastX = x;
                lastY = y;
                lastZ = z;

                // Вывод значений:
                const output = document.getElementById('accelerometerOutput'); 
                output.innerHTML = `X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}, Z: ${z.toFixed(2)}`; 
            };

            window.addEventListener('devicemotion', motionHandler);

            setTimeout(() => {
                window.removeEventListener('devicemotion', motionHandler);
                resolve(changes > 5); 
            }, 3000);
        } else {
            resolve(false);
        }
    });
}


function checkGyroscope() {
    return new Promise((resolve, reject) => {
        if ('DeviceOrientationEvent' in window) {
            let changes = 0;
            let lastAlpha, lastBeta, lastGamma;

            const orientationHandler = (event) => {
                const { alpha, beta, gamma } = event;


                // Проверяем, что значения не null
                const safeAlpha = alpha !== null ? alpha.toFixed(2) : "N/A";
                const safeBeta = beta !== null ? beta.toFixed(2) : "N/A";
                const safeGamma = gamma !== null ? gamma.toFixed(2) : "N/A";

                if (lastAlpha !== undefined) {
                    const diff = Math.abs(alpha - lastAlpha) + Math.abs(beta - lastBeta) + Math.abs(gamma - lastGamma);
                    if (diff > 0.5) changes++; // Порог изменения можно подстроить
                }
                lastAlpha = alpha;
                lastBeta = beta;
                lastGamma = gamma;

                // Вывод значений (используем safeAlpha, safeBeta, safeGamma)
                const output = document.getElementById('gyroscopeOutput');
                output.innerHTML = `Alpha: ${safeAlpha}, Beta: ${safeBeta}, Gamma: ${safeGamma}`;
            };

            window.addEventListener('deviceorientation', orientationHandler);

            setTimeout(() => {
                window.removeEventListener('deviceorientation', orientationHandler);
                resolve(changes > 5); // Порог срабатывания можно подстроить
            }, 3000);
        } else {
            resolve(false);
        }
    });
}



// Обновленная функция проверки на бота
async function botCheck() {
    let isBot = false;
    let mouseMovements = 0;
    let lastX = 0;
    let lastY = 0;

    // Отслеживаем движения мыши
    document.addEventListener('mousemove', (e) => {
        mouseMovements++;
        if (Math.abs(e.clientX - lastX) > 1 && Math.abs(e.clientY - lastY) > 1) {
            lastX = e.clientX;
            lastY = e.clientY;
        } else {
            isBot = true; // Слишком ровное движение
        }
    });

    // Невидимая ловушка для бота
    const trap = document.createElement('div');
    trap.style.opacity = '0';
    trap.style.position = 'absolute';
    document.body.appendChild(trap);
    trap.addEventListener('mouseenter', () => {
        isBot = true; // Бот попался на невидимый элемент
    });

    // Проверка на вывод числа
    const hypotResult = Math.hypot(-24.42, -50.519999999999925);
    console.log('hypotResult:', hypotResult);

    // Вывод значений:
    const numCheck = document.getElementById('numOutput'); 
    numCheck.innerHTML = `Результат вычисления hypot: ${hypotResult}`;

    // Определяем ОС
    const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Запускаем нужную проверку
    let motionCheckResult;
    if (isAndroid) {
        console.log('Запускаем проверку акселерометра (Android)');
        motionCheckResult = await checkAccelerometer();
    } else if (isIOS) {
        console.log('Запускаем проверку гироскопа (iOS)');
       // motionCheckResult = await checkGyroscope();
    } else {
        console.log('ОС не определена, пропускаем проверку движения');
        motionCheckResult = false; // Или можно задать другое значение по умолчанию
    }

    // Запускаем API запрос параллельно с проверкой движения
    const apiData = await fetch('http://ip-api.com/json/?fields=status,countryCode,mobile,proxy,hosting,query,isp')
        .then(response => response.json());

    // Проверка на хостинг, прокси ИЛИ bytedance 
    if (apiData.hosting || apiData.proxy || apiData.isp.includes("bytedance")) {
        console.log('IP проверка не пройдена (хостинг, прокси или bytedance)');
        isBot = true;
    } else {
        console.log('IP проверка пройдена');
    }

    // Проверяем результаты всех проверок
    if (mouseMovements < 10 || !motionCheckResult || isBot) {
        console.log('Бот обнаружен, бан нахуй!');
        document.body.innerHTML = '<h1>СОРЯН БОТ, кек</h1>';
        // Тут логика бана
        return;
    }

    console.log('START DECRYPT');
    decryptContent('1FCKPTN1');
}

// Запускаем шифрование при загрузке страницы
window.onload = () => {
    //encryptContent('твой_секретный_пароль');
    botCheck();
};

// Запускаем проверку при загрузке страницы
window.onload = botCheck;
