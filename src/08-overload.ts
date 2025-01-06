// Goku => [G,o,k,u] (string => string[])
// [G,o,k,u] => Goku (string[] => string)

function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Goku');
//rtaArray.reverse();
if(Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray: ', 'Goku => ', rtaArray);

const rtaStr = parseStr(['G', 'o', 'k', 'u']);
//rtaStr.toLowerCase();
if(typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr:', "['G', 'o', 'k', 'u'] => " ,rtaStr);
