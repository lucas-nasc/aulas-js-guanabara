function parImp(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

const res = parImp(4)
console.log(res)