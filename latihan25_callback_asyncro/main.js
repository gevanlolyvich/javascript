import { makeCoffee, sendCoffee } from './coffee.js';

console.log('saya memesan kopi di kafe');

makeCoffee(() => {
    sendCoffee(() => {
        console.log('pramusaji memeberikan kopi pesanan');
        console.log('saya mendapatkan kopi dan menghabiskannya');
    });
});