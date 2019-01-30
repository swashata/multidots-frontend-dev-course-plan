// Import our app
import Counter from './modules/Counter';

// Import general styles
import './styles/bulma.scss';
import './styles/app.scss';

// Initialize our app when document is ready
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.counter').forEach(node => {
		const app = new Counter(node);
		app.create();
		const controlButton = node.parentNode.querySelector(
			'.app__destroy .button'
		);
		controlButton.addEventListener('click', e => {
			e.preventDefault();
			if (app.created) {
				app.destroy();
				controlButton.textContent = 'Create';
			} else {
				app.create();
				controlButton.textContent = 'Destroy';
			}
		});
	});
});
