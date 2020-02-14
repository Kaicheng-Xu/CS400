function* split_string(str){
    yield* str.split(' ');
}
let input = 'All I know is something like a bird within her sang'
let result = split_string(input);
let index = result.next();
while(index.done === false){
    console.log(index.value);
    index = result.next();
}