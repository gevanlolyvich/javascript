//jika ada 2 export yang memiliki function nama yang sama maka gunakan cara AS
import { myFunction as userFunction } from './user.js';
import { myFunction as costumerFunction } from './costumer.js';

userFunction();
costumerFunction();