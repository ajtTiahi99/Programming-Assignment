/For a given array of elements (numbers 1 to 20) arrange the elements in following order -> Ascending(Absolute(a[i] - 10))
//	eg, [5, 12, 13, 10, 8, 20, 1] -> [10, 8, 12, 13, 5, 1, 20]


let arr = [5, 12, 13, 10, 8, 20, 1]
let newArr = []
for(let i=0;i<arr.length;i++){
    newArr[i]=Math.abs(arr[i]-10)
}
newArr.sort(function(a,b){return a-b})

for(let i=0;i<arr.length;i++){
    document.write(newArr[i])
}

//Output:-
// 0
// 2
// 2
// 3
// 5
// 9
// 10
