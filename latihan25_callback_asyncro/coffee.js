export function makeCoffee(callback) {
    const estimasiTime = 5000;

    const inSecond = Math.ceil(estimasiTime / 1000);
    console.log(`mohon menunggu, pramusaji sedang membuat kopi dalam ${inSecond} detik`);

    setTimeout(() => {
        console.log('pramusaji selesai membuat kopi'); //dijalankan setelah 5 detik tapi masuk kebagian akhir
        callback();
    }, estimasiTime);
}

export function sendCoffee(callback) {
    const estimisasiTime = 2000;
    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() => {
        console.log('Pramusaji sudah sampai di meja');
        callback();
    }, estimisasiTime);
}