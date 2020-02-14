const cube_it = n => n**3
const cubeMap = num => num.map(x => cube_it(x));
var input_list = [1,2,3,4,5,6,7];
console.log(`The input values are 1,2,3,4,5,6,7 and the their cube values are ${cubeMap(input_list)}`)