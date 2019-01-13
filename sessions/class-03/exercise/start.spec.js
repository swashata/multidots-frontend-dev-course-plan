import { reOrderArray } from './start';

describe('reOrderArray', () => {
	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	test('works when from and to are equal', () => {
		const arrReordered = reOrderArray(arr, 3, 3);
		expect(arrReordered).not.toBe(arr);
		expect(arrReordered).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	});
	test('works when from is greater than to', () => {
		const arrReordered = reOrderArray(arr, 4, 2);
		expect(arrReordered).not.toBe(arr);
		expect(arrReordered).toEqual([0, 1, 4, 2, 3, 5, 6, 7, 8]);
		expect(reOrderArray(arr, 7, 0)).toEqual([7, 0, 1, 2, 3, 4, 5, 6, 8]);
		expect(reOrderArray(arr, 6, 5)).toEqual([0, 1, 2, 3, 4, 6, 5, 7, 8]);
		expect(reOrderArray(arr, 8, 0)).toEqual([8, 0, 1, 2, 3, 4, 5, 6, 7]);
	});
	test('works when from is less than to', () => {
		const arrReordered = reOrderArray(arr, 3, 7);
		expect(arrReordered).not.toBe(arr);
		expect(arrReordered).toEqual([0, 1, 2, 4, 5, 6, 7, 3, 8]);
		expect(reOrderArray(arr, 0, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 0]);
		expect(reOrderArray(arr, 4, 5)).toEqual([0, 1, 2, 3, 5, 4, 6, 7, 8]);
		expect(reOrderArray(arr, 2, 7)).toEqual([0, 1, 3, 4, 5, 6, 7, 2, 8]);
	});
	test('throws error when out of bound', () => {
		expect(() => {
			reOrderArray(arr, 10, 1);
		}).toThrow();
		expect(() => {
			reOrderArray(arr, -10, 1);
		}).toThrow();
		expect(() => {
			reOrderArray(arr, 4, 10);
		}).toThrow();
		expect(() => {
			reOrderArray(arr, 4, -10);
		}).toThrow();
	});
});
