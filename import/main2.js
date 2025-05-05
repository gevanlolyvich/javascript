import { name, email, age } from './anotherfile2.js';//karena export tanpa default maka import harus sesuai dengan nama variabel yang ada di export
//import bisa juga menggunakan cara * dan as, contoh
//import * as variabel from './anotherfile2.js'
console.log(name); //console.log(variabel.name);
console.log(email); //klo function maka; variabel.sayHello(variabel.name);
console.log(age);