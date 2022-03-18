let revStr;
function reverseInt(int){
    const revStr=int.toString().split(' ').reverse().join('');
    return parseInt(revStr);
}
const output=reverseInt(1234567);
console.log(output);