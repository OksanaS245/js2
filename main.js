//task 1
"42" == 42; //true
"0" == 0; //true
"0" == false; //true
"true" == true; //false
true == (1 == "1"); //true

"42" === 42; //false
"0" === 0; //false
"0" === false; //false
"true" === true; //false
true === (1 === "1"); //false

//task 2
let a = 'apple';
let b = 'banana';
let c = 'hello';
let d = 'world';
let e = 'aPple';
console.log (a > b);
console.log (a==b);
console.log (a < b);
console.log (a >= b);
console.log (a <= b);
console.log (a === b);
console.log (a != b);
console.log (c > d);
console.log (c==d);
console.log (c < d);
console.log (c >= d);
console.log (c <= d);
console.log (c === d);
console.log (c != d);
console.log (a > e);
console.log (a==e);
console.log (a < e);
console.log (a >= e);
console.log (a <= e);
console.log (a === e);
console.log (a != e);

//task 3
let score = 32;
if (score > 90) {
    console.log ('Отличная работа!')
}
else if (score > 70 && score <= 90) {
    console.log ('Хорошая работа!')
}
else {
    console.log ('Попробуйте еще раз')
};

//task 4
let number = 5;
let result
result = number % 2 == 1 ?
'«значение number» - нечетное число':
'«значение number» - четное число';
console.log (result);

//task 5
let num1 = 2;
let num2 = 11;
if (num1 > num2) {console.log ('num1 больше num2')}
else if (num1 < num2) {console.log ('num2 больше num1')}
else if (num1 == num2) {console.log ('num1 и num2 равны')};

//task 6
let fruit = 'джекфрут'
if (fruit == 'яблоко' || fruit == 'груша' || fruit == 'банан') {
    console.log ('Этот фрукт можно съесть')
}
else if (fruit == 'дуриан' || fruit == 'рамбутан' || fruit == 'джекфрут') {
    console.log ('Это экзотический фрукт, будь осторожен')
}
else {console.log ('Это не фрукт или фрукт неизвестен')};

//task 7
let grade = 5;
switch (grade) {
    case 5:
        console.log ('Отлично');
        break;
    case 4:
        console.log ('Хорошо');
        break;
    case 3:
        console.log ('Удовлетворительно');
        break;
    case 2:
        console.log ('Неудовлетворительно');
        break;
    default: console.log ('Неизвестно');
}