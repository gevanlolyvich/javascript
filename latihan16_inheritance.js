class Smartphone {
    constructor (color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`charging ${this.model}`);
    }
}

class IOS extends Smartphone {
    airDrop() {
        console.log('IOS have a behavior Airdrop');
    }
}

class Android extends Smartphone {
    splitScreen() {
        console.log('android have split screen');
    }
}

const ios = new IOS('black', 'A', '12 pro max');
const android = new Android('white', 'B', 'Samsung');

ios.charging();
ios.airDrop();

android.charging();
android.splitScreen();

console.log(ios instanceof Smartphone); //untuk mengecek apakah ios children dari Smartphone
console.log(android instanceof Smartphone); //klo iya maka akan menghasilkan true or false