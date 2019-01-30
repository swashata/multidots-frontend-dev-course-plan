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

// Write tests
