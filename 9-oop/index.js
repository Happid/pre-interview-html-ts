// =====================================
// 1. Base class → Encapsulation + Abstraction
// =====================================
class Vehicle {
    #fuel; // encapsulation

    constructor(brand, fuel) {
        this.brand = brand;
        this.#fuel = fuel;
    }

    startEngine() {
        return "Mesin kendaraan dinyalakan...";
    }

    getFuel() {
        return this.#fuel;
    }

    refillFuel(amount) {
        this.#fuel += amount;
    }
}

// =====================================
// 2. Car → Inheritance + Polymorphism
// =====================================
class Car extends Vehicle {
    constructor(brand, fuel) {
        super(brand, fuel);
    }

    startEngine() {
        return "Brumm... Mobil bensin menyala!";
    }
}

// =====================================
// 3. ElectricCar → Inheritance + Polymorphism
// =====================================
class ElectricCar extends Vehicle {
    constructor(brand, battery) {
        super(brand, 0); // mobil listrik tidak perlu fuel
        this.battery = battery;
    }

    startEngine() {
        return "Hmmm... Mobil listrik menyala tanpa suara!";
    }

    chargeBattery(amount) {
        this.battery += amount;
    }
}

// =====================================
// TEST
// =====================================

const avanza = new Car("Toyota Avanza", 30);
console.log(avanza.startEngine());
console.log("Fuel:", avanza.getFuel());
avanza.refillFuel(10);
console.log("Fuel setelah isi:", avanza.getFuel());

console.log("------------------");

const tesla = new ElectricCar("Tesla Model 3", 80);
console.log(tesla.startEngine());
console.log("Battery:", tesla.battery);
tesla.chargeBattery(10);
console.log("Battery setelah charge:", tesla.battery);
