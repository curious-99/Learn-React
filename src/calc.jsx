function add(a,b){
    let sum = a+b;
    return sum;
}
function sub(a,b){
    let minus = a-b;
    return minus;
}
function mul(a,b){
    let mult = a*b;
    return mult;
}
function div(a,b){
    let divi = a/b;
    divi = divi.toFixed(2);
    return divi;
}
export {add,sub,mul,div};