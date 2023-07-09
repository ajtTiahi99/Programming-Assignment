// how to sort number array elements? 
// There are two approaches to sorting the number array in ascending order. 

// Using Compare Function
// By Creating Loops
// Using Compare Function: We can create a Compare function that returns negative, zero, or positive values. 

// Syntax:- function(a, b){return a - b}

let arr = [5, 12, -13, -10, -8, 20, 1]
for(let i=0;i<arr.length;i++){
    arr[i] = Math.abs(arr[i])
}

arr.sort(function(a,b){return a-b})
arr.forEach((num)=>{
    document.write(num)
})
