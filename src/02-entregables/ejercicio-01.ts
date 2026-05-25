console.log("************** DELIVERABLE 01 *********************");

const firstArray: number[] = [ 2, 3, 4, 5 ];
const secondArray: string[] = [ "arbol", "casa", "lapiz" ];
const threeArray: boolean[] = [ true, false,true];

const head = (array: number[] | string[] | boolean[]): number | string | boolean => {
   return array[0];
}

const tail = (arrayParam: (number | string | boolean)[]): (number | string | boolean)[] => {
   const [,...editedArray] = arrayParam;
   return editedArray;
}

const init = (array:any): any => {
   return array.splice(0,(array.length - 1));
}

const last = (array:any): number => {
   return array.slice(array.length-1);
}

console.log('- Arrays sin modificar -')
console.log(firstArray);
console.log(secondArray);
console.log(threeArray);
console.log('- Resultados head-')
console.log(head(firstArray));
console.log(head(secondArray));
console.log(head(threeArray));
console.log('- Resultados tail-')
console.log(tail(firstArray));
console.log(tail(secondArray));
console.log(tail(threeArray));
console.log('- Resultados init-')
console.log(init(firstArray));
console.log(init(secondArray));
console.log(init(threeArray));
console.log('- Resultados last-')
console.log(last(firstArray));
console.log(last(secondArray));
console.log(last(threeArray));