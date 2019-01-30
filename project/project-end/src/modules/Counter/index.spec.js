// Some helpers from dom-testing-library
import {
	getByPlaceholderText,
	getByText,
	fireEvent,
} from 'dom-testing-library';

import Counter from './index';

// A sample implementation
function getCounter(initial = 0, create = true) {
	const container = document.createElement('div');
	const counter = new Counter(container, initial);
	if (create) {
		counter.create();
	}
	return [container, counter];
}

describe('Counter', () => {
	test('mounts application', () => {
		const [container] = getCounter();
		expect(container).not.toBeEmpty();
	});
	test('loads the initial count', () => {
		const [container] = getCounter(10);
		expect(getByPlaceholderText(container, 'Current value').value).toBe(
			'10'
		);
	});
	test('increases on plus button', () => {
		const [container] = getCounter(10);
		// Get the plus button and click it
		const plusBtn = getByText(container, '+');
		const input = getByPlaceholderText(container, 'Current value');
		fireEvent.click(plusBtn);
		expect(input.value).toBe('11');
		fireEvent.click(plusBtn);
		expect(input.value).toBe('12');
		fireEvent.click(plusBtn);
		expect(input.value).toBe('13');
	});
	test('decreases on minus button', () => {
		const [container] = getCounter(10);
		// Get the minus button and click it
		const minusBtn = getByText(container, '-');
		const input = getByPlaceholderText(container, 'Current value');
		fireEvent.click(minusBtn);
		expect(input.value).toBe('9');
		fireEvent.click(minusBtn);
		expect(input.value).toBe('8');
		fireEvent.click(minusBtn);
		expect(input.value).toBe('7');
	});
	describe('synchronizes on direct edit', () => {
		const [container] = getCounter(10);
		const minusBtn = getByText(container, '-');
		const plusBtn = getByText(container, '+');
		const input = getByPlaceholderText(container, 'Current value');
		test('handles proper numeric input', () => {
			// Change the input value
			fireEvent.input(input, { target: { value: '8' } });
			expect(input.value).toBe('8');
		});
		test('handles invalid input', () => {
			fireEvent.input(input, { target: { value: 'a' } });
			expect(input.value).toBe('0');
		});
		test('works fine with the buttons', () => {
			fireEvent.input(input, { target: { value: '3' } });
			expect(input.value).toBe('3');
			fireEvent.click(plusBtn);
			expect(input.value).toBe('4');
			fireEvent.click(minusBtn);
			expect(input.value).toBe('3');
			fireEvent.input(input, { target: { value: '2' } });
			fireEvent.click(minusBtn);
			expect(input.value).toBe('1');
			fireEvent.click(plusBtn);
			expect(input.value).toBe('2');
		});
	});
});
