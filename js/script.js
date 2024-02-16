const horas  = document.getElementById('horas');
const minutos  = document.getElementById('minutos');
const segundos  = document.getElementById('segundos');
const data = document.getElementById('data');

const relogio = setInterval(function time (){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    let dateDay = dateToday.getDay()/*.padStart(2, '0')*/;
    let dateDayNumber = String(dateToday.getDay()).padStart(2, '0');
    let dateMes = dateToday.getMonth()/*.padStart(2, '0')*/;
    let dateAno = String(dateToday.getFullYear());
    
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    switch (dateDay) {
        case 0:
            dateDay = 'Domingo';
            break
        case 1:
            dateDay = 'Segunda-Feira';
            break
        case 2:
            dateDay = 'Terça-Feira';
            break
        case 3:
            dateDay = 'Quarta-Feira';
            break
        case 4:
            dateDay = 'Quinta-Feira';
            break
        case 5:
            dateDay = 'Sexta-Feira';
            break
        case 6:
            dateDay = 'Sábado';
            break
    };


    switch (dateMes) {
        case 0:
            dateMes = 'Janeiro';
            break
        case 1:
            dateMes = 'Fevereiro';
            break
        case 2:
            dateMes = 'Março';
            break
        case 3:
            dateMes = 'Abril';
            break
        case 4:
            dateMes = 'Maio';
            break
        case 5:
            dateMes = 'Junho';
            break
        case 6:
            dateMes = 'Julho';
            break
        case 7:
            dateMes = 'Agosto';
            break
        case 8:
            dateMes = 'Setembro';
            break
        case 9:
            dateMes = 'Outubro';
            break
        case 10:
            dateMes = 'Novembro';
            break
        case 11:
            dateMes = 'Dezembro';
            break
    };


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    data.textContent = `Hoje é ${dateDay} , ${dateDayNumber} de ${dateMes} de ${dateAno}`;

});