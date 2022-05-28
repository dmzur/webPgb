// Установите дату, которую мы рассчитываем
var countDownDate = new Date("Sep 5, 2023 15:37:25").getTime();

// Обновляйте обратный отсчет каждую секунду 1
var x = setInterval(function () {
    // Получить сегодняшнюю дату и время
    var now = new Date().getTime();
    // Найдите расстояние между датой обратного отсчета
    var distance = countDownDate - now;
    // Расчет времени за дни, часы, минуты и секунды
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Отображение результата в элементе id = "demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    // Если обратный отсчет закончен, напишите текст
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);