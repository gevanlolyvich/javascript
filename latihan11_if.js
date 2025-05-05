const gajian = true;
console.log('berjalan di mal');
if (gajian) {
    console.log('makan di restoran');
}
console.log('pulang ke rumah');


const score = 85;
if (score > 80) {
    console.log('anda lulus');
} else {
    console.log('anda tidak lulus');
}

//TERNARY OPERATOR
const price = 10000;
const discount = gajian ? price*0.1 : 0;
console.log('discount:', discount);

//Switch Case
const fruit = 'apple';
switch (fruit) {
    case 'apple':
        console.log('ini apple');
        break;
    case 'banana':
        console.log('ini banana');
        break;
    case 'kopi':
        console.log('ini kopi');
        break;
    default:
        console.log('lainnya');
}