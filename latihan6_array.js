const user = new Array(5); // const user = [];
console.log(user);

// penggunaan array.from
const foo = Array.from('foo');
console.log(foo);

const users = new Array('john', 'jane', 'jack', 'jill');
const costumer = Array.from(users);
console.log(costumer);

//array literal => sering digunakan
const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
console.log(fruits);
console.log(fruits[1]);
fruits[1] = 'pisang'; // mengubah element ke 2
console.log(fruits);

//method push => menambah element ke terakhir
fruits.push(10);
console.log(fruits);

//method splice => menghapus element dan data karena klo menggunakan delete elementnya masih ada
// delete fruits[2];
// console.log(fruits);
fruits.splice(2, 2); // start index ke 2 (cherry), lalu hapus 2 element cherry dan selanjutnya
console.log(fruits);

//method shift => menghapus element pertama
fruits.shift();
console.log(fruits);

//method pop => menghapus element terakhir
fruits.pop();
console.log(fruits);

//array destruction
const introduction = ['hello', 'arsy', 'fuck'];
const [greeting, name] = introduction;
console.log(greeting);

//method reverse => pembalik
fruits.reverse();
console.log(fruits);

//method sort => mengurut ascending
introduction.sort();
console.log(introduction);



