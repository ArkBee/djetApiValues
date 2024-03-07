document.getElementById('randomNumberButton').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumberDisplay').innerText = "Рандомное число: " + randomNumber;
});
