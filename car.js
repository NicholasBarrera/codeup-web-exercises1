// TESTS

testRunner();
function testRunner() {
    console.log("Passed 'returns valid mileage': " + getCarTelemetry_GivenValidCar_ReturnsMileage());
    console.log("Passed 'returns string message': " + getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage())
     console.log("Passed 'returns string message: ") + GetCarTelemetry_GivenNonnumeric_ReturnsStringMessage
}

// AC-1: given a valid car, returns the mileage of that car
function getCarTelemetry_GivenValidCar_ReturnsMileage() {
    // Arrange
    // Gather all the data, and any setup needed
    const car = {
        mileage: 67922
    }

    const expectedMileage = 67922;

    // Act
    // Execute testable code and store results as needed
    const actualMileage = getCarTelemetry(car);

    // Assert
    // Test the actual output of code against the expected output
    return actualMileage === expectedMileage;
}

 //AC-2: given no mileage, returns a helpful message
function getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage() {
    // Arrange
    const car = {}
    // Act
    // Execute testable code and store results as needed
    const message = getCarTelemetry(car);

    // Assert
    // Test the actual output of code against the expected output
    return typeof message === "string";
}

// AC-3: given any non-valid mileage (numbers and numerical strings are valid), 
//returns a helpful message
function GetCarTelemetry_GivenNonnumeric_ReturnsStringMessage() {



}



// ACTUAL CODE
function getCarTelemetry(carObj) {
    console.log(carObj.mileage);

    return carObj.mileage ? carObj.mileage : "No mileage provided...";
}