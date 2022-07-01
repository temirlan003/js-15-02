// class Dog  {
//     constructor(weight, height,color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new Dog(
//     10,
//     45,
//     'pink'
// )
//
// // console.log(rex)
//
// const sharik = new Dog(
//     69,
//     70,
//     'black'
// )
//
// // console.log(sharik)
//
// class Animal  {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
// }
//
// class bear extends Animal {
//     constructor(type, gender, color, voiceText, height, weight) {
//         super(type, gender, color, voiceText);
//         this.height = height;
//         this.weight = weight
//     }
//
// }
//
// const Misha = new bear(
//     "wild",
//     "male",
//     "серо-беро-малиновый",
//     "ААААААААААА",
//     170,
//     270
// )
//
// // console.log(Misha)
//
// class rabbit extends Animal{
//     constructor(type, gender, color, voiceText, earLength, speed, weight) {
//         super(type, gender, color, voiceText);
//         this.earLength = earLength;
//         this.speed = speed;
//         this.weight = weight;
//     }
//     purpose(){
//         console.log(`Я не Таласский но очень похож потому что ${this.voiceText}\nмой цвет ${this.color}\nпотому что я ${this.gender}`)
//     }
// }
//
// const Nurgazy = new rabbit(
//     'pet',
//     'female',
//     'violet',
//     "Я Я Я Я Я Я Я Я",
//     9,
//     2
// )
//
// Nurgazy.purpose()
//
//
// function Animal1(type, gender, color, voiceText, name) {
//     console.log(type, gender, color, voiceText)
// }
//
// Animal1('pet', 'male', "black", "aaar", "Daler")

// class Building {
//     constructor(wall,foundation, floor, ceiling, size) {
//         this.wall = wall;
//         this.foundation = foundation;
//         this.floor = floor;
//         this.ceiling = ceiling;
//         this.size = size;
//     }
// }

// class House extends Building {
//     constructor(wall, foundation, floor, ceiling, size, window, room, steps, roof, basement) {
//         super(wall,foundation, floor, ceiling, size);
//         this.window = window;
//         this.room = room;
//         this.steps = steps;
//         this.roof = roof;
//         this.basement = basement;
//
//     }
}
// const House = new House(
//     'brick',
//     'cement',
//     2,
//     'tencion',
//     'big',
//     3,
//     5,
//     1,
//     'flat',
//     'small',
//
//
// )
// console.log(House)

// class School extends Building {
//     constructor(wall, foundation, floor, ceiling, size, window, room, steps, roof, basement, cabinet, area, fountain, tree, gym) {
//         super(wall,foundation, floor, ceiling, size);
//         this.window = window;
//         this.room = room;
//         this.steps = steps;
//         this.roof = roof;
//         this.basement = basement;
//         this.cabinet = cabinet;
//         this.area = area
//         this.fountain = fountain
//         this.tree = tree;
//         this.gym = gym;
//     }


    // const School = new School(
    //     'big',
    //     12,
    //     3,
    //     'cement',
    // 'VERY BIG',
    // '123',
    // 12,
    // 3,
    // 'flat',
    // 'big',
    // '345',
    // 'big',
    // 1,
    // 'a lot',
    // 'smal'
    //
    // )
    //
    //
