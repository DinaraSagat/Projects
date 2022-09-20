let numb1 = prompt('Введите первое число');
let numb2 = prompt('Введите второе число');
let numb3;


calc(numb1, numb2)
alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + numb3)

function calc(a, b) {
  let c;
  while (a != b) {
    if (a > b) {
      a = a - b;

    } else
    if (a < b) {
      c = a;
      a = b;
      b = c;
    }

  }
  return numb3 = a
}