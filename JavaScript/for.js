let car = {
    make: "Toyota",
    model: "Camry",
    year: 2021
};

// Using for...in to iterate over object properties
for (let property in car) {
    console.log(property + ": " + car[property]);
}
