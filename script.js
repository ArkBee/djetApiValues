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

    // Проверяем акселерометр
    const isHuman = await checkAccelerometer();

    // Проверяем результаты через 5 секунд
    setTimeout(() => {
        if (mouseMovements < 10 || !isHuman ||  isBot ) { 
            console.log('Бот обнаружен, бан нахуй!');
            document.body.innerHTML = '<h1>СОРЯН БОТ, кек</h1>';
            // Тут логика бана
        } else {
            console.log('START DECRYPT');
            decryptContent('1FCKPTN1');
        }
    }, 500);
}

// Запускаем шифрование при загрузке страницы
window.onload = () => {
    //encryptContent('твой_секретный_пароль');
    botCheck();
};

// Запускаем проверку при загрузке страницы
window.onload = botCheck;
