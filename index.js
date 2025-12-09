
/**
 * Calculator class for basic arithmetic operations.
 * @class
 */
class Calculator {

	/**
	 * Create a Calculator instance.
	 * @param {number} a - The base number for calculations.
	 */
	constructor(a) {
		this.a = a;
	}


	/**
	 * Multiply the base number by a factor.
	 * @param {number} factor - The number to multiply with the base.
	 * @returns {number} The result of multiplication.
	 */
	multiply(factor) {
		return this.a * factor;
	}


	/**
	 * Print the values of 'a' and 'b' to the console.
	 */
	printValues() {
		console.log("a:", this.a);
		console.log("b:", this.multiply(3));
	}
}

const calc = new Calculator(1);
calc.printValues();