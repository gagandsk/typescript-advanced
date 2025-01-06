// Goku => [G,o,k,u] (string => string[])
// [G,o,k,u] => Goku (string[] => string)

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

/*
export function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}
*/

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)) {
    return input.join(''); // string
  } else if(typeof input === 'string'){
    return input.split(''); // string[]
  }else if(typeof input === 'number'){
    return true; // boolean
  }
}

const rtaArray = parseStr('Goku');
rtaArray.reverse();
console.log('rtaArray: ', 'Goku => ', rtaArray);

const rtaStr = parseStr(['G', 'o', 'k', 'u']);
rtaStr.toLowerCase();
console.log('rtaStr:', "['G', 'o', 'k', 'u'] => " ,rtaStr);

const rtaBoolean = parseStr(12);
console.log('rtaBoolean:', "1 =>" ,rtaBoolean);
