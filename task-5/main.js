let matrix = [
    [134, 475, 30, 424],
    [303, 151, 419, 235],
    [248, 166, 90, 42],
    [318, 237, 184, 36]
];

let sum = 0
let k = 1
let sum2 =0
for (let i = 0; i < matrix.length; i++) {
    let j = matrix.length-(i+1)
    for (let k = 0; k< matrix[i].length; k++) {
    
       if(i==k){
        sum = sum + matrix[i] [k]
       }else if(j==k){
           sum2 = sum2+ matrix[i][k]
       }
        
    } 
        
}console.log(sum);console.log(sum2);
