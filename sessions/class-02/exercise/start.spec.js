import { SomeFunction } from './start';

describe('SomeFunction is perfect conversion', () => {
	const dragon = new SomeFunction();
	test('name is own property', () => {
		expect(
			Object.prototype.hasOwnProperty.call(dragon, 'name')
		).toBeTruthy();
	});
	test('sayDragon is not own property', () => {
		expect(
			Object.prototype.hasOwnProperty.call(dragon, 'sayDragon')
		).not.toBeTruthy();
	});
});
