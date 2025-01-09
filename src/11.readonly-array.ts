const numbers: ReadonlyArray<number> = [1,2,3,4];

//al ser se tipo 'ReadonlyArray' no nos va a dejar manipularlo
//numbers.push(5);
//numbers.pop(); //elimina el ultimo elemento del array
//numbers.unshift(); //inserta un elemento al principio del array

// pero si nos dejara hacer cuando el array no se inmuta o cambia
numbers.filter(() =>{});
numbers.map(() => 0);
numbers.reduce(() => 0);

