export function getModifiedClassName(base, modifiers = {}) {
	if (
		typeof modifiers !== 'object' ||
		Array.isArray(modifiers) ||
		modifiers === null
	) {
		return base;
	}
	return Object.keys(modifiers).reduce(
		(acc, modifier) =>
			modifiers[modifier] ? `${acc} ${base}--${modifier}` : acc,
		base
	);
}
