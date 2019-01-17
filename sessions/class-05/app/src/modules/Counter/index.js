/**
 * The main counter class
 *
 * Create an instance and pass in a DOM node.
 * Rest is taken care of
 */
export default class Counter {
	/**
	 * Whether this has been created.
	 * @var {boolean}
	 */
	created = false;

	/**
	 * Initial count of the app.
	 * @var {number}
	 */
	currentCount = 0;

	constructor(node) {
		this.node = node;
	}

	create() {
		if (this.created) {
			throw new Error('Counter can only be created once');
		}
	}

	destroy() {
		// destroy all event listeners
	}

	refreshUI() {
		// do something
	}
}
