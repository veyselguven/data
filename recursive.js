// girilen parametre degerine kadar olan sayilari toplayan
// recursive fonksiyonu yazin

let i = 0;
let toplam = 0;

function topla(number) {
  if (i < number) {
    toplam += i;
    i++;
    //console.log(toplam + i);
    console.log(toplam);
    topla(number);
  }
}

//topla(5);

function factorial(number) {
  if (number === 0) return 1;
  else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(5));

var fac = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(fac(5));

//Non-recursive version

function fib(number) {
  if (number < 3) return 1;
  let prev = 1;
  let current = 1;

  for (let i = 2; i < number; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}

console.log(fib(6));
//recursive solution

function fibonacci(n) {
  if (n < 3) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fibonacci(7));
