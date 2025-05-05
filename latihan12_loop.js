//for
for(let i = 0; i < 5; i++) {
    console.log(i);
}

//for in => perulangan object
const person = {
    name: 'fulan',
    origin: 'bandung',
    birthday: 2024
}
for (const property in person) {
    console.log(`${property} bernilai ${person[property]}`);
}

//for of => utk array, sets, maps, strings
const names = ['bebek', 'ayam', 'telor', 'tempe'];
for (const item of names) {
    console.log(item);
}
console.log('\n');

//while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do while
let j = 0;
do {
    console.log(j);
    j++
} while (j < 5);

console.log('\n');
//control statement
//break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}