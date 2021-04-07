// 1 Display numbers from 1 to 10
for( input = 1; input <= 10; input++){
  console.log(input);
}

// 2 Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// 3 Print the multiplication table with 7
let number = 7;
for (let i = 1; i <=10; i++){
  let result = i * number;
  console.log(`${i} * ${number} = ${result}`);
}

// 4 Print all the multiplication tables with numbers from 1 to 10
for(let i = 1; i <=10; i++) {
  for(let j = 1; j <= 10; j++) {
      let result = i*j;
      console.log(`${i} x ${j} = ${result}`);
  }
}

// 5 Calculate the sum of numbers from 1 to 10
let summ = 0;
for (let i = 1; i <10; i++){
  summ +=i;
}
console.log(summ);

// 6 Calculate 10
let factorial = 10;
for ( let i = 1; i <=10; i++) {
  factorial *= i;
}
console.log(factorial);

// 7 Calculate the sum of odd numbers greater than 10 and less than 30
let sum = 0;
for (let i = 11; i < 30; i+=2) {
    sum += i;
}
console.log(sum);

// 8 Calculate the sum of numbers in an array of numbers
const numbers = [10, 21, 14, 100, 35, 2, 7];
const summedNums = numbers.reduce((a, b) => {
  return a + b
})
console.log(summedNums)

// 9 Calculate the average of the numbers in an array of numbers
let calculateAverage = [4, 25, 14, 5, 33, 3];
let total = 0;
for (let i = 0; i < calculateAverage.length; i++) {
  total += calculateAverage[i];
}
let average = total / calculateAverage.length;
console.log(average);

// 10 Create a function that receives an array of numbers and returns an array containing only the positive numbers
let  numberss = [33, -11, 10, 73, -71, 19, 120, -9];
const getpositiveNumbers = (numberss) => numberss.filter(number => number > 0);
let positives = getpositiveNumbers(numberss);
console.log(positives);

 // 11 Find the maximum number in an array of numbers
const maximum = [54, 23, 45, 63, 95, 125, 852];
console.log(Math.max(...maximum));

// 12 Create a function that will return a Boolean specifying if a number is prime
function primeNumber(n) {
  if (n===1) {
    return false;
  }
  else if(n === 2) {
    return true;
  }else {
    for(let i = 2; i < n; i++) {
      if(n % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
console.log(primeNumber(2));

// 13 Calculate the sum of digits of a positive integer number
function sumDigits(n) {
  let sum = 0;
  while (n) {
      digit = n % 10;
      sum += digit;
      n = (n - digit) / 10;
  }
  return sum;
}
console.log(sumDigits(123));

 // 14 Print the first 100 prime numbers
let first100primes = [], n = 2;
do if (isPrime(n++)) first100primes.push(n - 1);
while (first100primes.length < 100);
function isPrime(n) {
    let sqrtNumber = Math.sqrt(n);

    for (let i = 2; i <= sqrtNumber; i++)
        if (n % i === 0) return false;
    return true;
}
console.log(first100primes);

// 15  Rotate an array to the left 1 position
let left = [13, 122, 84, 55, 32];
function rotateLeft(left){
  let first = left.shift();
  left.push(first);
  return left;
}
console.log(rotateLeft(left));

// 16 Reverse an array
let moldovanWords = ['drapel', 'vin', 'sarmale', 'hora'];
moldovanWords.reverse();
console.log(moldovanWords);

// 17 Create a function that will merge two arrays and return the result as a new array
function push(fromArray, toArray) {
  for(let i = 0, array = fromArray.length; i < array; i++) {
    toArray.push(fromArray[i]);
  } return toArray;
}
let array1 = [100,200,300,400,500];
let array2= [600,700,800,900,1000];
let array3 = [];
push(array1, array3);
push(array2, array3);
console.log(array3);

// 18 Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const firstArray = [ 13, 122, 33, 105, 73];
const secondArray = [ 4, 105, 33, 42 ];
const first = firstArray.filter(first => !secondArray.includes(first));
const second = secondArray.filter(first => !firstArray.includes(first));
const difference = first.concat(second);
console.log(difference);

// 19 Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const distinct = (number, index, self) => {
  return self.indexOf(number) === index;
}
const numbersToDistinct = [21, 17, 17, 201, 29, 29, 201];
const distinctNumbers = numbersToDistinct.filter(distinct);
console.log(distinctNumbers);

// 20 Create a function that will return the number of words in a text
let  snoava = 'Pacala şi Tandala au mers împreuna prin lume o buna bucata de timp. Şi într-o noapte, dupa ce strabatusera un drum plin de hartoape, pe cand erau sfarşiţi de oboseala, au ajuns într-un sat. În sat, oamenii se culcasera. Nici o luminiţa nu mai sclipea pe la ferestre.';
function WordCount(snoava) {
  return snoava.split(" ").length;
}
console.log(WordCount(snoava));

