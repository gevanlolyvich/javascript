const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);
console.log(productMap);

//menyimpan nilai di map
const teks = new Map();
teks.set('name', 'araxis'); // method set => menyimpan nilai
teks.set(1, 'number one');
console.log(teks);
console.log(teks.get(1)); // method get => mengambil nilai
teks.delete(1); // method delete => menghapus nilai 
console.log(teks);
