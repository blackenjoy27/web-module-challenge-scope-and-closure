function createBase(num){
    return function(n){
        num+=n;
        console.log(num);
    }
}

