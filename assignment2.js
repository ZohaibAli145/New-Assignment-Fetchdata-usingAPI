var car = {
    brand: "Suzuki",
    model: "Suzuki Jimny",
    year: 2019,
    drive: function () {
        console.log("The " + this.brand + " " + this.model + " is being driven.");
    }
};
car.drive();