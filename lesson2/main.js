// const array = [
//     {
//         username: 'Jack',
//         ful_name: 'Jack Koin'
//     },
//
//     {
//         username: 'Jack',
//         ful_name: 'Jack Koin'
//     },
//
//     {
//         username: 'Jack',
//         ful_name: 'Jack Koin'
//     },
//
//     {
//         username: 'Jack',
//         ful_name: 'Jack Koin'
//     },
//
//     {
//         username: 'Jack',
//         ful_name: 'Jack Koin'
//     },
//
//
//     {
//         username: 'Jack',
//         ful_name: 'Jack Koin'
//     },
//
//     {
//         username: 'Jack',
//         ful_name: 'Jack Koin'
//     },
//
//     {
//         username: 'Jack',
//         ful_name: 'Jack Koin'
//     },
// ]

//инкрементация

// let i = 0 //i++
// i = i + i

//
// for (let i = 0; i < arr.length; i++){
//     if (i === 2){
//         break;
//     } else {
//         console.log(arr[i])
//     }
// }
//
// for(let user of array){
//     console.log(user)
// }//элементы

//



// let i = 0
//
// while(i < 0){
//     console.log("Hello")
//     i++
// }


// const user =[
//     {
//         username: "jack",
//         salary: 500
//     },
//     {
//       username: "john",
//       salary:1000
//     },
//     {
//         username: "shaman",
//         salary: 10000
//     }
// ]
//
// const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers)
//
// for (let user of users){
//     if (user.salary > 500){
//         filteredUsers.push(user)
//     }
// }
//
// console.log(filteredUsers)

const robot = [
    {
        robot: "box",
        power: 100
    },  {
        robot: "zevs",
        power: 300
    },  {
        robot: "silver",
        power: 400
    },  {
        robot: "optimus",
        power: 500
    },
    {
        robot: "nasa",
        power: 600
    }
]
const filteredRobot = robot.filter(robot => robot.power > 100)
console.log(filteredRobot)

