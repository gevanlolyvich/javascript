const obj1 = { name: 'dicoding' };
const obj2 = { lastName: 'indonesia', address: 'jalan' };
const newObj = {...obj1, ...obj2};
console.log(newObj);

//menyalin objek
const copyObj = {...obj2};
console.log(copyObj);


//spread operator di array
const array1 = ['dicoding'];
const array2 = ['indonesia', 'jalan'];
const newArray = [...array1, ...array2];
console.log(newArray);

//mengcopy array
const copyArray = [...array2];
console.log(copyArray);
