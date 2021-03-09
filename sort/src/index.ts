import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 5, 8, -3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);