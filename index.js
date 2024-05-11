// Q # 1
let a = 2;
let b = ++a * 2; 
console.log(" Q # 1= " +b)
// b=6


// Q # 2
let x = 5;
let y = x-- + 2;
console.log(" Q # 2= " +y)
// y=7

// Q # 3
let x1 = 3;
let y1 = ++x1 + x1++ + ++x1;
console.log(" Q # 3= " +y1)
// y1 = 14


// Q # 4

let m = 2;
let n = ++m * m++ * --m;
console.log(" Q # 4= " + n)
// n=27

// Q # 5

let a1 = 3;
let b1 = 5;
let result = ++a1 + b1-- - a1++ + --b1;
console.log(" Q # 5= " +result)
// result=8

// Q # 6

let m1 = 2;
let n1 = 4;
let p1 = m1++ + ++n1 - --m1 + n1--;
console.log(" Q # 6 " + " p1=" +p1, " m1=" + m1, " n1=" + n1,)
// p1=10
// m1=2
// n1=4

// Q # 7

 let a2 = 5;
 let b2 = 3;
 let c2 = 2;
 let d2 = 7;
 let result2 = ++a2 * (b2-- + c2) / --d2;
console.log(" Q # 7= " + result2)
// result2=5

// Q # 8

let m3 = 2;
let n3 = 3;
let o3 = 4;
let result3 = m3++ * (--n3 + m3) / (o3-- - n3)
console.log(" Q # 8 " + " result3=" + result3, " m3=" + m3, " n3=" + n3, " O3=" + o3)
// result3=5
// m3=3
// n3=2
// O3=3