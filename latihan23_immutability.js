//mutator function
// Array.push: menambahkan elemen di akhir dari sebuah array.
// Array.pop: menghapus elemen terakhir dari sebuah array.
// Array.shift: menghapus elemen pertama dari sebuah array.
// Array.unshift: menambahkan elemen di awal dari sebuah array.
// Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
// Array.reverse: membalikkan urutan elemen dari sebuah array.
// Array.sort: mengurutkan elemen dari sebuah array.
// Object.assign: memodifikasi properti dari object.

//example immutable
function max(arrayOfNumber) {
    return [...arrayOfNumber]
        .sort((a,b) => a-b)
        .pop();
}
const numbers1 = [10, 23, 24, 7, 42,18];
const largest = max(numbers1);
console.log(largest);
console.log(numbers1);

function registerEmail(person, email) {
    return {...person, email};
}
const person = {
    name: 'john',
    username: 'johndoe'
}
const personWithEmail = registerEmail(person, 'john@dicoding.com');
console.log(person);
console.log(personWithEmail);
console.log('\n');

//immutable array method
//array Map
const oldArray = ['harry', 'ron', 'jeff', 'thomas'];
const newArray = oldArray.map((name) => `${name}!`);
console.log(newArray);
console.log(oldArray);

//array Filter => cocok untuk boolean
const truthyArray = [1, '', 'halo', 0, null, 'harry', 14]
    .filter((item) => Boolean(item));
console.log(truthyArray);

const students = [
    {
        name: 'harry',
        score: 60
    },
    {
        name: 'james',
        score: 88
    },
    {
        name: 'ron',
        score: 90
    },
    {
        name: 'bethy',
        score: 75
    }
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents);

//array Reduce
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);
console.log('\n');

//immutable object
const user = {
    name: 'john',
    email: 'john@dicoding.com'
};
Object.freeze(user); //membekukan object user
user.email = 'dicoding@dicoding.com';
console.log(user);

//kasus saat didalam object ada object lagi
function deepFreeze(object1) {
    Object.keys(object1).forEach((name) => {
        const prop = object1[name];
        if(typeof prop == 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(object1);
}

const complexUser = {
    name: 'Bob',
    email: 'bob@dicoding.com',
    preferences: {
        newsletter: true,
        notifications: 'weekly',
        address: {
            city: 'New York',
            zip: '10001'
        }
    }
};
deepFreeze(complexUser);

complexUser.preferences.address.city = 'Los Angeles';
console.log(complexUser.preferences.address.city);