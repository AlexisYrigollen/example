console.log('Algorithms');

function primeFactors(number){
  divisor = 2;
  var factors = [];
  while(2<number){
    if(number%divisor == 0){
      factors.push(divisor);
      divisor++;
    }else {
      divisor++;
    }
    console.log('factors: ',factors);
    return factors;
  }
}

primeFactors(10);

function prmFactors(n){
  var factors = [],
      divisor = 2;

  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor);
       n= n/ divisor;
    }
    else{
      divisor++;
    }
  }
  console.log(factors);
  return factors;
}

prmFactors(30);
