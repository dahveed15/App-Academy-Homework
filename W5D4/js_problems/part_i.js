function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`;
}

function isSubstring(searchString, substring) {
  return searchString.includes(substring);
}

function fizzBuzz(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 15 === 0) {
      continue;
    } else if ((array[i] % 3 === 0) || (array[i] % 5 === 0)) {
      result.push(array[i])
    }
  }

  return result;
}

function isPrime(n) {
  var result = [];
  for (var i = 0; i <= n; i++) {
    if (n % i === 0) {
      result.push(i)
    }
  }
  return result.length === 2 ? true : false;
}

function sumOfNPrimes(n) {
  var result = [];

  i = 1
  while (i > 0) {
    if (isPrime(i)) {
      result.push(i)
    }
    if (result.length === n) {
      break;
    }
    i++;
  }

  return result.length === 0 ? 0 : result.reduce( (prev, curr) => prev + curr );
}
