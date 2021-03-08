const carMakers: string[] = ['mercedes', 'bmw', 'porsche'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car: string = carMakers[0];
const myCar = carMakers.pop();

// Preven incompatibles values
carMakers.push('rolls-royce');

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2021-03-10');
importantDates.push(new Date());