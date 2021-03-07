console.log('----------------------------------')
function fizzBuzzI (num){

  if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    }
  if(num % 3 === 0 && num % 5 !== 0) {
      return 'Fizz';
    }
  if (num % 5 === 0 && num % 3 !== 0) {
      return 'Buzz';
    }
}

console.log(fizzBuzzI(15))
console.log(fizzBuzzI(9))
console.log(fizzBuzzI(1))
console.log(fizzBuzzI(5))


console.log('----------------------------------')

function fizzBuzzInc (num){
    for (let count = 1; count <= num; count++){
        if (count % 3 === 0 && count % 5 === 0){
            console.log("FizzBuzz ", count);
        }
        else if (count % 3 === 0){
            console.log("Fizz ", count);
        }
        else if (count % 5 === 0){
            console.log("Buzz ", count);
        }
        else {
            console.log(count);
        }
    }
}
fizzBuzzInc(25);

console.log('----------------------------------')