/* eslint-disable import/prefer-default-export */
/**
 * Create a node.
 *
 * @param {string} tagName Element tagName.
 * @param {string[]} classes Array of class names.
 * @param {Object} attributes Object with key->value pair of attributes.
 *
 * @return {Element} Node element.
 */
export function createNode(tagName, classes, attributes = null) {
	const node = document.createElement(tagName);

	// Add class
	node.classList.add(...classes);

	// Add attributes
	if (attributes !== null) {
		Object.keys(attributes).forEach(key => {
			node.setAttribute(key, attributes[key]);
		});
	}

	// Return the node
	return node;
}
