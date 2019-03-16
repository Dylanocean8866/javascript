
function mathStr(n){
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let strArr = str.split("");
    let mathS;
    for(let i = 0; i < n; i++){
        mathS += strArr[Math.floor(Math.random() * 52)];
    }
    return mathS;
}

export {mathStr}