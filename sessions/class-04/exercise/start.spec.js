import { getModifiedClassName } from './start';

describe('getModifiedClassName', () => {
	test('adds modifier classes', () => {
		const modifiers = {
			hidden: false,
			collapsed: true,
			selected: true,
		};
		expect(getModifiedClassName('elm', modifiers)).toBe(
			'elm elm--collapsed elm--selected'
		);
	});
	test('handles if modifiers are undefined or null or empty object', () => {
		expect(getModifiedClassName('cmp')).toBe('cmp');
		expect(getModifiedClassName('cmp', null)).toBe('cmp');
		expect(getModifiedClassName('cmp', {})).toBe('cmp');
	});
	test('handles if modifiers is not an object', () => {
		expect(getModifiedClassName('cmp', 20)).toBe('cmp');
		expect(getModifiedClassName('cmp', true)).toBe('cmp');
		expect(getModifiedClassName('cmp', [true])).toBe('cmp');
	});
});
