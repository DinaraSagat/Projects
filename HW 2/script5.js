
let b;
let c;
let d;
let a=+prompt('Введите число от 10000 до 99999')
    if((a > 9999)&&(a < 100000))
    {
                b=a / 10000;
                a=a % 10000;
                c=a / 1000;
                a=a % 1000;
                a=a % 100;
                d=a / 10;
                a=a % 10;
 
                if ((b == a)&&(c == d))
                {
                    alert('палиндром');
                }
                    else {
                    alert('не палиндром');
 }
}
