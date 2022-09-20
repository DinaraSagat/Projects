let a = Number(prompt('Введите начало диапозона'));
let n = Number(prompt('Введите конец диапозона'));
let sum = 0;
 
while(a <= n){       
       sum+=a;  
       a++;
    }
 
alert(sum)