//encapsulation adalah pencegahan untuk perubahan data di property yang diubah dari luar
//maka perlu menggunakan setter dan getter
class CoffeeMachine {
    //cara lain ada juga menggunakan tanda # berguna untuk merubah menjadi private
    // #temperature = 90;
    constructor (waterAmount) {
        this.waterAmount = waterAmount;
        this._temperature = 90; //diubah menjadi this.#temperature = this.#defaultTemperature();
    }

    set temperature(temperature) {
        console.log('you are not allowed to change the temperature.');
    }

    get temperature() {
        return this._temperature; //ubah return this.#temperature
    }

    //tambahan :}
    // #defaultTemperature() {
    //     return 90;
    // }
}

const coffee = new CoffeeMachine(10);
coffee.temperature = 100;
console.log('setelah diubah', coffee.temperature);