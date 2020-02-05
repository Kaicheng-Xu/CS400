    let func = (str, function0) => {
        return function0(str);}

//https://stackoverflow.com/questions/12001953/javascript-and-regex-split-string-and-keep-the-separator
    console.log(func(`supercalifragilisticexpialidocious`, str => str.split(/(?=c)/g)));

//https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
    console.log(func(`supercalifragilisticexpialidocious`, str=> {
        var ret = {
            originalString: str,
            modifiedString: str.replace(/a/g, 'A'),
            numberReplaced: (str.match(/a/g)||[]).length,
            length: str.length
        };
        return ret;
    }))