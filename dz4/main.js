let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
calculate = document.getElementById("calculation")

document.getElementById("buttonCountPlus").onclick = function () {
let countPlus = count.innerHTML;
if (+countPlus <= 9){
    count.innerHTML++
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculation(countPlus);
}
}

document.getElementById("buttonCountMinus").onclick = function () {
let countMinnus = count.innerHTML;
if (+countMinnus >= -9){
    count.innerHTML --;
    let countMinus = count.innerHTML = calculation(countMinnus);
}
}

calculations = (count) => {
    return  calculation+'${count} = ' +(+count)*(+calculation);
}