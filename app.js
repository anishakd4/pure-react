const Person = (props) => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, props.name),
		React.createElement('p', {}, props.occupation),
	]);
};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', { class: 'title' }, 'React is rendered'),
		React.createElement(Person, { name: 'Anish', occupation: 'Android' }, null),
		React.createElement(Person, { name: 'Manish', occupation: 'IOS' }, null),
		React.createElement(Person, { name: 'Renu', occupation: 'QA' }, null),
	]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
