var fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];


        var fruitsList = document.getElementById("fruitsList");


        fruits.forEach(function (fruit) {
            var li = document.createElement("li");
            li.textContent = fruit;
            fruitsList.appendChild(li);
        });