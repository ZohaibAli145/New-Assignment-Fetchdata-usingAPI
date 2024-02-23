var numbers = [1, 2, 3, 4, 5];
var numbersArrayElement = document.getElementById("numbersArray");


numbersArrayElement.textContent = numbers.join(" , ");


document.getElementById("addButton").addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * 10) + 1; 
    numbers.push(randomNumber);
    numbersArrayElement.textContent = numbers.join(" , ");
});

document.getElementById("removeButton").addEventListener("click", function () {
    if (numbers.length > 0) {
        numbers.pop();
        numbersArrayElement.textContent = numbers.join(", ");
    } else {
        alert("Array is empty. No element to remove.");
    }
});

document.getElementById("findIndexButton").addEventListener("click", function () {
    var elementToFind = parseInt(prompt("Enter the element to find:"));
    var index = numbers.indexOf(elementToFind);
    if (index !== -1) {
        alert("Index of " + elementToFind + " in the array is: " + index);
    } else {
        alert(elementToFind + " is not found in the array.");
    }
});