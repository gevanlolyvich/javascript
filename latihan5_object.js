const user = {
    name : 'dicoding',
    'last name': 'indonesia',
    age : 9
};
console.log(user);
console.log(user.name); //penggunaan dot
console.log(user['last name']); // square bracket


const user1 = {
    'name1' : 'dicoding',
    'lastName' : 'indonesia',
    age : 9
}
const { name1, lastName, isMale = false } = user1; //object destruction
console.log(name1, lastName);
console.log(isMale);

// tanpa object destruction
const name2 = user1.name1;
const age1 = user1.age;
console.log(name2, age1);

//mengubah value dari key
user.age = 10;
console.log(user.age);

//menghapus properti di object
delete user.age; // => delete user['age'];
console.log(user);
