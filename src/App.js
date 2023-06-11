export default function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>Travel List 🏝️</h1>;
}

function Form() {
	return (
		<div className="add-form">
			<h3>Add items for your trip here</h3>
		</div>
	);
}

function PackingList() {
	return <div className="list">LIST</div>;
}

function Stats() {
	return (
		<footer className="stats">
			<em>Items in the list : X. Items packed : X (Y%)</em>
		</footer>
	);
}
