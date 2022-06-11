let name = prompt('Как вас зовут?');

alert('Привет'  +  name  )


//2
let massive1 = [ 1123, 32, 35, 90, '2', 423423,]
let massive = [ 11, 22, 33, 44, '2', 423]
       if (massive1.length > massive.length) {
           alert('первый больше')
       } else if (massive1.length === massive.length) {
       alert('они равны')
       } else if (massive1.length < massive.length) {
           alert('первый меньше')
}


//3
const color = prompt("Выбери цвет: красный, желтый, зеленый!");

switch(color) {
    case "красный":
        alert("запрещено двигаться!")
    break;
    case "желтый":
        alert("готовься!")
        break;
    case "зеленый":
        alert("газуй давай!")
        break;
    default:
        alert("-!")
        break;
}



