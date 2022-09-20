
let numb1 = prompt('Введите  число :');
function getDigitAmount(n) {
    var c = 0;
   while(c < n.length) c++;
    return c;
}
alert( getDigitAmount(numb1));