console.log('************** DELIVERABLE 02 *********************');

const a: number[] = [1, 2, 3, 4];
const b: number[] = [5, 6, 7, 8];
const c: number[] = [9, 10, 11, 12];
const d: number[] = [13, 14, 15, 16];

const concat1 = (a: number[], b: number[]): number[] => {
  return [...a, ...b];
};
const concat2 = (...args: number[][]): number[] => {
  let result: number[] = [];
  for (let i = 0; i < args.length; i++) {
    result = concat1(result, args[i]);
  }
  return result;
};
console.log('----Array 1----', a);
console.log('----Array 2----', b);
console.log('----Array 3----', c);
console.log(concat1(a, b));
console.log(concat2(a, b, c));
console.log(concat2(a, b, c, d));
