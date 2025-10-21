// US01
class Complex {
    #real = 0;
    #imaginary = 0;

    constructor(a = 0, b = 0) {
        if (b === 0 && a instanceof Complex) {
            this.#real = a.real;
            this.#imaginary = a.imaginary;
        }
        if (!isNaN(Number(a))) {
            this.#real = a;
        } else console.error(a + " is not a number");
        if (!isNaN(Number(b))) {
            this.#imaginary = b;
        } else console.error(b + " is not a number");
    }

    get real() {
        return this.#real;
    }

    set real(value) {
        if (typeof value !== "number") throw new Error("Real part must be a number");
        this.#real = value;
    }

    get imaginary() {
        return this.#imaginary;
    }

    set imaginary(value) {
        if (typeof value !== "number") throw new Error("Imaginary part must be a number");
        this.#imaginary = value;
    }

    add(a, b) {
        if (a instanceof Complex) {
            this.#real += a.real;
            this.#imaginary += a.imaginary;
        } else if (typeof a === "number" && typeof b === "number") {
            this.#real += a;
            this.#imaginary += b;
        } else if (typeof a === "number" && b === undefined) {
            this.#real += a;
        } else console.error("Invalid arguments for add()");
        return this;
    }

    toString() {
        if (this.#imaginary < 0) return String(this.#real) + String(this.#imaginary) + "i"; else if (this.#imaginary === 0) return String(this.#real);
        return String(this.#real) + "+" + String(this.#imaginary) + "i";

    }

    static equals(a, b) {
        return (a instanceof Complex && b instanceof Complex) && (a === b || (a.real === b.real && a.imaginary === b.imaginary));
    }
}

function US01_runTests() {
    console.log("=== Complex Number Tests ===");

    const c1 = new Complex(); // 0
    console.log(c1.toString()); // "0"

    const c2 = new Complex(5); // real number
    console.log(c2.toString()); // "5"

    const c3 = new Complex(2, 3);
    console.log(c3.toString()); // "2+3i"

    c3.add(1);
    console.log(c3.toString()); // "3+3i"

    c3.add(new Complex(2, -1));
    console.log(c3.toString()); // "5+2i"

    c3.add(3, 4);
    console.log(c3.toString()); // "8+6i"

    console.log(Complex.equals(new Complex(2, 3), new Complex(2, 3))); // true
    console.log(Complex.equals(new Complex(2, 3), new Complex(3, 2))); // false

    // Getter/Setter test
    c2.real = -4;
    c2.imaginary = 5;
    console.log(c2.toString()); // "-4+5i"

    console.log("All tests completed successfully.");
}

US01_runTests();

//US02
class Animal {
    constructor(name, age) {
        if (typeof name !== "string") {
            console.error("Name must be a string");
            return;
        }
        if (typeof age !== "number") {
            console.error("Age must be a Number");
            return;
        }
        this.name = name;
        this.age = age;
    }

    describe() {
        return this.name + " is " + this.age + " years old";
    }

}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        if (typeof breed !== "string") {
            console.error("Breed must be a string");
            return;
        }
        this.breed = breed;
    }

    info() {
        return this.name + " is " + this.age + " years old and is a " + this.breed;
    }
}

function US02_runTests() {
    console.log("=== Animal & Dog Tests ===");

    const a1 = new Animal("Milo", 4);
    console.log(a1.describe()); // "Milo is 4 years old"

    const d1 = new Dog("Buddy", 3, "Golden Retriever");
    console.log(d1.describe()); // "Buddy is 3 years old" (inherited from Animal)
    console.log(d1.info());     // "Buddy is 3 years old and is a Golden Retriever"

    const d2 = new Dog("Luna", 2, "Beagle");
    console.log(d2.describe()); // "Luna is 2 years old"
    console.log(d2.info());     // "Luna is 2 years old and is a Beagle"

    console.log(d1 instanceof Dog);    // true
    console.log(d1 instanceof Animal); // true
    console.log(a1 instanceof Dog);    // false

    // Invalid argument tests (optional)
    const invalid1 = new Animal(123, "old");   // Should log errors
    const invalid2 = new Dog("Rocky", "5", 99); // Should log errors

}

US02_runTests();