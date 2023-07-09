// Print the fibonacci numbers till 500 using recurion

function Fib(x){
    if(x<=1){
       return x
    }
    else{
        return Fib(x-1)+Fib(x-2) 
    }
}

let num=500
for(let i=1;i<num;i++){
    if(Fib(i)>500){
        break
    }
    console.log(Fib(i))
}
