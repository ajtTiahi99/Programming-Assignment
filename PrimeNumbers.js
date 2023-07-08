function prime(num){
    for(let j=2;j<num/2;j++){
        if(num%j==0){
            return false
        }
    }
    return true
}

for(let i=50;i<=100;i++){
    if(prime(i)){
        console.log(i)
    }
}
