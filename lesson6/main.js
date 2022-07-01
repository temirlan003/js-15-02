//es5 and es6

const a = 10;

let b = "text";

var c = 20


// string expression - интерполяция строк

const first_name = "jack";
const surname = "barbaro";

// console.log("Full Name:" + first_name + " " + surname)

console.log(`Full Name:${first_name} ${surname}`)

const getFullName = (user) => {
    // return "First Name: " + user.first_name + "\n" + "surname:" " " + user.surname
return `First Name: ${user.first_name}\nSurname: ${user.surname}`
}

const user = {
    first_name: 'daler',
    last_name:'doflamingo'
}

// console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 =[...mass]

console.log(mass2)

const obj = {
    username: "do",
    age: "40",
    last_name: "flamingo",
    full_name: "daler mingo"
}

const obj2={...obj}

console.log(obj2)

//деструктизация

const props = {
    onsubmit: ()=> {
        console.log("submit")
    },
    data:[
        {
            key:"value"
        },
        {
            key1:"value1"
        },
        {
          key2:"value2"
        },
    ]
}

const {data, onsubmit} = props

console.log(data)

onsubmit()

console.log()

