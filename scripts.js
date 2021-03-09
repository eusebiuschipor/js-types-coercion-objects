const STUDENT = {
    firstName: 'Vasile',
    lastName: 'Popescu',
    jobTitle: 'Frontend engineer',
    age: 30,
    married: true,
    sports: ['football', 'volei']
};

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