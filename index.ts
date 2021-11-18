// const myData: Data = {
//     name: "sulabh",
//     age: 30,
//     isMiddleAge: false,
//     isTeenAge() {
//         return "he is teenager"
//     }

// }
// // type MyData=[string, number]
// // const carMaker:MyData = [myData.name, myData.age]
// interface Data {
//     name: string;
//     age: number;
//     isMiddleAge: boolean;
//     isTeenAge(): string
// }

// const data = ({ name, age, isMiddleAge, isTeenAge }: Data): void => {
//     console.log(name, age, isMiddleAge, isTeenAge())
// }
// data(myData)
// console.log(myData.name, myData.age, myData.isMiddleAge, myData.isTeenAge())

// class Vehicle {
//     static name1 = "sulabh"
//     constructor(public color: string) { }
//     printCol(): void {
//         console.log(this.color)
//     }
//     static fuelIndicator() {
//         return "fuel tight"
//     }
// }


//const vehicle = new Vehicle("red")
// const fuelIndicator = Vehicle.fuelIndicator()
// console.log(fuelIndicator, Vehicle.name1)


//const cars = new Cars("red")
//console.log(cars)
// interface Persons {
//     readonly name1: string;
//     age?: number;
//     (a: number, b: number): number

// }
// class Person implements Persons {
//     constructor(public name1: string, public age: number) { }
//     addNum(a: number, b: number) {
//         return a + b
//     }
// }
// const myDetail = new Person("sulabh", 23).addNum(2, 3)
// console.log(myDetail)
// abstract class Person implements Persons {
//     constructor(public name1: string, public age?: number, addNum) { }
//     abstract printingName(this: Person): void
// }
// class Sulabh extends Person implements Persons {


//     printingName() {
//         return this.name1 + this.age
//     }
// }
// const myDetail = new Sulabh("sulabh", 23).printingName()
// console.log(myDetail)


//generics
// function merge<S extends object, A extends object>(objA: S, objB: A) {
//     return Object.assign(objA, objB)
// }

// const mergeObj = merge({ name: "sulabh" }, { age: 24 })
// console.log(mergeObj)

// function Logger(constructor: Function) {
//     console.log("logging")
//     console.log(constructor)
// }

function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

@Logger("my name is sulabh adhikari")
class Person {
    name = "sulabh"
    constructor() {
        console.log("Creating person object...")
    }
}
const pers = new Person()
const pers1 = new Person()


