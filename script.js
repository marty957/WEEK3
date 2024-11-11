class User {
  constructor(firstName, lastName, age, location) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age), (this.location = location);
  }

  comparedAge(person) {
    return this.age > person.age ? ` ${this.firstName} è piu vecchio/a di ${person.firstName}` : `${person.firstName} è piu vecchio/a di ${this.firstName}`;
  }
}

const x = new User("Marco", "Rossi", 40, "Torino");
const y = new User("carlo", "verdi", 25, "roma");
const a = new User("maria", "franchi", 56, "bologna");
const b = new User("tom", "ride", 52, "manchester");
console.log(x);

console.log(x.comparedAge(y));
console.log(b.comparedAge(a));

class Pet {
  constructor(petName, ownerName, species, breed) {
    (this.petName = petName), (this.ownerName = ownerName), (this.species = species), (this.breed = breed);
  }

  ownerCompare(animal) {
    return this.ownerName === animal.ownerName ? `${this.petName} e ${animal.petName} hanno lo stesso padrone` : `il padrone è differente`;
  }
}
/*
const n = new Pet("leo", "nick", 35, "boh");
const n2 = new Pet("leo", "nick", 35, "boh");
console.log(n2.ownerCompare(n));*/

const form = document.querySelector("form");
const pet = document.querySelector(".name");
const owner = document.querySelector(".Owner");
const species = document.querySelector(".species");
const breed = document.querySelector(".breed");
const listItem = document.createElement("ul");
const container = document.getElementById("container");
const list = [];

const createList = function () {
  const items = document.createElement("li");
  const special = document.createElement("p");
  for (let i = 0; i < list.length; i++) {
    const newAni = list[i];
    console.log(list[i].petName);
    items.innerText = `name: ${list[i].petName} owner: ${list[i].ownerName} species: ${list[i].species} breed ${list[i].breed}`;
    listItem.appendChild(items);
    container.appendChild(listItem);
    if (newAni.ownerName === list[i].ownerName) {
      special.innerText = newAni.ownerCompare(list[i]);
      container.appendChild(listItem);
    }
  }
};

form.onsubmit = function (e) {
  e.preventDefault();

  let a = new Pet(pet.value, owner.value, species.value, breed.value);
  list.push(a);
  /*list[length].ownerCompare(a);*/
  console.log("form inviato");
  createList();
};

console.log(list);

/*list.forEach((animal) => {
  pippo.innerText = animal.petName;
  form.appendChild(pippo);
});*/
