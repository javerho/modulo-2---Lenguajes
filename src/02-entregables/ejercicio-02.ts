console.log("************** DELIVERABLE 02 *********************");

const a = [1,2,3,4];
const b = [5,6,7,8];
const c = [9,10,11,12];
const d = [13,14,15,16];

const concat = (a,b) => {
    const result = [...a,...b];
    return result;
}
const concat2 = (...args) => {
    
    return [].concat(...args);
}

console.log(concat(a,b))
console.log(concat2(a,b,c))
console.log(concat2(a,b,c,d))