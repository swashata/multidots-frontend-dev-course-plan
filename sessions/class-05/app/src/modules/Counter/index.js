/* eslint-disable class-methods-use-this */

import { createNode } from '../utils';

import './style.scss';

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

	// DOM reference of main controls
	increaseButton = null;

	decreaseButton = null;

	inputControl = null;

	constructor(node, initialCount = 0) {
		this.node = node;
		this.currentCount = initialCount;
	}

	getTemplate() {
		return `
		<div class="counter field is-horizontal">
			<div class="field-body">
				<div class="field is-expanded">
					<div class="field has-addons">
						<p class="control counter__decreaseButton">
						</p>
						<p class="control is-expanded counter__input">
						</p>
						<p class="control counter__increaseButton">
						</p>
					</div>
				</div>
			</div>
		</div>
		`;
	}

	setCount = value => {
		if (value < 0) {
			// eslint-disable-next-line no-param-reassign
			value = 0;
		}
		this.currentCount = value;
		this.refreshUI();
	};

	handleClick = event => {
		// If this is coming from the increaseButton
		if (this.increaseButton.contains(event.target)) {
			event.preventDefault();
			this.setCount(this.currentCount + 1);
		}
		// If this is coming from the decreaseButton
		if (this.decreaseButton.contains(event.target)) {
			event.preventDefault();
			this.setCount(this.currentCount - 1);
		}

		// Otherwise do nothing
	};

	handleInput = () => {
		let count = Math.round(Number(this.inputControl.value));
		if (Number.isNaN(count)) {
			count = 0;
		}
		this.setCount(count);
	};

	create() {
		if (this.created) {
			throw new Error('Counter can only be created once');
		}
		this.node.innerHTML = this.getTemplate();
		// Create the Form controls
		const increaseButton = createNode(
			'a',
			['button', 'counter__button', 'is-success'],
			{
				href: '#',
			}
		);
		increaseButton.textContent = '+';
		const decreaseButton = createNode(
			'a',
			['button', 'counter__button', 'is-danger'],
			{
				href: '#',
			}
		);
		decreaseButton.textContent = '-';
		const inputControl = createNode('input', ['input', 'counter__input'], {
			type: 'tel',
			placeholder: 'Current value',
			value: this.currentCount,
		});

		// Append them
		this.node
			.querySelector('.counter__decreaseButton')
			.appendChild(decreaseButton);
		this.node
			.querySelector('.counter__increaseButton')
			.appendChild(increaseButton);
		this.node.querySelector('.counter__input').appendChild(inputControl);

		// Store the ref
		this.increaseButton = increaseButton;
		this.decreaseButton = decreaseButton;
		this.inputControl = inputControl;

		// Add event listener
		this.node.addEventListener('click', this.handleClick);
		this.inputControl.addEventListener('input', this.handleInput);

		// Set the flag
		this.created = true;
	}

	destroy() {
		if (!this.created) {
			throw new Error(
				'Counter can only be destroyed after being created'
			);
		}
		// destroy all event listeners
		this.node.removeEventListener('click', this.handleClick);
		this.inputControl.removeEventListener('input', this.handleInput);

		// Remove all DOM references
		this.increaseButton = null;
		this.decreaseButton = null;
		this.inputControl = null;
		// Reset the DOM
		this.node.innerHTML = '';
		// Reset the flag
		this.created = false;
	}

	refreshUI() {
		// Update the inputControl value
		this.inputControl.value = this.currentCount;
	}
}
