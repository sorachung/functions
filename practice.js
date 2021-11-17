const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(22)
console.log(dogAge)


//Practice: Best in Show

const logFavoriteDogBreed = (dogBreed) => {
    if (dogBreed === "meow") {
        return "I like cats";
    }
    return `My favorite dog breed is ${dogBreed}`;

}

const myFavorite = logFavoriteDogBreed("meow")
console.log(myFavorite);


//Practice: Addition

const add = (num1, num2, num3) => num1 + num2 + num3;

console.log(add(17, 4, 11))


//Practice: Self-Driving Cars
const go = (direction, speed) => {
    let statement = `The car is moving ${direction} at ${speed} mph.`
    if (speed > 75) {
        statement += " SLOW DOWN!"
    }

    console.log(statement);
}

go("forwards", 45);
go("backwards", 9);
go("in circles", 12);


//Practice: Evens or Odds
const evenOrOdd = (num) => {
    if (num === 0) {
        return "Neither"
    } else if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

const numbers = [4, 7643, 1, 43, 8, 10, 0]

for (number of numbers) {
    console.log(evenOrOdd(number));

}

numbers.forEach((number) => console.log(evenOrOdd(number)));


//Practice: Double Functions

const filterWords = (wordsArr) => {
    const arrNoK = [];

    for (const word of wordsArr) {
        if (!word.startsWith('k')) {
            arrNoK.push(word);
        }
    }
    return arrNoK;
}

const makeSingleSentence = (wordsArr) => {
    return wordsArr.join(' ');
}

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const wordsWithoutK = filterWords(words)

console.log(makeSingleSentence(wordsWithoutK));


//Practice: You Can Tune a Piano, But You Can't...

const svensChances = (percentChanceOfCatch) => {
    if (Math.random() * 100 < percentChanceOfCatch) {
        return true;
    } else {
        return false;
    }
}

if (svensChances(33)) {
    console.log("Sven hooked a tuna!  :)")
} else {
    console.log('Sven came up empty-handed.  :(')
}



//Practice: Same Chores, Different Days

const washDishes = (personObj) => `${personObj.firstName} ${personObj.lastName} washed the dishes`
const doLaundry = (personObj) => `${personObj.firstName} ${personObj.lastName} did the laundry`
const walkTheDog = (personObj) => `${personObj.firstName} ${personObj.lastName} walked the dog`
const feedTheDog = (personObj) => `${personObj.firstName} ${personObj.lastName} fed the dog`
const rakeTheLeaves = (personObj) => `${personObj.firstName} ${personObj.lastName} raked the leaves`
const takeOutTheTrash = (personObj) => `${personObj.firstName} ${personObj.lastName} took out the trash`

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => `On ${day}, ${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}.`

const person = {
    firstName: "Donald",
    lastName: "McLelland"
}
// console.log(dayPlanner(washDishes, {
//     firstName: "Donald",
//     lastName: "McLelland"
// }, "Tuesday"));

console.log(dayPlanner(washDishes, doLaundry, walkTheDog, person, "Tuesday"))

