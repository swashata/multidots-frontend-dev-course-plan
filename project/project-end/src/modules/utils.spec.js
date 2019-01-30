import { createNode } from './utils';

describe('createNode', () => {
	test('creates the passed element type', () => {
		expect(createNode('a', []).tagName).toBe('A');
	});
	test('has the classes', () => {
		const classes = ['elm', 'foo', 'bar'];
		expect(createNode('div', classes)).toHaveClass(...classes);
	});
	test('has the attributes', () => {
		const attributes = {
			type: 'text',
			'data-someid': 'foo',
			value: 'bar',
		};
		const node = createNode('input', [], attributes);
		Object.keys(attributes).forEach(attr => {
			expect(node).toHaveAttribute(attr, attributes[attr]);
		});
	});
	test('everything works together', () => {
		const classes = ['elm', 'foo', 'bar'];
		const attributes = {
			type: 'text',
			'data-someid': 'foo',
			value: 'bar',
		};
		const node = createNode('input', classes, attributes);
		expect(node).toHaveClass(...classes);
		Object.keys(attributes).forEach(attr => {
			expect(node).toHaveAttribute(attr, attributes[attr]);
		});
		expect(node.tagName).toBe('INPUT');
	});
});
