const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', false, 50];

const carSpecs: [number, number] = [400, 3354];

const carStarts = {
  horsepower: 1600,
  weight: 1340
};