const carMaker = [1, 2, 3, 4, 5, 6, 7];

console.log(carMaker.push("mustang"));
const sum = 0;
const mapArr = carMaker.reduce((mainVal, currentVal) => {
  console.log("main value is " + mainVal);
  console.log("current value is " + currentVal);
  return mainVal + currentVal;
}, 1);
const mapArr =
consolereducesole.log.lo, ig(voidpArr.le.leng

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.myFriendName = () => {
    return "sagar";
  };
}

Person.prototype.nationality = "Nepalease";
Person.prototype.myFullName = () => {
  return this.firstName + " " + this.lastName;
};

const myDetail = new Person("sulabh", "adhikari", 32);

console.log(myDetail.nationality);
console.log(myDetail.myFriendName());

const object1 = {
  name: "sulabh",
};

const descriptor1 = Object.getOwnPropertyDescriptors(object1, "name");
console.log(descriptor1);
