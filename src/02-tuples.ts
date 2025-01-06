const prices: (number |string)[] = [1,2,3,4,5, 's'];
prices.push(1);
prices.push('1');

//Tuples
let user: [string, number];
user = ['goku', 1000000];
//user = [1, 1000000]; //error
//user = []; //error
//user = ['goku']; //error
//user = ['goku', 1000000, true]; //error

const [username, ki] = user;
console.log(username);
console.log(ki)
