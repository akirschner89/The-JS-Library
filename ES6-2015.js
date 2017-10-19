//====Basics in ES6====

// let
// Const
// spread operator
// destructoring
// resturctoring
// arrow functions =>
// template strings

//===Object Oriented Programming===

// * Class keyword *
// reserved keyword in javascript - involved with constructors & prototypes
// does not hoist!
// called an instance method, each class creates a new instance

class Student {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}

var Rocky = new Student(Rocky, Balboa);
// place prototype methods inside the class
// static keyword also can use static methods - don't have to use for every method

class Student {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
     sayHi() {
     return `Hey I'm ${this.first} ${this.last}`
     }
}


class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber){
      this.firstName = firstName;
      this.lastName = lastName;
      this.favoriteColor = favoriteColor;
      this.favoriteNumber = favoriteNumber;
      this.family = [];
    }
    fullName(){
      return `${this.firstName} ${this.lastName}`
    }
    multiplyFavoriteNumber(num){
      return num * this.favoriteNumber;
    }
    addToFamily(obj){
      if(obj.constructor === Person && this.family.indexOf(obj) === -1){
        this.family.push(obj)
      }
      return this.family
    }
  }

// * Maps & Sets *
// maps
class MessageBoard {
    constructor(){
        this.messages = new Map
        this.id = 1;
    }
    addMessage(value){
        this.messages.set(this.id, value);
        this.id++
        return this;
    }
    findMessageById(id){
      return this.messages.get(id)
    }
    findMessageByValue(val){
      for (let msg of this.messages.values()) {
        if(msg === val) return msg;
      }
    }
    removeMessage(id){
        this.messages.delete(id);
        return this;
    }
    numberOfMessages(){
        return this.messages.size;
    }
    messagesToArray(){
        return Array.from(this.messages.values())
    }
}

// sets
function uniqueValues(arr){
  return new Set(arr).size
}

function hasDuplicates(arr){
  return new Set(arr).size !== arr.length
}

function countPairs(arr, num){
    var cache = new Set(arr);
    var count = 0;
    for(let val of arr){
        cache.delete(val)
        if(cache.has(num - val)){
            count++
        }
    }
    return count;
}




//inheritence with super
class Vehicle {
    constructor(make,model,year){
      this.make = make;
      this.model = model;
      this.year = year;
    }
    start(){
      return "VROOM!"
    }
    toString(){
      return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(){
      super(...arguments)
      this.numWheels = 4;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(){
      super(...arguments)
      this.numWheels = 2;
    }
  }


//=====Promise Constructors=======
// + Promises.all *

// pass an array of usernames
function getMostFollowers(...usernames){
    let baseUrl = "https://api.github.com/users/"
    //build full urls & make the call
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    //return the usernames in array of the same order (but might not return sequetially)
    return Promise.all(urls).then(function(data){
        //sort the array by users with the most followers
      let max = data.sort((a,b) => a.followers < b.followers)[0];
      return `${max.name} has the most followers with ${max.followers}`
    })
  }

  // thenable - chaining together promises
  function starWarsString(id){
    var str = '';
    return $.getJSON(`https://swapi.co/api/people/${id}/`).then(function(data){
      str += `${data.name} is featured in `;
      var filmData = data.films[0]
      return $.getJSON(filmData);
    }).then(function(res){
      str += `${res.title}, directed by ${res.director} `
      var planetData = res.planets[0]
      return $.getJSON(planetData)
    }).then(function(res){
      str += `and it takes place on ${res.name}`;
      return str;
    }).then(function(finalString){
      return finalString
    })
  }

// * Array.from *
// * Object.assign *
// * Number.isFinite *

function copyObject(obj){
    return Object.assign({}, obj)
  }
  
  function checkIfFinite(num){
    return Number.isFinite(num)
  }
  
  function areAllNumbersFinite(arr){
    return arr.every(Number.isFinite)
  }
  
  function convertArrayLikeObject(obj){
    return Array.from(obj)
  }
  
  function displayEvenArguments(){
    return Array.from(arguments).filter(val => val % 2 === 0);
  }