//https://stackoverflow.com/questions/9309278/javascript-regex-replace-all-characters-other-than-numbers
//https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex

let sortAlphabet = str => [...str].sort().join('').replace(/\d+/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
console.log(`The alphabet order is: ${sortAlphabet("supercalifragilisticexpialidocious")}`);