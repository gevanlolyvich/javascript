function numberAngka(...angka) {
    console.log('number angka', angka);
}
numberAngka(1,2,3);

function numberAngka2(number, ...angka) {
    console.log('number', number); // one akan dipisah dan masuk ke number
    console.log('numberAngka', angka); // menghasilkan two, three
    console.log(angka.length); //bisa dipakai buat length
}
numberAngka2('one', 'two', 'three');

//spread operator di array destructuring
const favorite = ['nasi', 'mie', 1, 'tempe', 2];
const [first, second, ...rock] = favorite;
console.log(first);
console.log(second, rock);
console.log(rock);
