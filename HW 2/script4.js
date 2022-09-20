
let year = prompt('Введите любой год', 0);
    if (year%4 == 0 && year %100 !== 0)
    {
        alert('Высокосный год');
    }
    else
        alert('Невысокосный')