document.getElementById('randomNumberButton').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumberDisplay').innerText = "Рандомное число: " + randomNumber;
});

window.addEventListener('storage', (event) => {
  if (event.key === 'myData') {
    console.log('Полученные данные: ', event.newValue);
  }
});
