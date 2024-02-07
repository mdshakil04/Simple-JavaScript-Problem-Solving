function cakeDivide(m, n, o){
    if (m > n && m > o){
        console.log("Jim will get the cake")
    }
    else if(n > m && n > o){
        console.log("Dela will get the cake")
    }
    else{
        console.log("Niha will get the cake")
    }
}
const jim = 84;
const dela = 75;
const niha = 98;
const cake = cakeDivide(jim, dela, niha);