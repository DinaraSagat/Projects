let capital = prompt('Столица Кз? 1 - Астана 2 - Нур-султан 3 - Алматы');
    let currency = prompt('Нац валюта Кз? 1 - сом 2 - тенге 3 - рубль');
    let city = prompt('Самая холодная точка в Кз? 1 - Астана 2 - Петпопавлск 3 - Атбасар');
    let score = 0;
    if (capital == 1)
        score += 2;
    if (currency == 2)
        score += 2;
    if (city == 3)
        score += 2;
    alert('Your score is ' + score)