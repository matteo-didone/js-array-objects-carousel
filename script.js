/**
Divide the cars into 3 separate arrays:

In the first array, only include petrol cars. // for loop
In the second array, only include diesel cars. // foreach loop
In the third array, include the remaining cars. // array.filter
Finally, print the 3 arrays separately.
*/

/*Create an array composed of 15 cars.
Each car object will have the following properties: brand, model, and fuel type (petrol, diesel, LPG, electric, methane).*/
const cars =
[
    { brand: 'Audi', model: 'A4', fuel: 'Petrol' },
    { brand: 'Ford', model: 'Mustang', fuel: 'Petrol' },
    { brand: 'BMW', model: 'X5', fuel: 'Diesel' },
    { brand: 'Fiat', model: '500', fuel: 'LPG' },
    { brand: 'Tesla', model: 'Model 3', fuel: 'Electric' },
    { brand: 'Fiat', model: 'Panda', fuel: 'Methane' },
    { brand: 'Audi', model: 'A3', fuel: 'Petrol' },
    { brand: 'Volkswagen', model: 'Golf', fuel: 'Diesel' },
    { brand: 'Ford', model: 'Focus', fuel: 'Petrol' },
    { brand: 'Hyundai', model: 'Sonata', fuel: 'LPG' },
    { brand: 'Tesla', model: 'Model S', fuel: 'Electric' },
    { brand: 'Mercedes-Benz', model: 'E-Class', fuel: 'Petrol' },
    { brand: 'BMW', model: 'X3', fuel: 'Diesel' },
    { brand: 'Fiat', model: 'Punto', fuel: 'Petrol' }, 
    { brand: 'Volkswagen', model: 'Polo', fuel: 'Diesel' }
]

// In the first array, only include petrol cars. // for loop
const petrolCars = [];

for(let i = 0; i < cars.length; i++)
{
    if(cars[i].fuel === 'Petrol')
    {
        petrolCars.push(cars[i]);
    }
}

// Print the array
console.log(petrolCars);

// In the second array, only include diesel cars. // foreach loop
const dieselCars = [];

// car is a variable that represents each individual element of the array
cars.forEach((car) => 
{
    // If the fuel type of the car is diesel, push it to the dieselCars array
    if(car.fuel === 'Diesel')
    {
        dieselCars.push(car);
    }
});

// Print the array
console.log(dieselCars);

// In the third array, include the remaining cars. // array.filter
const remainingCars = cars.filter((car) => car.fuel !== 'Petrol' && car.fuel !== 'Diesel');

// Print the array
console.log(remainingCars);