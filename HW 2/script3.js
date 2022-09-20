let str = prompt ('Введи трёхзначное число');
let text = 'Повторяющихся цифр в числе нет';
for (let j = 0; j < str.length; j++)
   {
   if (str.split (str [j]).length > 2) {text = 'В числе имеются повторяющиеся цифры'; break;}
   }
alert (text);


