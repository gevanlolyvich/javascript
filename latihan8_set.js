const mySet = new Set([1,2,3]);
console.log(mySet);

//menyimpan nilai di set
const pack = new Set();
pack.add(1); //method add => menyimpan nilai set
pack.add(2);
pack.add(2);
console.log(pack);

// mengakses nilai di set (for dan foreach)
for (const number of pack) {
    console.log(number);
}

pack.forEach((value) => console.log(value));

pack.delete(1); //method delete => menghapus nilai
console.log(pack);

