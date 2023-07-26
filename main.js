const john = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music"],
  addHobbie: function (hobbie) {
    this.hobbies.push(hobbie);
  },
};

// Add a new hobbie to John
john.addHobbie("sports");
john.addHobbie("cooking");
console.log(john);

function Person(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
  // this.addHobbie = function (hobbie) {
  //   this.hobbies.push(hobbie);
  // };
}

Person.prototype.addHobbie = function (hobbie) {
  this.hobbies.push(hobbie);
};

const matias = new Person("Matias", 22, ["reading", "videogames"]);
