let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = '1';
anyVar = [];
anyVar = {};

let isNew : boolean = anyVar;

anyVar.doSomething();

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = '1';
unknownVar = [];
unknownVar = {};

//unknownVar.doSomething(); //error 'unknownVar' is of type 'unknown'.
if(typeof unknownVar == 'string') {
  unknownVar.toUpperCase();
}

if(typeof unknownVar == 'boolean') {
  let isNewV2 : boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
