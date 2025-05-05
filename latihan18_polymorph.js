//overriding => pengambilan data/implementasi dari superclass(induk)
//jadi harus menambahkan method super()
class Smartphone {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging1() {
        console.log(`charging ${this.model}`);
    }
}

class Android extends Smartphone {
    constructor(color, brand, model, device) {
        super(color, brand, model); //constructor dari induk
        this.device = device;
    }

    charging2() {
        super.charging1(); //mengambil charging1 dari induk
        console.log(`charging ${this.model} with fast charger`);
    }

    splitScreen() {
        console.log('android have split screen');
    }
}

const android = new Android('white', 'B', 'galaxy s21', 'smart Tv');
android.charging2();