const STUDENT = {
    firstName: 'Vasile',
    lastName: 'Popescu',
    jobTitle: 'Frontend engineer',
    age: 30,
    married: true,
    sports: ['football', 'volei']
};

// Please rewrite this using class!
function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', () => {
    //const number = 
    //const divideTo = 
    const resultCalculate = document.getElementById();
    resultCalculate.innerHTML = divide(number, divideTo);
});

const compareDatesButton = document.getElementById('compare-dates');
compareDatesButton.addEventListener('click', () => {
    //const year1 = 
    //const month1 = 
    //const day1 = 
    //const year2 = 
    //const month2 =
    //const day2 = 
    const resultCompareDates = document.getElementById();
    resultCompareDates.innerHTML = compareDates(year1, month1, day1, year2, month2, day2);
});

const addWordButton = document.getElementById('add-word');
addWordButton.addEventListener('click', () => {
    //const word =
    resultAddedText = document.getElementById();
    resultAddedText.innerHTML = addWordToPhrase(word.value);
});

const compareStudentsListButton = document.getElementById('compare-students');
compareStudentsListButton.addEventListener('click', () => {
    //const studentsList1 = 
    //const studentsList2 = 
    const resultCompareStudents = document.getElementById();
    resultCompareStudents.innerHTML = compareStudentsLists(studentsList1, studentsList2);
});

const verifyGeneratedNumber = document.getElementById('verify-generated-number');
verifyGeneratedNumber.addEventListener('click', () => {
    //const userNumber = 
    const resultVerifyNumber = document.getElementById();
    resultVerifyNumber.innerHTML = guessTheNumber(userNumber);
});

const isObjectButton = document.getElementById('is-object');
isObjectButton.addEventListener('click', () => {
    const resultObject = document.getElementById('result-object');
    resultObject.innerHTML = isObject(STUDENT);
});

const printObjectKeysButton = document.getElementById('print-keys');
printObjectKeysButton.addEventListener('click', () => {
    const resultObject = document.getElementById('result-object');
    resultObject.innerHTML = objectKeys(STUDENT);
});

const printKeysAndValuesButton = document.getElementById('print-keys-and-values');
printKeysAndValuesButton.addEventListener('click', () => {
    const resultObject = document.getElementById('result-object');
    resultObject.innerHTML = objectKeyValues(STUDENT);
});

const getObjectLengthButton = document.getElementById('object-length');
getObjectLengthButton.addEventListener('click', () => {
    const resultObject = document.getElementById('result-object');
    resultObject.innerHTML = objectLength(STUDENT);
});

const deleteObjectPropertiesButton = document.getElementById('delete-properties');
deleteObjectPropertiesButton.addEventListener('click', () => {
    const resultObject = document.getElementById('result-object');
    resultObject.innerHTML = deleteObjectProperties(STUDENT);
});

const checkMoviesStatusButton = document.getElementById('check-movies-status');
checkMoviesStatusButton.addEventListener('click', () => {
    const resultMoviesStatus = document.getElementById('result-movies-status');
    resultMoviesStatus.appendChild(getMoviesStatus(MOVIES));
});

const person1BioButton = document.getElementById('person-1-bio-button');
person1BioButton.addEventListener('click', () => {
    //const person1 =
    const person1Bio = document.getElementById('person-1-bio');
    person1Bio.innerText = person1.bio();
});

const person2GreetingButton = document.getElementById('person-2-greeting-button');
person2GreetingButton.addEventListener('click', () => {
    //const person2 = 
    const person2Greeting = document.getElementById('person-2-greeting');
    person2Greeting.innerText = person2.greeting();
});